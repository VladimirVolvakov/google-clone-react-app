// Styles:
import "./SearchBar.css";
// Icons:
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
// Hook:
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [googleSearchQuery, setGoogleSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchQuery = event => {
    event.preventDefault();
    navigate("/search");
  };

  return (
    <form className="searchbar">
      <div className="searchbar__input">
        <SearchIcon className="searchbar__inputIcon" />
        <input 
          value={googleSearchQuery} 
          onChange={event => setGoogleSearchQuery(event.target.value)} 
        />
        <MicIcon className="searchbar__inputIcon" />
      </div>
      <div className="searchbar__buttons">
        <Button type="submit" onClick={searchQuery}>Google Search</Button>
        <Button>I'm Feeling Lucky</Button>
      </div>
    </form>
  );
};

export default SearchBar;