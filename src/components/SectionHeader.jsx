import React from "react";
import { Link } from 'react-router-dom';

const SectionHeader = (props) => {
  return (
    <div className={`flex justify-between ${props.customClass || ""}`}>
      <h2 className="text-2xl font-medium py-0.5">{props.header}</h2>
      <Link to={"/create_workout"}>
      {props.seeAll ? <button className="font-medium py-0.5 mt-0.5 text-[#35C2C1]">See All</button> : null}
      </Link>
    </div>
  );
};

export default SectionHeader;
