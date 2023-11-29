import NavBar from "../components/NavBar";
import PersonalRecordsContainer from "../components/PersonalRecordsContainer";
import ProgressCharts from "../components/ProgressCharts";
import SectionHeader from "../components/SectionHeader";


const ProgressPage = () => {
  return (
    <div>
      <div className="mx-4 mt-6 pb-[108px]">
      <SectionHeader header="Your Personal Records"/>
        <PersonalRecordsContainer/>
      <SectionHeader customClass="mt-4" header="Your Progress"/>
      <ProgressCharts label="Chest (in)"/>


      </div>
      <NavBar activeButton="progress"/>
    </div>
  );
};

export default ProgressPage;
