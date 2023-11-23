import NavBar from "../components/NavBar";
import PersonalRecordsContainer from "../components/PersonalRecordsContainer";

const ProgressPage = () => {
  return (
    <div className="mx-4">
      <h1>Your Records</h1>
      <PersonalRecordsContainer/>
      <NavBar activeButton="progress" />
    </div>
  );
};

export default ProgressPage;
