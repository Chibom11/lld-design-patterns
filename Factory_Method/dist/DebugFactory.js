"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DebugLogger_1 = __importDefault(require("./DebugLogger"));
class DebugFactory {
    createLogger() {
        return new DebugLogger_1.default();
    }
}
exports.default = DebugFactory;
