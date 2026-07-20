import ILogger from "./ILogger";

class InfoLogger implements ILogger{
    log(msg: string): void {
        console.log("INFO",msg)
    }
}

export default InfoLogger