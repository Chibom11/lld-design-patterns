import ILogger from "./ILogger";
import ILoggerFactory from "./ILoggerFactory";
import ErrorLogger from "./ErrorLogger";

class ErrorFactory implements ILoggerFactory {

    createLogger(): ILogger {
        return new ErrorLogger();
    }

}

export default ErrorFactory;