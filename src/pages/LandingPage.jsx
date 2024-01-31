import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../library/supabase";
import { useEffect } from "react";

function LandingPage() {
  const customRedirect = useNavigate();

  useEffect(() => {
    const handleRedirect = async () => {
      const { data, error } = await supabase.from("profiles").select("completed_onboarding");

      if (error) {
        console.error("Error fetching profile data:", error);
        return;
      }

      if (data.length === 0) {
        console.warn("No profile data found");
        return;
      }

      const redirectTo = data[0].completed_onboarding ? "/dashboard" : "/onboarding";
      customRedirect(redirectTo);
    };

    handleRedirect();
  }, []);

  return (
    <div className="mx-4">
      <div className="mt-56 text-center">
        <h1 className="text-2xl font-semibold">Fitness Application</h1>
        <p>Track and log your gym workouts.</p>
        <div className="-mx-4 absolute bottom-16 flex justify-center w-full gap-14 font-medium">
          <button type="button">
            <Link to={"/register"}>
              <p>Sign Up</p>
            </Link>
          </button>
          <p className="font-normal">|</p>
          <button type="button">
            <Link to={"/login"}>
              <p>Log In</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
