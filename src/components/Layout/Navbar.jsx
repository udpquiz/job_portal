import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () => {
    return navigate("/login");
  };

  return (
    <nav className="navbarShow">
      <div className="container">
        <div className="logo">
          <img src="/JobZee-logos__white.png" alt="logo" />
        </div>

        <h5>Welcome User</h5>

        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link onClick={() => setShow(false)}>
              ALL JOBS
            </Link>
          </li>
          <li>
            <Link onClick={() => setShow(false)}>
            "MY APPLICATIONS"
            </Link>
          </li>
              <li>
                <Link onClick={() => setShow(false)}>
                  POST NEW JOB
                </Link>
              </li>
              <li>
                <Link onClick={() => setShow(false)}>
                  VIEW YOUR JOBS
                </Link>
              </li>

          <button onClick={handleLogout}>LOGOUT</button>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;