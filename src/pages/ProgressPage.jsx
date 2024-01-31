import NavBar from "../components/NavBar";
import PersonalRecordsContainer from "../components/PersonalRecordsContainer";
import ChartTwo from "../components/ChartTwo";
import ChartThree from "../components/ChartThree";
import BodyFatPercentage from "../components/BodyFatPercentage";

import SectionHeader from "../components/SectionHeader";


const ProgressPage = () => {
  return (
    <div>
      <div className="mx-4 mt-6 pb-[108px]">
      <SectionHeader text="Personal Records"/>
        <PersonalRecordsContainer/>
      <SectionHeader customClass="mt-4" text="Body Fat Percentage"/>
        <BodyFatPercentage/>
      <SectionHeader customClass="mt-4" text="Body Composition"/>
        <ChartTwo label="Chest (in)"/>
        <ChartThree label="Stomach (in)"/>
      </div>
      <NavBar activeButton="progress"/>
    </div>
  );
};

export default ProgressPage;
