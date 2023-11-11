import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {TbBrandGithubFilled} from 'react-icons/tb'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className=" p-4 text-gray text-center" style={{backgroundColor:"#27aa8a"}}>
      <div className="flex justify-center space-x-9 mt-4 mb-4">
        <a
          href="https://www.linkedin.com/in/sneha-gupta-239aa1201/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin size="2em" className="custom-icon-color" />
        </a>
        <a
          href="https://github.com/Snehagupta1907"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandGithubFilled size="2em"className="custom-icon-color" />
        </a>
        <a
          href="https://www.instagram.com/sneha_19_07/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram size="2em" className="custom-icon-color" />
        </a>
      </div>
      <p className="mb-4 mt-4 text-white">&copy; 2023 CV Security. All rights reserved.</p>
      <p className="mb-4 mt-4 text-white">Website designed and developed by Sneha Gupta</p>
    </footer>
  )
}

export default Footer