// Styles:
import "./SearchBar.css";
// Icons:
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar__input">
        <SearchIcon className="searchbar__inputIcon" />
        <input type="text" />
        <MicIcon className="searchbar__inputIcon" />
      </div>
      <div className="searchbar__buttons">
        <Button>Google Search</Button>
        <Button>I'm Feeling Lucky</Button>
      </div>
    </div>
  );
};

export default SearchBar;