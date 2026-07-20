import ILogger from "./ILogger";

interface ILoggerFactory {
    createLogger(): ILogger;
}

export default ILoggerFactory;