import IGUIFactory from "./IGUIFactory";
import IButton from "./IButton";
import ISearchBar from "./ISearchBar";

import WinButton from "./WinButton";
import WinSearchBar from "./WinSearchBar";

class WinFactory implements IGUIFactory{

    createButton():IButton{
        return new WinButton();
    }

    createSearchBar():ISearchBar{
        return new WinSearchBar();
    }

}

export default WinFactory;