import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../library/supabase";
import { useEffect } from "react";

function LandingPage() {
  const customRedirect = useNavigate();

  useEffect(() => {
    const handleRedirect = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        console.log("No logged in user");
        return;
      }
  
      const { data, error } = await supabase
        .from("profiles")
        .select("completed_onboarding");
  
      if (error) {
        console.error('Error fetching profile data:', error);
        return;
      }
  
      if (data.length === 0) {
        console.warn('No profile data found');
        return;
      }
  
      const redirectTo = data[0].completed_onboarding ? '/dashboard' : '/onboarding';
      customRedirect(redirectTo);
    };
  
    handleRedirect();
  }, []);
  

  return (
    <div>
      <p className="mt-24">
        There is not much here, click{" "}
        <Link to={"/register"} className="text-blue-600 text-2xl p-4">
          this
        </Link>{" "}
        instead.
      </p>
      {/* TODO: Explore caching the user object in browser local storage or other caching mechanisms */}
    </div>
  );
}

export default LandingPage;
