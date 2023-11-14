import { useNavigate } from "react-router-dom";
import { supabase } from "../library/supabase";
import GreetingBar from "../components/GreetingBar";
import RoutineCard from "../components/RoutineCard";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import CategoryCardScroller from "../components/CategoryCardScroller";

function DashboardPage() {
  const customRedirect = useNavigate();

  const handleSignOut = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    } else {
      console.log("Signed Out");
      customRedirect("/");
    }
  };
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
        <button className="mt-52 rounded-md w-full p-5 bg-red-500 text-white"  onClick={handleSignOut}>Sign Out</button>
      </div>
        <NavBar activeButton="dashboard"/>
    </div>

  );
}

export default DashboardPage;
