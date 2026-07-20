import IButton from "./IButton";

class MacButton implements IButton{

    render():void{
        console.log("Mac Button Rendered");
    }

}

export default MacButton;