import IButton from "./IButton";

class WinButton implements IButton{

    render():void{
        console.log("Windows Button Rendered");
    }

}

export default WinButton;