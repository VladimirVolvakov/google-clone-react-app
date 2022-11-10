// Styles:
import "./SearchResults.css";
// Hook:
import { useStateValue } from "../StateProvider";

const SearchResults = () => {
  const [{ term }, dispatch] = useStateValue();

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
};

export default SearchResults;