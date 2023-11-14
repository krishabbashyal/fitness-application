import { useState } from "react";
import DashboardIcon from "../../public/icons/DashboardIcon.svg";
import ExploreIcon from "../../public/icons/ExploreIcon.svg";
import ProgressIcon from "../../public/icons/ProgressIcon.svg";
import ProfileIcon from "../../public/icons/ProfileIcon.svg";

import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white w-full h-16 drop-shadow-lg fixed bottom-0 z-50 flex justify-around">
      <button>
        <div>
          <img className="ml-4 w-8 mt-0.5" src={DashboardIcon} alt="" />
          <p className="text-sm">Dashboard</p>
        </div>
      </button>
      <button>
        <div>
          <img className="ml-4 w-8 mt-0.5" src={ExploreIcon} alt="" />
          <p className="text-sm">Explore</p>
        </div>
      </button>
      <button>
        <div>
          <img className="ml-4 w-8 mt-0.5" src={ProgressIcon} alt="" />
          <p className="text-sm">Progress</p>
        </div>
      </button>
      <button>
        <div>
          <img className="ml-4 w-8 mt-0.5" src={ProfileIcon} alt="" />
          <p className="text-sm">Profile</p>
        </div>
      </button>
    </div>
  );
};

export default NavBar;
