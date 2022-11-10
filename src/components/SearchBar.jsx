// Styles:
import "./SearchBar.css";
// Icons:
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
// Hooks:
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
// Actions:
import { actionTypes } from "../reducer";

const SearchBar = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [googleSearchQuery, setGoogleSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchQuery = event => {
    event.preventDefault();
    
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: googleSearchQuery
    });
    
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
      <div className={ !hideButtons ? "searchbar__buttons" : "searchbar__buttons hidden" }>
        <Button type="submit" onClick={searchQuery}>Google Search</Button>
        <Button>I'm Feeling Lucky</Button>
      </div>
    </form>
  );
};

export default SearchBar;