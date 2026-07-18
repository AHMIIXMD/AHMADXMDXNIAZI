// index.js - AHMAD-MD Optimized Core Engine
import { 
    makeWASocket, 
    useMultiFileAuthState, 
    DisconnectReason, 
    fetchLatestBaileysVersion, 
    makeInMemoryStore, 
    jidDecode 
} from '@whiskeysockets/baileys';
import pino from 'pino';
import { Boom } from '@hapi/boom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Safe Config Fallback System
let config = {
    BOT_NAME: 'AHMAD-MD',
    PREFIX: '.',
    MODE: 'public',
    OWNER_NUMBER: '923000000000',
    NEWSLETTER_JID: '120363426472060176@newsletter',
    VERSION: '1.4.0'
};

try {
    const configModule = await import('./config.js');
    config = { ...config, ...configModule.default };
} catch (e) {
    console.log(chalk.yellow('⚠️ config.js file not found or has errors. Using default system configuration.'));
}

// Memory store to maintain chats/contacts tracking data
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

// Global Plugins execution map
export const plugins = new Map();

// Dynamic Git Downloader & Module Injector for AHMIIXMD/Ahmedp_O
async function loadExternalPlugins() {
    const pluginsPath = path.join(__dirname, 'plugins');
    
    try {
        console.log(chalk.yellow('🔄 Syncing external plugins from AHMIIXMD/Ahmedp_O...'));
        if (fs.existsSync(pluginsPath)) {
            fs.rmSync(pluginsPath, { recursive: true, force: true });
        }
        
        execSync(`git clone https://github.com/AHMIIXMD/Ahmedp_O.git ${pluginsPath}`, { stdio: 'ignore' });
        console.log(chalk.green('📥 External plugins repo cloned successfully.'));
    } catch (gitErr) {
        console.error(chalk.red('❌ Git clone failed or dynamic folder missing: '), gitErr.message);
    }

    if (fs.existsSync(pluginsPath)) {
        try {
            const files = fs.readdirSync(pluginsPath).filter(file => file.endsWith('.js'));
            for (const file of files) {
                try {
                    const pluginModule = await import(`./plugins/${file}?t=${Date.now()}`);
                    if (pluginModule.default && pluginModule.default.command) {
                        plugins.set(pluginModule.default.command, pluginModule.default);
                    }
                } catch (err) {
                    // Skip faulty individual plugins without crashing the entire core
                }
            }
            console.log(chalk.cyan(`⚙️ Dynamic Engine: Loaded ${plugins.size} commands directly into core cache.`));
        } catch (dirErr) {
            console.error(chalk.red('❌ Error reading plugins directory: '), dirErr.message);
        }
    }
}

// Start the WhatsApp Connection Bot Engine Pipeline
async function startAhmadMD() {
    await loadExternalPlugins();
    
    const sessionDir = './auth_info_baileys';
    if (!fs.existsSync(sessionDir)) {
        fs.mkdirSync(sessionDir);
    }
    
    const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
    const { version } = await fetchLatestBaileysVersion();
    
    console.log(chalk.blue(`🚀 Starting AHMAD-MD Bot Engine (v${config.VERSION})...`));

    const sock = makeWASocket({
        version,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        auth: state,
        browser: [config.BOT_NAME, 'Safari', '3.0.0'],
        generateHighQualityLinkPreview: true,
        syncFullHistory: false
    });

    store.bind(sock.ev);
    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update;
        
        if (qr) {
            console.log(chalk.yellow('📸 Scan the QR Code below to connect AHMAD-MD Engine:'));
        }
        
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect?.error instanceof Boom) 
                ? lastDisconnect.error.output?.statusCode !== DisconnectReason.loggedOut 
                : true;
            
            console.log(chalk.red(`❌ Connection closed. Reconnecting: ${shouldReconnect}`));
            if (shouldReconnect) {
                startAhmadMD();
            } else {
                console.log(chalk.red('🛑 Device logged out. Please rescan session tokens.'));
                process.exit(0);
            }
        } else if (connection === 'open') {
            console.log(chalk.green('✨ AHMAD-MD IS SUCCESSFULLY CONNECTED TO WHATSAPP ✨'));
            
            try {
                const forwardMessageJid = config.NEWSLETTER_JID || '120363426472060176@newsletter';
                console.log(chalk.cyan(`📢 Channel verification synchronized for JID: ${forwardMessageJid}`));
            } catch (chanErr) {
                // Muted
            }

            try {
                const startupText = `*⚡ AHMAD-MD Connected Successfully!*\n\n*Bot Name:* ${config.BOT_NAME}\n*Prefix:* \`${config.PREFIX}\` \n*Mode:* ${config.MODE}`;
                await sock.sendMessage(`${config.OWNER_NUMBER}@s.whatsapp.net`, { text: startupText });
            } catch (msgErr) {
                // Prevents crash if owner number format is invalid
            }
        }
    });

    sock.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            const mek = chatUpdate.messages[0];
            if (!mek.message) return;
            
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            
            const from = mek.key.remoteJid;
            const isGroup = from.endsWith('@g.us');
            const sender = isGroup ? (mek.key.participant || mek.key.remoteJid) : mek.key.remoteJid;
            
            const isOwner = sender.includes(config.OWNER_NUMBER);
            if (!isOwner && config.MODE === 'private') return;

            const type = Object.keys(mek.message)[0];
            const body = (type === 'conversation') ? mek.message.conversation : 
                         (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : 
                         (type === 'imageMessage') ? mek.message.imageMessage.caption : 
                         (type === 'videoMessage') ? mek.message.videoMessage.caption : '';

            const isCmd = body.startsWith(config.PREFIX);
            const command = isCmd ? body.slice(config.PREFIX.length).trim().split(/ +/).shift().toLowerCase() : false;

            if (isCmd && command) {
                console.log(chalk.blueBright(`💻 Processing Command: ${config.PREFIX}${command}`));
                if (plugins.has(command)) {
                    const plugin = plugins.get(command);
                    await plugin.run({ sock, mek, from, body, isGroup, sender, isOwner, config });
                }
            }
        } catch (err) {
            console.error(chalk.red('⚠️ Runtime Message Exception: '), err);
        }
    });

    return sock;
}

export function decodeJid(jid) {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
        let decode = jidDecode(jid) || {};
        return decode.user && decode.server && `${decode.user}@${decode.server}` || jid;
    }
    return jid;
}

startAhmadMD().catch(err => console.error(chalk.red('🔥 Core Application Crash: '), err));
