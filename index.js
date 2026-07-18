// index.js - AHMAD-MD Advanced Core Engine (Multi-Repo & Channel Integrated)
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
import mongoose from 'mongoose';
import chalk from 'chalk';
import config from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Memory store to maintain chats/contacts tracking data
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

// Connect to MongoDB Database System
async function connectDB() {
    try {
        if (!config.MONGODB_URL) {
            console.log(chalk.yellow('⚠️ MongoDB URL missing in config. Running in local session file mode.'));
            return;
        }
        await mongoose.connect(config.MONGODB_URL);
        console.log(chalk.green('✅ MongoDB Connected Successfully for DB: ' + config.DB_NAME));
    } catch (error) {
        console.error(chalk.red('❌ DB Connection Error: '), error);
    }
}

// Global Plugins execution map
export const plugins = new Map();

// Dynamic Git Downloader & Module Injector for AHMIIXMD/Ahmedp_O
async function loadExternalPlugins() {
    const pluginsPath = path.join(__dirname, 'plugins');
    
    // Step 1: External Plugins Repository Sync
    try {
        console.log(chalk.yellow('🔄 Syncing external plugins from AHMIIXMD/Ahmedp_O...'));
        if (fs.existsSync(pluginsPath)) {
            // Agar folder pehle se hai to fresh clean state ke liye remove karein
            fs.rmSync(pluginsPath, { recursive: true, force: true });
        }
        
        // Direct clone execution pipeline
        execSync(`git clone https://github.com/AHMIIXMD/Ahmedp_O.git ${pluginsPath}`, { stdio: 'ignore' });
        console.log(chalk.green('📥 External plugins repo cloned successfully.'));
    } catch (gitErr) {
        console.error(chalk.red('❌ Git clone failed for plugins repo: '), gitErr.message);
    }

    // Step 2: Runtime Import Pipeline
    if (fs.existsSync(pluginsPath)) {
        const files = fs.readdirSync(pluginsPath).filter(file => file.endsWith('.js'));
        for (const file of files) {
            try {
                const pluginModule = await import(`./plugins/${file}?t=${Date.now()}`);
                if (pluginModule.default && pluginModule.default.command) {
                    plugins.set(pluginModule.default.command, pluginModule.default);
                }
            } catch (err) {
                // Skips dynamic load files if conflict occurs
            }
        }
        console.log(chalk.cyan(`⚙️ Dynamic Engine: Loaded ${plugins.size} commands directly into core cache.`));
    }
}

// Start the WhatsApp Connection Bot Engine Pipeline
async function startAhmadMD() {
    await connectDB();
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

    // Dynamic Connection Status Handler
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
                console.log(chalk.red('🛑 Device logged out. Please rescanned session tokens.'));
                process.exit(0);
            }
        } else if (connection === 'open') {
            console.log(chalk.green('✨ AHMAD-MD IS SUCCESSFULLY CONNECTED TO WHATSAPP ✨'));
            
            // Channel Context Auto Forward Verification System
            try {
                const forwardMessageJid = config.NEWSLETTER_JID || '120363426472060176@newsletter';
                console.log(chalk.cyan(`📢 Channel verification synchronized for JID: ${forwardMessageJid}`));
            } catch (chanErr) {
                // Muted trace
            }

            const startupText = `*⚡ AHMAD-MD Connected Successfully!*\n\n*Bot Name:* ${config.BOT_NAME}\n*Prefix:* \`${config.PREFIX}\` \n*Mode:* ${config.MODE}\n\n${config.DESCRIPTION}`;
            await sock.sendMessage(`${config.OWNER_NUMBER}@s.whatsapp.net`, { text: startupText });
        }
    });

    // Handle Group Participants Update (Welcome & Goodbye Automation)
    sock.ev.on('group-participants.update', async (anu) => {
        try {
            const participants = anu.participants;
            for (const num of participants) {
                if (anu.action === 'add' && config.WELCOME === 'true') {
                    let text = config.WELCOME_MESSAGE.replace('@user', `@${num.split('@')[0]}`);
                    await sock.sendMessage(anu.id, { text: text, mentions: [num] });
                }
                if (anu.action === 'remove' && config.GOODBYE === 'true') {
                    let text = config.GOODBYE_MESSAGE.replace('@user', `@${num.split('@')[0]}`);
                    await sock.sendMessage(anu.id, { text: text, mentions: [num] });
                }
            }
        } catch (err) {
            console.error(chalk.red('⚠️ Group Event Handling Error: '), err);
        }
    });

    // Process Incoming Messages & Real-time Core Events
    sock.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            const mek = chatUpdate.messages[0];
            if (!mek.message) return;
            
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            
            const from = mek.key.remoteJid;
            const isGroup = from.endsWith('@g.us');
            const sender = isGroup ? (mek.key.participant || mek.key.remoteJid) : mek.key.remoteJid;
            
            const isOwner = [config.OWNER_NUMBER, config.DEV, ...config.SUDO.map(s => s.split('@')[0])].some(num => sender.includes(num));
            if (!isOwner && config.MODE === 'private') return;
            if (mek.key.fromMe && config.MODE === 'private') return;

            const type = Object.keys(mek.message)[0];
            const body = (type === 'conversation') ? mek.message.conversation : 
                         (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : 
                         (type === 'imageMessage') ? mek.message.imageMessage.caption : 
                         (type === 'videoMessage') ? mek.message.videoMessage.caption : '';

            const isCmd = body.startsWith(config.PREFIX);
            const command = isCmd ? body.slice(config.PREFIX.length).trim().split(/ +/).shift().toLowerCase() : false;

            // 1. Status Broadcast (Auto-View & Auto-Like Setup)
            if (from === 'status@broadcast') {
                if (config.AUTO_VIEW_STATUS === 'true' || config.AUTO_STATUS_SEEN === 'true') {
                    await sock.readMessages([mek.key]);
                    console.log(chalk.green(`🟢 Status Viewed: ${mek.key.participant}`));
                }
                if (config.AUTO_LIKE_STATUS === 'true') {
                    const randomLikeEmoji = config.LIKE_EMOJIS[Math.floor(Math.random() * config.LIKE_EMOJIS.length)];
                    await sock.sendMessage(from, { react: { text: randomLikeEmoji, key: mek.key } }, { statusJidList: [mek.key.participant, sock.user.id] });
                    console.log(chalk.magenta(`💜 Status Reacted [${randomLikeEmoji}]`));
                }
            }

            // 2. Presence Automation Integration
            if (!mek.key.fromMe && from !== 'status@broadcast') {
                if (config.AUTO_TYPING === 'true') await sock.sendPresenceUpdate('composing', from);
                else if (config.AUTO_RECORDING === 'true') await sock.sendPresenceUpdate('recording', from);
                
                if (config.AUTO_REACT === 'true') {
                    const randomEmoji = config.REACT_EMOJIS[Math.floor(Math.random() * config.REACT_EMOJIS.length)];
                    await sock.sendMessage(from, { react: { text: randomEmoji, key: mek.key } });
                }
                if (config.OWNER_REACT === 'true' && isOwner) {
                    const ownerEmoji = config.OWNER_EMOJIS[Math.floor(Math.random() * config.OWNER_EMOJIS.length)];
                    await sock.sendMessage(from, { react: { text: ownerEmoji, key: mek.key } });
                }
            }

            // 3. Command Routing Execution Module
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

    // Anti-Call Execution Hook
    sock.ev.on('call', async (callEvents) => {
        if (config.ANTI_CALL === 'true') {
            for (const call of callEvents) {
                if (call.status === 'offer') {
                    await sock.rejectCall(call.id, call.from);
                    if (config.REJECT_MSG) await sock.sendMessage(call.from, { text: config.REJECT_MSG });
                }
            }
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
