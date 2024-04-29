import React from "react";
import { Link } from "react-router-dom";
import { useMydata } from "../../TodoProvider.js/TodoProvider";
import { TbMenuOrder } from "react-icons/tb";
import { PiCrosshairFill } from "react-icons/pi";
import { useTheme } from "../../ColorTheme/ColorTheme.js";
import { FaLightbulb } from "react-icons/fa";
import { MdWbTwilight } from "react-icons/md";
const Navbar = () => {
  const { token, handleLogout, handlemenu, menu, setmenu } = useMydata();
  const { color, themes, toggle } = useTheme();
  return (
    <div className="navbar">
      {token ? (
        <>
          <div>
            <Link to="/" className="link">
              Logo
            </Link>
          </div>
          <div className="menu">
            {menu ? (
              <PiCrosshairFill size={20} onClick={handlemenu} />
            ) : (
              <TbMenuOrder size={20} onClick={handlemenu} />
            )}
          </div>
          <div className={menu ? "nav" : "disnav"}>
            <Link to="/chat" className="link">
              Chat
            </Link>
            <Link to="/profile" className="link">
              Your Profile
            </Link>
            <Link className="link" onClick={handleLogout}>
              Logout
            </Link>
            {color ? (
              <Link className="link" onClick={toggle}>
                {" "}
                <FaLightbulb size={20} />
              </Link>
            ) : (
              <Link className="link" onClick={toggle}>
                <MdWbTwilight size={20}/>
              </Link>
            )}
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to="/" className="link">
              Logo
            </Link>
          </div>
          <div className="menu">
            {menu ? (
              <PiCrosshairFill size={20} onClick={handlemenu} />
            ) : (
              <TbMenuOrder size={20} onClick={handlemenu} />
            )}
          </div>
          <div className={menu ? "nav" : "disnav"}>
            <Link to="/signup" className="link">
              Signup
            </Link>
            <Link to="/login" className="link">
              Login
            </Link>
            {color ? (
              <Link className="link" onClick={toggle}>
                {" "}
                <FaLightbulb size={20} />
              </Link>
            ) : (
              <Link className="link" onClick={toggle}>
                <MdWbTwilight size={20}/>
              </Link>
            )}
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Navbar;
