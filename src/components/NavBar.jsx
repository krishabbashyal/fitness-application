import DashboardIcon from "../../public/icons/DashboardIcon.svg";
import ExploreIcon from "../../public/icons/ExploreIcon.svg";
import ProgressIcon from "../../public/icons/ProgressIcon.svg";
import ProfileIcon from "../../public/icons/ProfileIcon.svg";

import { Link } from "react-router-dom";

import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white w-full h-[86px] rounded-t-lg drop-shadow-lg fixed bottom-0 z-50 flex justify-around">
      <Link className="mt-3" to="/dashboard">
      <button>
        <div className="text-center">
          <img className="ml-[19px] w-7" src={DashboardIcon} alt="" />
          <p className="pt-1 text-sm">Dashboard</p>
        </div>
      </button>
      </Link>
      <Link className="mt-3" to="/explore">
      <button>
        <div>
          <img className="ml-[11px] w-7" src={ExploreIcon} alt="" />
          <p className="pt-1 text-sm">Explore</p>
        </div>
      </button>
      </Link>
      <Link className="mt-3" to="/progress">
      <button>
        <div>
          <img className="ml-[14px] w-7" src={ProgressIcon} alt="" />
          <p className="pt-1 text-sm">Progress</p>
        </div>
      </button>
      </Link>
      <Link className="mt-3" to="/profile">
      <button>
        <div>
          <img className="ml-[6px] w-7" src={ProfileIcon} alt="" />
          <p className="pt-1 text-sm">Profile</p>
        </div>
      </button>
      </Link>

    </div>
  );
};

export default NavBar;
