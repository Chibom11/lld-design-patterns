import ILogger from "./ILogger";

class ErrorLogger implements ILogger{
    log(msg: string): void {
        console.log("ERROR",msg)
    }
}
export default ErrorLogger