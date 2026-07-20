import ISearchBar from "./ISearchBar";

class WinSearchBar implements ISearchBar{

    search():void{
        console.log("Windows SearchBar Searching...");
    }

}

export default WinSearchBar;