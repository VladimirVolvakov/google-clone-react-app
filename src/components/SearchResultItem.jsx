// Styles:
import "./SearchResultItem.css";

const SearchResultItem = ({ itemInfo }) => {
  return (
    <article className="searchResults__result">
      <a href={itemInfo.link}>
        {itemInfo.pagemap?.cse_image?.length > 0 && itemInfo.pagemap?.cse_image[0]?.src && (
          <img className="searchResults__resultImage" src={itemInfo.pagemap?.cse_image[0]?.src} alt="" />
        )}
        {itemInfo.displayLink}
      </a>
      <a href={itemInfo.link} className="searchResults__resultTitle">
        <h2>{itemInfo.title}</h2>
      </a>
      <p className="searchResults__resultSnippet">{itemInfo.snippet}</p>
    </article>
  );
};

export default SearchResultItem;
