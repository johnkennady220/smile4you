// import './App.css'

import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
 
  return (
    <div className="   relative bg-transparent w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 shadow-[0_10px_10px_rgb(0,0,0,0.3)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <span>
            <img src={logo} alt="logo" className="logo h-16 w-24 " />
            </span>
          
           
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="members"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Members
            </Link>

            <Link
              to="donation"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Donation
            </Link>

          </nav>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
