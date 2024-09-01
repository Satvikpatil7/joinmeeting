import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; // Assuming there's a corresponding CSS file

const HomePage = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (value.trim()) {
      navigate(`/room/${value}`);
    }
  }, [value, navigate]);

  return (
    <div className="container">
      <div className="form-group">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter room code"
          className="input-box"
        />
        <button onClick={handleJoinRoom} className="join-button">
          Join
        </button>
      </div>
    </div>
  );
};

export default HomePage;
