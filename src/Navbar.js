import React from "react";
import {useNavigate } from "react-router-dom";
import {
  FaBuffer,
  FaGrin,
  FaRegGem,
  FaRocket,
  FaRocketchat,
} from "react-icons/fa";

const Navbar = () => {
  //navigate dom react
  const navigate = useNavigate();
  return (
    <nav className="bg-bg-gray-900  px-2 py-1 bg-white fixed flex flex-wrap items-center justify-center mx-auto w-full z-20 bottom-0 left-0">
      <ul className="flex p-4 mt-4 rounded-lg bg-gray-200 md:flex-row lg:flex-row lg:space-x-40 lg:text-lg md:space-x-8 md:text-base sm:space-x-8 ">
        <li>
          <div
          //use navigate 
            onClick={() => navigate("/")}
            className="block py-2 pl-3 pr-4  flex text-black align rounded hover:text-orange-300 hover:bg-ro text-gray-600"
            aria-current="page"
          >
            <button className="">
              <FaRocket />Home
            </button>
          </div>
        </li>
        <li>
          <div
            onClick={() => navigate("/chat")}
            className="block py-2 pl-3 pr-4 text-black rounded hover:text-orange-300 text-gray-600"
            aria-current="page"
          >
            <button>
              <FaRocketchat /> Chat
            </button>
          </div>
        </li>
        <li>
          <div
            onClick={() => navigate("/task")}
            className="block py-2 pl-3 pr-4 text-black rounded hover:text-orange-300 text-gray-600"
            aria-current="page"
          >
            <button>
              <FaBuffer /> Task
            </button>
          </div>
        </li>
        <li>
          <div
            onClick={() => navigate("/achivement")}
            className="block py-2 pl-3 pr-4 text-black rounded hover:text-orange-300 text-gray-600"
            aria-current="page"
          >
            <button>
              <FaRegGem /> Achivement
            </button>
          </div>
        </li>
        <li>
          <div
            onClick={() => navigate("/profile")}
            className="block py-2 pl-3 pr-4 text-black rounded hover:text-orange-300 text-gray-600"
            aria-current="page"
          >
            <button>
              <FaGrin /> Profile
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
