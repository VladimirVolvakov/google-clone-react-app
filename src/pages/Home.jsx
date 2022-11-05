// Styles:
import "./Home.css";
// Component:
import SearchBar from "../components/SearchBar";
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
      <div className="home__body">
        <img 
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
          alt="Google" 
        />
        <div className="home__inputContainer">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Home;