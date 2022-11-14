// Styles:
import "./SearchResultItem.css";

const SearchResultItem = ({ itemInfo }) => {
  return (
    <article className="searchResults__result">
      <a href={itemInfo.link}>{itemInfo.displayLink}</a>
      <a href={itemInfo.link} className="searchResults__resultTitle">
        <h2>{itemInfo.title}</h2>
      </a>
      <p className="searchResults__resultSnippet">{itemInfo.snippet}</p>
    </article>
  );
};

export default SearchResultItem;
