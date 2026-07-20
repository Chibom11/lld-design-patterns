"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WinFactory_1 = __importDefault(require("./WinFactory"));
let factory;
// Suppose user is on Windows
factory = new WinFactory_1.default();
// factory = new MacFactory();
const button = factory.createButton();
const searchBar = factory.createSearchBar();
button.render();
searchBar.search();
