import ILogger from "./ILogger";

import DebugFactory from "./DebugFactory";
import InfoFactory from "./InfoFactory";
import ErrorFactory from "./ErrorFactory";

// Create Debug Logger
const debugFactory = new DebugFactory();
const debugLogger: ILogger = debugFactory.createLogger();
debugLogger.log("This is a debug message.");

// Create Info Logger
const infoFactory = new InfoFactory();
const infoLogger: ILogger = infoFactory.createLogger();
infoLogger.log("Application started.");

// Create Error Logger
const errorFactory = new ErrorFactory();
const errorLogger: ILogger = errorFactory.createLogger();
errorLogger.log("Something went wrong.");