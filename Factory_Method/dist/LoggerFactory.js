"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DebugLogger_1 = __importDefault(require("./DebugLogger"));
const InfoLogger_1 = __importDefault(require("./InfoLogger"));
const LogLevel_1 = __importDefault(require("./LogLevel"));
const ErrorLogger_1 = __importDefault(require("./ErrorLogger"));
class LoggerFactory {
    static createLogger(level) {
        switch (level) {
            case LogLevel_1.default.DEBUG:
                return new DebugLogger_1.default;
            case LogLevel_1.default.INFO:
                return new InfoLogger_1.default;
            case LogLevel_1.default.ERROR:
                return new ErrorLogger_1.default;
            default:
                throw new Error("Invalid Logger");
        }
    }
}
exports.default = LoggerFactory;
