// Styles:
import "./SearchResults.css";
// Hooks:
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
// Components:
import SearchBar from "../components/SearchBar";
import SearchResultItem from "../components/SearchResultItem";
// Icons:
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";
import SearchIcon from "@material-ui/icons/Search";
// Response from API:
import { responseObject } from "../serverResponse";
// Routing:
import { Link } from "react-router-dom";

const SearchResults = () => {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term);

  // console.log(data)

  const data = responseObject;
  console.log(data);

  return (
    <div className="searchResults">
      <div className="searchResults__header">
        <Link to="/">
          <img
            className="searchResults__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google"
          />
        </Link>

        <div className="searchResults__searchBar">
          <SearchBar hideButtons />
          <div className="searchResults__options">
            <div className="searchResults__options--leftPart">
              <div className="searchResults__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchResults__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchResults__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchResults__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchResults__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchResults__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchResults__options--rightPart">
              <div className="searchResults__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchResults__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchResults__results">
          <p className="searchResults__resultCounter">
            About {responseObject?.searchInformation.formattedTotalResults}{" "}
            results ({responseObject?.searchInformation.formattedSearchTime}{" "}
            seconds) for {term}
          </p>

          {responseObject?.items.map(item => (
            <SearchResultItem itemInfo={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
