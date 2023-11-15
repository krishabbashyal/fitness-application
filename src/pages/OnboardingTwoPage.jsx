import { useState } from "react";
import { supabase } from "../library/supabase";
import { useNavigate } from "react-router-dom";


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
    return (parseFloat(first) + parseFloat(second) / 2)
  }

  const convertToCentimeter = (feet, inches) => {
    const totalInches = (parseInt(feet) * 12) + parseInt(inches)
    return totalInches * 2.54;
  }

  const submitFormData = async (e) => {
    e.preventDefault()

    const averageThigh = getAverage(leftThigh, rightThigh)
    const averageBicep = getAverage(leftBicep, rightBicep)
    const heightCentimeter = convertToCentimeter(heightFeet, heightInches)

    try {
      const { data, error } = await supabase
        .from("user_information")
        .insert({
          height: heightCentimeter,
          weight: weight,
          chest: chest,
          stomach: stomach,
          left_thigh: leftThigh,
          right_thigh: rightThigh,
          avg_thigh: averageThigh,
          left_bicep: leftBicep,
          right_bicep: rightBicep,
          avg_bicep: averageBicep
        })
        
      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Data inserted successfully:", data);
        customRedirect("/dashboard")

      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <form onSubmit={submitFormData}>
      <div>
        <label>Height (Feet):</label>
        <input type="number" name="heightFeet" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} />
      </div>
      <div>
        <label>Height (Inches):</label>
        <input type="number" name="heightInches" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} />
      </div>
      <div>
        <label>Weight (lbs):</label>
        <input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Chest (inches):</label>
        <input type="number" name="chest" value={chest} onChange={(e) => setChest(e.target.value)} />
      </div>
      <div>
        <label>Stomach (inches):</label>
        <input type="number" name="stomach" value={stomach} onChange={(e) => setStomach(e.target.value)} />
      </div>
      <div>
        <label>Left Thigh (inches):</label>
        <input type="number" name="leftThigh" value={leftThigh} onChange={(e) => setLeftThigh(e.target.value)} />
      </div>
      <div>
        <label>Right Thigh (inches):</label>
        <input type="number" name="rightThigh" value={rightThigh} onChange={(e) => setRightThigh(e.target.value)} />
      </div>
      <div>
        <label>Left Bicep (inches):</label>
        <input type="number" name="leftBicep" value={leftBicep} onChange={(e) => setLeftBicep(e.target.value)} />
      </div>
      <div>
        <label>Right Bicep (inches):</label>
        <input type="number" name="rightBicep" value={rightBicep} onChange={(e) => setRightBicep(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OnboardingTwoPage;
