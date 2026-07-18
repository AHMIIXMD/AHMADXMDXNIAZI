// index.js - AHMAD-MD Patched Core Engine (With Heroku Port Binding)
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
import http from 'http'; // Heroku crash fix karne ke liye basic HTTP import

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🛠️ FIX FOR HEROKU CRASH (H10): Creates a dummy web server to satisfy Heroku Port check
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('AHMAD-MD Bot Engine is running successfully!\n');
});
server.listen(PORT, () => {
    console.log(chalk.green(`🌐 Web Server bound to port ${PORT} successfully for Heroku.`));
});

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
    console.log(chalk.yellow('⚠️ config.js file missing or has errors. Using defaults.'));
}

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
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
        console.error(chalk.red('❌ Git clone failed: '), gitErr.message);
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
                    // Skip faulty individual plugins
                }
            }
            console.log(chalk.cyan(`⚙️ Dynamic Engine: Loaded ${plugins.size} commands into cache.`));
        } catch (dirErr) {
            console.error(chalk.red('❌ Error reading plugins folder: '), dirErr.message);
        }
    }
}

// Start WhatsApp Connection Bot
async function startAhmadMD() {
    await loadExternalPlugins();
    
    const sessionDir = './auth_info_baileys';
    if (!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir);
    
    const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
    const { version } = await fetchLatestBaileysVersion();
    
    console.log(chalk.blue(`🚀 Starting AHMAD-MD Bot Engine...`));

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
        if (qr) console.log(chalk.yellow('📸 Scan the QR Code below:'));
        
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect?.error instanceof Boom) 
                ? lastDisconnect.error.output?.statusCode !== DisconnectReason.loggedOut 
                : true;
            if (shouldReconnect) startAhmadMD();
        } else if (connection === 'open') {
            console.log(chalk.green('✨ AHMAD-MD IS CONNECTED SUCCESSFULLY ✨'));
            try {
                const forwardMessageJid = config.NEWSLETTER_JID || '120363426472060176@newsletter';
                console.log(chalk.cyan(`📢 Channel synchronized: ${forwardMessageJid}`));
                await sock.sendMessage(`${config.OWNER_NUMBER}@s.whatsapp.net`, { text: `*⚡ AHMAD-MD Booted Successfully!*` });
            } catch (err) {}
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

            const type = Object.keys(mek.message)[0];
            const body = (type === 'conversation') ? mek.message.conversation : 
                         (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '';

            const isCmd = body.startsWith(config.PREFIX);
            const command = isCmd ? body.slice(config.PREFIX.length).trim().split(/ +/).shift().toLowerCase() : false;

            if (isCmd && command && plugins.has(command)) {
                await plugins.get(command).run({ sock, mek, from, body, isGroup, sender, isOwner, config });
            }
        } catch (err) {}
    });

    return sock;
}

startAhmadMD().catch(err => console.error(chalk.red('🔥 Core Crash: '), err));
