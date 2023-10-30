import { useNavigate } from "react-router-dom";
import { supabase } from "../library/supabase";
import GreetingBar from "../components/GreetingBar";
import RoutineCard from "../components/RoutineCard";

function DashboardPage() {
  // const customRedirect = useNavigate();

  // const handleSignOut = async () => {
  //   let { error } = await supabase.auth.signOut();
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Signed Out");
  //     customRedirect("/");
  //   }
  // };
  return (
    <div class="mx-4">
      <GreetingBar/>
      <RoutineCard/>
    </div>
  );
}

export default DashboardPage;
