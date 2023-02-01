import React from "react";
import { useNavigate } from "react-router-dom";
import btn1 from "../src/assets/Lobbywhite.png";
import btn11 from "../src/assets/Lobby.png";
import btn2 from "../src/assets/Chatwhite.png";
import btn22 from "../src/assets/Chat.png";
import btn3 from "../src/assets/Assigmentwhite.png";
import btn33 from "../src/assets/Assignment.png";
import btn4 from "../src/assets/Rankingwhite.png";
import btn44 from "../src/assets/Ranking.png";
import btn5 from "../src/assets/Profilwhite.png";
import btn55 from "../src/assets/Profile.png";

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
            <button>
              <img
                src={btn1}
                onMouseOver={(e) => (e.currentTarget.src = btn11)}
                onMouseOut={(e) => (e.currentTarget.src = btn1)}
              />
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
              <img
                src={btn2}
                onMouseOver={(e) => (e.currentTarget.src = btn22)}
                onMouseOut={(e) => (e.currentTarget.src = btn2)}
              />
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
              <img
                src={btn3}
                onMouseOver={(e) => (e.currentTarget.src = btn33)}
                onMouseOut={(e) => (e.currentTarget.src = btn3)}
              />
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
              <img
                src={btn4}
                onMouseOver={(e) => (e.currentTarget.src = btn44)}
                onMouseOut={(e) => (e.currentTarget.src = btn4)}
              />
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
              <img
                src={btn5}
                onMouseOver={(e) => (e.currentTarget.src = btn55)}
                onMouseOut={(e) => (e.currentTarget.src = btn5)}
              />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
