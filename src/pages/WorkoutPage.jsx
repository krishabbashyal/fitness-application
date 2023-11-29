import React from "react";
import TimerComponent from "../components/Timer";
import { Link } from "react-router-dom";

const WorkoutPage = () =>{
    return(
    <div className="grid justify-center">
        <div className="flex flex-col justify-center m-4">
            <TimerComponent />
            <p>Duration</p>
        </div>
        <div className="rounded-md h-[35rem] w-[23.5rem] bg-[#E8DCDC]">
            <h1 className="text-center">Workout Name</h1>
        </div>
        <div className="flex justify-center">
        <Link to={"/dashboard"}>
        <button className="rounded-md p-4 mt-10 bg-[#475E88] font-medium text-white">Finish Workout</button>
        </Link>
        </div>
    </div>
         
        

    )
}

export default WorkoutPage;