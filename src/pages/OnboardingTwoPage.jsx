import { useState } from "react";
import { supabase } from "../library/supabase";
import { Link, useNavigate } from "react-router-dom";

const OnboardingTwoPage = () => {
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [chest, setChest] = useState("");
  const [stomach, setStomach] = useState("");
  const [leftThigh, setLeftThigh] = useState("");
  const [rightThigh, setRightThigh] = useState("");
  const [leftBicep, setLeftBicep] = useState("");
  const [rightBicep, setRightBicep] = useState("");

  const customRedirect = useNavigate();

  const getAverage = (first, second) => {
    return (parseFloat(first) + parseFloat(second)) / 2;
  };

  const convertToCentimeter = (feet, inches) => {
    const totalInches = parseInt(feet) * 12 + parseInt(inches);
    return totalInches * 2.54;
  };

  const submitFormData = async (e) => {
    e.preventDefault();

    const averageThigh = getAverage(leftThigh, rightThigh);
    const averageBicep = getAverage(leftBicep, rightBicep);
    const heightCentimeter = convertToCentimeter(heightFeet, heightInches);

    try {
      const { data, error } = await supabase.from("user_information").insert({
        height: heightCentimeter,
        weight: weight,
        chest: chest,
        stomach: stomach,
        left_thigh: leftThigh,
        right_thigh: rightThigh,
        avg_thigh: averageThigh,
        left_bicep: leftBicep,
        right_bicep: rightBicep,
        avg_bicep: averageBicep,
      });

      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Data inserted successfully:", data);
        customRedirect("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="mx-4">
      <div className="text-center">
        <h1 className="text-[32px] font-semibold mt-20">Start tracking your progress?</h1>
        <p>See how your body changes over time. Don’t worry you can go back and do this anytime</p>
      </div>
      <div className="flex justify-start mt-5">
        <div className="flex flex-col">
          <p className="font-medium">Height</p>
          <div className="flex mt-1">
            <input className="w-[54px] h-[50px] pl-4 rounded-lg border" type="number" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} />
            <p className="px-3 pt-3 text-[#8391A1] font-medium">Ft.</p>
            <input className="w-[58px] h-[50px] pl-4 rounded-lg border" type="number" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} />
            <p className="pl-3 pr-1.5 pt-3 text-[#8391A1] font-medium">In.</p>
          </div>
        </div>
        <div>
          <p className="font-medium">Weight</p>
          <div className="flex mt-1">
            <input className="w-full h-[50px] pl-4 rounded-lg border" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <p className="px-3 pt-3 text-[#8391A1] font-medium">Lbs.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-5">
        <div className="flex flex-col">
          <p className="font-medium">Chest</p>
          <div className="flex mt-1">
            <input className="w-full h-[50px] pl-4 rounded-lg border" type="number" value={chest} onChange={(e) => setChest(e.target.value)} />
            <p className="px-3 pt-3 text-[#8391A1] font-medium">In.</p>
          </div>
        </div>
        <div>
          <p className="font-medium">Stomach</p>
          <div className="flex mt-1">
            <input className="w-full h-[50px] pl-4 rounded-lg border" type="number" value={stomach} onChange={(e) => setStomach(e.target.value)} />
            <p className="px-3 pt-3 text-[#8391A1] font-medium">Lbs.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-start mt-5">
        <div className="flex flex-col">
          <p className="font-medium">Thighs</p>
          <p className="text-[#8391A1]">Left</p>
          <div className="flex mt-1">
            <input className="w-full h-[50px] pl-4 rounded-lg border" type="number" value={leftThigh} onChange={(e) => setLeftThigh(e.target.value)} />
            <p className="px-3 pt-3 text-[#8391A1] font-medium">In.</p>
          </div>
        </div>
        <div className="mt-[24px]">
          <p className="text-[#8391A1]">Right</p>
          <div className="flex mt-1">
            <input className="w-full h-[50px] pl-4 rounded-lg border" type="number" value={rightThigh} onChange={(e) => setRightThigh(e.target.value)} />
            <p className="px-3 pt-3 text-[#8391A1] font-medium">In.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-start mt-5">
        <div className="flex flex-col">
          <p className="font-medium">Biceps</p>
          <p className="text-[#8391A1]">Left</p>
          <div className="flex mt-1">
            <input className="w-full h-[50px] pl-4 rounded-lg border" type="number" value={leftBicep} onChange={(e) => setLeftBicep(e.target.value)} />
            <p className="px-3 pt-3 text-[#8391A1] font-medium">In.</p>
          </div>
        </div>
        <div className="mt-[24px]">
          <p className="text-[#8391A1]">Right</p>
          <div className="flex mt-1">
            <input className="w-full h-[50px] pl-4 rounded-lg border" type="number" value={rightBicep} onChange={(e) => setRightBicep(e.target.value)} />
            <p className="px-3 pt-3 text-[#8391A1] font-medium">In.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button className="w-full bg-[#1E232C] text-white font-semibold h-14 rounded-lg mt-24" type="button">
          <Link to={"/routines"} className="w-full h-14 bottom-0">
            <p>Not Now</p>
          </Link>
        </button>
        <button className="w-full bg-[#475E88] text-white font-semibold h-14 rounded-lg mt-24" type="button" onClick={submitFormData}>Continue</button>
      </div>
    </div>
  );
};

export default OnboardingTwoPage;
