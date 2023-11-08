import React, { useState } from "react";

const OnboardingPage = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [heightCentimeter, setHeightCentimeter] = useState("");
  const [weight, setWeight] = useState("");

  const convertToCentimeter = () => {
    const totalInches = parseInt(heightFeet) * 12 + parseInt(heightInches);
    const heightInCentimeters = totalInches * 2.54;
    setHeightCentimeter(heightInCentimeters)

      console.log(`Name: ${name}`);
      console.log(`Gender: ${gender}`);
      console.log(`Height: ${heightFeet}' ${heightInches}"`);
      console.log(`Converted Height: ${heightInCentimeters}cm`);
      console.log(`Weight: ${weight}`);

  };

  return (
    <div>
      <div>
        <h1>Hello There</h1>
        <p>We need a little more information about you to get started</p>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
          <input type="number" placeholder="Ft" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} />
          <input type="number" placeholder="In" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} />
          <input type="number" placeholder="Lbs" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <button type="button" onClick={convertToCentimeter}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnboardingPage;
