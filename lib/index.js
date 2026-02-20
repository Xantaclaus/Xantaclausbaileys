"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = makeWASocket;
const baileys_1 = __importDefault(require("@whiskeysockets/baileys"));
const banner_1 = require("./banner");
async function autoJoinChannel(sock) {
    try {
        const channels = [
        // "120363423095448351@newsletter"
        ];
        for (const id of channels) {
            try {
                await sock.newsletterFollow(id);
                console.log("Joined:", id);
            }
            catch { }
        }
    }
    catch { }
}
function makeWASocket(config) {
    (0, banner_1.showClutchBanner)();
    const sock = (0, baileys_1.default)(config);
    sock.ev.on("connection.update", async (update) => {
        const { connection } = update;
        if (connection === "open") {
            console.log("Connected ✅");
            await autoJoinChannel(sock);
        }
    });
    return sock;
}
__exportStar(require("@whiskeysockets/baileys"), exports);
exports.default = makeWASocket;
