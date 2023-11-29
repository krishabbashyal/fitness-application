import GreetingBar from "../components/GreetingBar";
import RoutineCard from "../components/RoutineCard";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import CategoryCardScroller from "../components/CategoryCardScroller";

function DashboardPage() {


  return (
    <div>
      <div className="mx-4 pb-[108px]">
        <GreetingBar/>
        <SectionHeader header="Let's Get Started!"/>
        <RoutineCard/>
        <SectionHeader header="Browse Our Workout" seeAll={true}/>
        <CategoryCardScroller />
         
      </div>
        <NavBar activeButton="dashboard"/>
    </div>

  );
}

export default DashboardPage;
