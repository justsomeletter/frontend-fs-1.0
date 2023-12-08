import React, { useState } from "react";
import { FaCamera, FaSearch, FaPlusSquare } from "react-icons/fa";
import Modal from "../components/Modal";
import "../components-style/Home.css";
import { data } from "../assets/data/data.js";

function Home() {
  {
    /*decalering 2 state variables to remember the something.
  initially the search is empty. Each time user enters something
  the setSearch i.e state setter function updates the value of search*/
  }
  const [search, setSearch] = useState("");

  // to open modal we use simple conditional rendering approach with boolean variable
  const [openModal, SetOpenModal] = useState(null);

  const handleOpenModel = (modelId) => {
    SetOpenModal(modelId);
  };

  const handleSearchButtonClick = () => {
    // why this function is not wokring as it should be wprking ?
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

        <input
          type="text"
          placeholder="Search...."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="camera-icon" onClick={handleCameraButton}>
          <FaCamera />
        </button>

        {/* why we didn't used the search state variable? 
        Although this is also not wrong but just asking for better 
        understanding of the project */}
        <button
          className="search-icon"
          onClick={(e) => setSearch(search)}
        >
          <FaSearch />
        </button>
      </div>
      <div>
        {data
          .filter(({ id }) => id.toLocaleLowerCase().includes(search))
          .map(({ id }) => (
            <div key={id}>
              <h1 onClick={() => handleOpenModel(id)}>{id}</h1>
              {openModal === id && (
                <Modal
                  id = {id}
                  open={openModal}
                  onClose={() => SetOpenModal(false)}
                />
              )}
            </div>
          ))}
      </div>

    </div>
  )
} export default Home;
