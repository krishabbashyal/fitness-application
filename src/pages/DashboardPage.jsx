import { useNavigate } from "react-router-dom";
import { supabase } from "../library/supabase";

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
    <div className="text-center justify-center align-middle mt-24 mx-4">
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default DashboardPage;
