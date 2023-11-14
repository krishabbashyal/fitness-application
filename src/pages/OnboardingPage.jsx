import React, { useState } from "react";
import { supabase } from "../library/supabase";

const OnboardingPage = () => {
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [goal, setGoal] = useState("");

  const convertToCentimeter = async () => {
    // const totalInches = parseInt(heightFeet) * 12 + parseInt(heightInches);
    // const heightCentimeters = totalInches * 2.54;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    try {
      const { data, error } = await supabase
        .from("profiles")
        .update({
          display_name: displayName,
          gender: gender,
          date_of_birth: dateOfBirth,
          current_goal: goal,
        })
        .eq("id", user.id);
      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Data inserted successfully:", data);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="mx-4">
      <div className="text-center">
        <h1 className="text-[32px] font-semibold mt-20">Hello There!</h1>
        <p>We need a little more information about you to get started</p>
      </div>
      <div>
        <form className="mt-12 flex flex-col space-y-4">
          <div>
            <p className="font-medium">Display Name</p>
            <input
              className="w-full placeholder:text-[#8391A1] pl-3 h-11 rounded-lg mt-1 border border-[#E8ECF4] "
              type="text"
              placeholder="Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="flex space-x-6">
            <div className="flex flex-col">
              <p className="font-medium">Gender</p>
              <select
                className="w-full placeholder:text-[#8391A1] pl-3 h-11 rounded-lg mt-1 border border-[#E8ECF4]"
                value={gender}
                onChange={(e) => setGender(e.target.value)}>
                <option value="" disabled>
                  Select
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer Not to Say</option>
              </select>
            </div>

            <div className="flex flex-col">
              <p className="font-medium">Birthday</p>
              <input
                className="w-40 placeholder:text-[#8391A1] pl-2 h-11 rounded-lg mt-1 border border-[#E8ECF4]"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium">Current Goal</p>
            <select
              multiple
              className="w-full placeholder:text-[#8391A1] pl-3 p-3 h-52 rounded-lg mt-1 border border-[#E8ECF4] "
              type="text"
              placeholder="Select"
              value={goal}
              onChange={(e) => {

                setGoal(e.target.value);
              }}>
              <option className = "py-2 border-b" value="Fat Loss">Fat Loss</option>
              <option className = "py-2 border-b" value="Muscle Gain">Muscle Gain</option>
              <option className = "py-2 border-b" value="Improve Strength">Improve Strength</option>
              <option className = "py-2 border-b" value="Endurance Training">Endurance Training</option>
              <option className = "py-2 border-b" value="Other">Other</option>
            </select>
          </div>
          <div>
            <button className="w-full bg-[#475E88] text-white font-semibold h-14 rounded-lg mt-24" type="button" onClick={convertToCentimeter}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingPage;
