"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InfoLogger_1 = __importDefault(require("./InfoLogger"));
class InfoFactory {
    createLogger() {
        return new InfoLogger_1.default();
    }
}
exports.default = InfoFactory;
