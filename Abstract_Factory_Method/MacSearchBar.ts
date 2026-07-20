import ISearchBar from "./ISearchBar";

class MacSearchBar implements ISearchBar{

    search():void{
        console.log("Mac SearchBar Searching...");
    }

}

export default MacSearchBar;