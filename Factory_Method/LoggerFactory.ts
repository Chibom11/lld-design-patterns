import ILogger from "./ILogger";
import DebugLogger from "./DebugLogger";
import InfoLogger from "./InfoLogger";
import LogLevel from "./LogLevel";
import ErrorLogger from "./ErrorLogger";

class LoggerFactory{
    static createLogger(level:LogLevel):ILogger{
        switch(level){
            case LogLevel.DEBUG:
                return new DebugLogger

            case LogLevel.INFO:
                return new InfoLogger

            case LogLevel.ERROR:
                return new ErrorLogger

            default :
                throw new Error("Invalid Logger")
        }
    }
}

export default LoggerFactory