"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DebugFactory_1 = __importDefault(require("./DebugFactory"));
const InfoFactory_1 = __importDefault(require("./InfoFactory"));
const ErrorFactory_1 = __importDefault(require("./ErrorFactory"));
// Create Debug Logger
const debugFactory = new DebugFactory_1.default();
const debugLogger = debugFactory.createLogger();
debugLogger.log("This is a debug message.");
// Create Info Logger
const infoFactory = new InfoFactory_1.default();
const infoLogger = infoFactory.createLogger();
infoLogger.log("Application started.");
// Create Error Logger
const errorFactory = new ErrorFactory_1.default();
const errorLogger = errorFactory.createLogger();
errorLogger.log("Something went wrong.");
