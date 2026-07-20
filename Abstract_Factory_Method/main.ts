import IGUIFactory from "./IGUIFactory";

import IButton from "./IButton";
import ISearchBar from "./ISearchBar";

import WinFactory from "./WinFactory";
import MacFactory from "./MacFactory";

//user on windows
let factory:IGUIFactory= new WinFactory();;

const button:IButton = factory.createButton();

const searchBar:ISearchBar = factory.createSearchBar();

button.render();

searchBar.search();