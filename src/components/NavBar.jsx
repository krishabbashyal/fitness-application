import { useState } from "react";
import DashboardIcon from "../../public/icons/DashboardIcon.svg";
import ExploreIcon from "../../public/icons/ExploreIcon.svg";
import ProgressIcon from "../../public/icons/ProgressIcon.svg";
import ProfileIcon from "../../public/icons/ProfileIcon.svg";

import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white w-full h-[72px] rounded-t-lg drop-shadow-lg fixed bottom-0 z-50 flex justify-around">
      <button>
        <div className="text-center">
          <img className="ml-[19px] w-7" src={DashboardIcon} alt="" />
          <p className="pt-1 text-sm">Dashboard</p>
        </div>
      </button>
      <button>
        <div>
          <img className="ml-[11px] w-7" src={ExploreIcon} alt="" />
          <p className="pt-1 text-sm">Explore</p>
        </div>
      </button>
      <button>
        <div>
          <img className="ml-[14px] w-7" src={ProgressIcon} alt="" />
          <p className="pt-1 text-sm">Progress</p>
        </div>
      </button>
      <button>
        <div>
          <img className="ml-[6px] w-7" src={ProfileIcon} alt="" />
          <p className="pt-1 text-sm">Profile</p>
        </div>
      </button>
    </div>
  );
};

export default NavBar;
