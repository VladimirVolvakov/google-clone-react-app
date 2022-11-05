// Styles:
import "./SearchBar.css";
// Icons:
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar__input">
        <SearchIcon className="searchbar__inputIcon" />
        <input type="text" />
        <MicIcon />
      </div>
    </div>
  );
};

export default SearchBar;