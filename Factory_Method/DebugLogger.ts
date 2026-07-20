import ILogger from "./ILogger";

class DebugLogger implements ILogger{
    log(msg:string):void{
        console.log("DEBUG",msg)
    }

}

export default DebugLogger