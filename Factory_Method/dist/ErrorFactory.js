"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorLogger_1 = __importDefault(require("./ErrorLogger"));
class ErrorFactory {
    createLogger() {
        return new ErrorLogger_1.default();
    }
}
exports.default = ErrorFactory;
