// import { useNavigate } from "react-router-dom";
// import { supabase } from "../library/supabase";
import GreetingBar from "../components/GreetingBar";
import RoutineCard from "../components/RoutineCard";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import CategoryCardScroller from "../components/CategoryCardScroller";

function DashboardPage() {


  return (
    <div>
      <div className="mx-4">
        <GreetingBar/>
        <SectionHeader header="Today's workout"/>
        <RoutineCard/>
        <SectionHeader header="Your progress" seeAll={true}/>
        <SectionHeader header="Browse new routines" seeAll={true}/>
        <CategoryCardScroller/>
        <SectionHeader header="Popular routines"/>
      </div>
        <NavBar activeButton="dashboard"/>
    </div>

  );
}

export default DashboardPage;
