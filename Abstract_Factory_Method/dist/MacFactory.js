"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MacButton_1 = __importDefault(require("./MacButton"));
const MacSearchBar_1 = __importDefault(require("./MacSearchBar"));
class MacFactory {
    createButton() {
        return new MacButton_1.default();
    }
    createSearchBar() {
        return new MacSearchBar_1.default();
    }
}
exports.default = MacFactory;
