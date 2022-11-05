// Styles:
import "./Home.css";
// Icons:
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
// Routing:
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLinks">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body"></div>
    </div>
  );
};

export default Home;