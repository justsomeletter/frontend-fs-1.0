import react from "react";
import { FaCamera, FaSearch, FaTimes, FaPlusSquare } from "react-icons/fa";
import "../components-style/Home.css";
function Home() {
  const handleSearchButtonClick = () => {
    console.log(" I am searched");
  };

  const handleCameraButton = () => {
    console.log(" camera opening");
  };

  const handleCrossButtonClick = () => {
    console.log(" Cross button clicked");
  };

  return (
    <div className="home-container">
      <div className="search-bar">
        <button className="cross-icon" onClick={handleCrossButtonClick}>
          <FaPlusSquare />
        </button>

        <input type="text" placeholder="Search...." />
        <button className="camera-icon" onClick={handleCameraButton}>
          <FaCamera />
        </button>
        <button className="search-icon" onClick={handleSearchButtonClick}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default Home;
