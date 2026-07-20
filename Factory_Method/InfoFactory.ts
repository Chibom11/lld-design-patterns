import ILogger from "./ILogger";
import ILoggerFactory from "./ILoggerFactory";
import InfoLogger from "./InfoLogger";

class InfoFactory implements ILoggerFactory {

    createLogger(): ILogger {
        return new InfoLogger();
    }

}

export default InfoFactory;