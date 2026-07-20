import IGUIFactory from "./IGUIFactory";
import IButton from "./IButton";
import ISearchBar from "./ISearchBar";

import MacButton from "./MacButton";
import MacSearchBar from "./MacSearchBar";

class MacFactory implements IGUIFactory{

    createButton():IButton{
        return new MacButton();
    }

    createSearchBar():ISearchBar{
        return new MacSearchBar();
    }

}

export default MacFactory;