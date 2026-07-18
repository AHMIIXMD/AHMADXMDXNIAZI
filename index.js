// index.js - AHMAD-MD Heavily Guarded Core Engine
import http from 'http';
import chalk from 'chalk';

// 1. Instant Port Binding for Heroku (Executed immediately to bypass H10 Timeout)
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('AHMAD-MD Core Engine Runtime Operational\n');
});

server.listen(PORT, () => {
    console.log(chalk.green(`🌐 Web Server initialized immediately on port ${PORT}`));
});

// 2. Encapsulated Application Launch Execution Block
async function bootstrap() {
    try {
        const { default: pino } = await import('pino');
        const { Boom } = await import('@hapi/boom');
        const { default: fs } = await import('fs');
        const { default: path } = await import('path');
        const { fileURLToPath } = await import('url');
        const { execSync } = await import('child_process');
        
        const { 
            makeWASocket, 
            useMultiFileAuthState, 
            DisconnectReason, 
            fetchLatestBaileysVersion, 
            makeInMemoryStore, 
            jidDecode 
        } = await import('@whiskeysockets/baileys');

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

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
            console.log(chalk.yellow('⚠️ config.js fallback engaged.'));
        }

        const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
        const plugins = new Map();

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
                console.error(chalk.red('❌ Plugins sync bypassed: '), gitErr.message);
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
                        } catch (err) {}
                    }
                    console.log(chalk.cyan(`⚙️ Core Engine: Loaded ${plugins.size} modules.`));
                } catch (dirErr) {}
            }
        }

        async function startAhmadMD() {
            await loadExternalPlugins();
            const sessionDir = './auth_info_baileys';
            if (!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir);
            
            const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
            const { version } = await fetchLatestBaileysVersion();
            
            console.log(chalk.blue(`🚀 Launching AHMAD-MD Process Engine...`));

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
                if (qr) console.log(chalk.yellow('📸 QR Code generated. Check terminal.'));
                
                if (connection === 'close') {
                    const shouldReconnect = (lastDisconnect?.error instanceof Boom) 
                        ? lastDisconnect.error.output?.statusCode !== DisconnectReason.loggedOut 
                        : true;
                    if (shouldReconnect) startAhmadMD();
                } else if (connection === 'open') {
                    console.log(chalk.green('✨ AHMAD-MD IS SECURELY CONNECTED ✨'));
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
        }

        await startAhmadMD();

    } catch (criticalError) {
        console.error(chalk.red('\n🛑 CRITICAL INITIALIZATION ERROR DETECTED:'));
        console.error(chalk.red(criticalError.stack || criticalError.message));
        console.error(chalk.red('-------------------------------------------\n'));
    }
}

bootstrap();
