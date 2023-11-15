import DashboardIcon from "../../public/icons/DashboardIcon.svg";
import ExploreIcon from "../../public/icons/ExploreIcon.svg";
import ProgressIcon from "../../public/icons/ProgressIcon.svg";
import ProfileIcon from "../../public/icons/ProfileIcon.svg";

import { Link } from "react-router-dom";
import React from "react";

const NavBar = (props) => {

  return (
    <div className="bg-white w-full h-[86px] rounded-t-lg drop-shadow-lg fixed bottom-0 z-50 flex justify-around">
      <div className="flex justify-around w-full px-2">
        <Link className="mt-3" to="/dashboard">
        <button>
          <div className="text-center">
            <img className="ml-[21px] w-6" src={DashboardIcon} alt="" />
            <p className={props.activeButton === 'dashboard' ? "border-b-2 border-black pt-1 text-sm" : "pt-1 text-sm"}>Dashboard</p>
          </div>
        </button>
        </Link>
        <Link className="mt-3" to="/routines">
        <button>
          <div className="flex flex-col justify-around">
            <img className="ml-[17px] w-6" src={ExploreIcon} alt="" />
            <p className={props.activeButton === 'routines' ? "border-b-2 border-black pt-1 text-sm" : "pt-1 text-sm"}>Routines</p>
          </div>
        </button>
        </Link>
        <Link className="mt-3" to="/progress">
        <button>
        <div>
            <img className="ml-[16px] w-6" src={ProgressIcon} alt="" />
            <p className={props.activeButton === 'progress' ? "border-b-2 border-black pt-1 text-sm" : "pt-1 text-sm"}>Progress</p>
          </div>
        </button>
        </Link>
        <Link className="mt-3" to="/profile">
        <button>
          <div>
            <img className="ml-[7px] w-6" src={ProfileIcon} alt="" />
            <p className={props.activeButton === 'profile' ? "border-b-2 border-black pt-1 text-sm" : "pt-1 text-sm"}>Profile</p>
          </div>
        </button>
        </Link>
      </div>

    </div>
  );
};

export default NavBar;
