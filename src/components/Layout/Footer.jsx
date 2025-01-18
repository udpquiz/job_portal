import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footerShow">
      <div>&copy; All Rights Reserved By Ammar.</div>
      <div>
        <Link>
          <FaFacebookF />
        </Link>
        <Link>
          <FaYoutube />
        </Link>
        <Link>
          <FaLinkedin />
        </Link>
        <Link>
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
