import React, { useState } from 'react';
import { FaCamera, FaSearch, FaTimes, FaPlusSquare } from "react-icons/fa";
import Modal from "../components/Modal";
import "../components-style/Home.css";
import { data } from '../assets/data/data.js'

function Home() {
  const [search, setSearch] = useState("")
  const [openModal, SetOpenModal] = useState(false)
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

        <input type="text" placeholder="Search...." onChange={(e) => setSearch(e.target.value)} />
        <button className="camera-icon" onClick={handleCameraButton}>
          <FaCamera />
        </button>
        <button className="search-icon" onClick={(e) => setSearch(e.target.value)}>
          <FaSearch />
        </button>
      </div>
      <div onClick={() => openModal(true)}>
        {data.filter(({ id }) => {
          return search.toLocaleLowerCase() === ''
            ? id
            : id.toLocaleLowerCase().includes(search)
        }).map(({ id }) =>
          <>
            <div>
              <h1 onClick={() => SetOpenModal(true)} >{id}</h1>
              <Modal key={id} open={openModal} onClose={() => SetOpenModal(false)} />
            </div>
          </>)
        }

      </div>
    </div>
  );
}

export default Home;

