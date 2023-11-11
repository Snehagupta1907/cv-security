import React, { useState } from "react";
import cameraImg from "../assets/Group 11.png";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "#27aa8a" : "var(--color-green)",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "8px",
    maxWidth: "350px",
    width: "100%",
    transition: "background-color 0.3s",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8" id="home">
  {/* Left Side */}
  <div className="md:col-span-1 md:ml-12 mt-12">
    <h1 className="md:text-5xl font-bold mb-4 text-white text-4xl text-center md:text-left">
      Smart Security <br />
      System For The <br /> Modern World
    </h1>
    <p className="mb-4 text-center md:text-left" style={{ color: "var(--color-green)" }}>
      All in one solution to your security needs
    </p>
    <div className="text-center md:text-left"> {/* Center the button on small screens */}
      <button
        className="mt-12 text-white-900 font-semibold py-2 px-4 rounded w-full max-w-[350px] md:inline-block"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Explore Now
      </button>
    </div>
  </div>

  {/* Right Side */}
  <div className="md:col-span-1 -mt-8">
    <img
      src={cameraImg}
      alt="Home"
      className="max-w-full h-auto"
      style={{ maxWidth: "85%", marginRight: "0" }}
    />
  </div>
</div>

  );
};

export default Home;
