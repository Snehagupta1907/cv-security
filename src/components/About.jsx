import React from 'react'
import laptopImg from "../assets/New Macbook Pro Mockup Front View.png"

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8" style={{backgroundColor:"#27aa8a"}} id="about">
      {/* Left Side */}
      <div className="md:col-span-1 md:ml-12 mt-12" style={{backgroundColor:"#27aa8a"}} >
        <h1 className="text-4xl font-black mb-4 mt-12" style={{backgroundColor:"#27aa8a", color:"var(--color-gray)"}}>
          About The Platform
        </h1>
        <p className="md:mb-4 text-white" style={{backgroundColor:"#27aa8a"}}>
        CV Security is committed to your safety and asset protection through advanced deep learning technology. Our innovative solutions empower us to identify and respond to potential threats within uploaded videos. By leveraging the capabilities of artificial intelligence, we deliver heightened security and peace of mind to our clients. With our vigilant monitoring, you can trust that your safety and valuable assets are in expert hands, ensuring a secure and worry-free environment.
        </p>
      </div>

      {/* Right Side */}
      <div className="md:col-span-1 md:mt-12 ml-12" style={{backgroundColor:"#27aa8a"}}>
        <img
          src={laptopImg}
          alt="about"
          className="max-w-full h-auto mt-12 mb-10"
          style={{ maxWidth: "80%", marginRight: "0",backgroundColor:"#27aa8a" }}
        />
      </div>
    </div>
  )
}

export default About