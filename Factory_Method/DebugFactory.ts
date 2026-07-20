import ILogger from "./ILogger";
import ILoggerFactory from "./ILoggerFactory";
import DebugLogger from "./DebugLogger";

class DebugFactory implements ILoggerFactory {

    createLogger(): ILogger {
        return new DebugLogger();
    }

}

export default DebugFactory;