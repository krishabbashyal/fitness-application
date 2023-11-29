import NavBar from "../components/NavBar";
import PersonalRecordsContainer from "../components/PersonalRecordsContainer";
import ChartOne from "../components/ChartOne";
import ChartTwo from "../components/ChartTwo";
import ChartThree from "../components/ChartThree";

import SectionHeader from "../components/SectionHeader";


const ProgressPage = () => {
  return (
    <div>
      <div className="mx-4 mt-6 pb-[108px]">
      <SectionHeader header="Your Personal Records"/>
        <PersonalRecordsContainer/>
      <SectionHeader customClass="mt-4" header="Your Progress"/>
      <ChartOne label="Bench Press (lbs)"/>
      <ChartTwo label="Chest (in)"/>
      <ChartThree label="Stomach (in)"/>


      </div>
      <NavBar activeButton="progress"/>
    </div>
  );
};

export default ProgressPage;
