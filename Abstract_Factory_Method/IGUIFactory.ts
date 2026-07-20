import IButton from "./IButton";
import ISearchBar from "./ISearchBar";

interface IGUIFactory{

    createButton():IButton;

    createSearchBar():ISearchBar;

}

export default IGUIFactory;