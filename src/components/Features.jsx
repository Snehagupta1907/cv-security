import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import violenceImage from "../assets/fight 1.png";
import weaponImage from "../assets/knife 1.png";
import crimeImage from "../assets/crime.png";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
  };

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




  const imageStyle = {
    maxWidth: "150px",
    cursor: "pointer",
  };



  return (
    <>
      <Navbar />
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl text-white font-bold mt-12 mb-7">
          CV Security Provides
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-10">
          <div className="w-full">
            <img
              src={violenceImage}
              alt="Violence Detection"
              className="w-full mx-auto rounded-lg"
              style={imageStyle}
              onClick={() => handleFeatureSelect('violence')}
            />
            <p
              className={`text-lg text-white font-semibold mt-3 ${
                selectedFeature === 'violence' ? 'border border-solid border-white' : ''
              }`}
            >
              Violence Detection
            </p>
          </div>
          <div className="w-full">
            <img
              src={weaponImage}
              alt="Weapon Detection"
              className="w-full mx-auto rounded-lg"
              style={imageStyle}
              onClick={() => handleFeatureSelect('weapon')}
            />
            <p
              className={`text-lg text-white font-semibold mt-3 ${
                selectedFeature === 'weapon' ? 'border border-solid border-white' : ''
              }`}
            >
              Weapon Detection
            </p>
          </div>
          <div className="w-full">
            <img
              src={crimeImage}
              alt="Crime Detection"
              className="w-full mx-auto rounded-lg"
              style={imageStyle}
              onClick={() => handleFeatureSelect('crime')}
            />
            <p
              className={`text-lg text-white font-semibold mt-3 ${
                selectedFeature === 'crime' ? 'border border-solid border-white' : ''
              }`}
            >
              Crime Detection
            </p>
          </div>
        </div>
        <Link
          to={`/features/${selectedFeature}/test`}
          className="mt-12 text-white-900 font-semibold py-2 px-4 rounded w-full max-w-[350px] mb-15"
          style={buttonStyle}
        >
          Realtime Testing
        </Link>
      </div>
    </>
  );
};

export default Features;
