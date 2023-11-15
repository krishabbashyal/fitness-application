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
      <div className="flex w-full space-x-2 text-white font-semibold h-14 mt-24">
      <button className="w-full bg-[#1E232C] rounded-lg" type="button">
          <Link to={"/register"} className="w-full h-14">
            <p>Register</p>
          </Link>
        </button>

        <button className="w-full bg-[#475E88] rounded-lg" type="button">
          <Link to={"/login"} className="w-full h-14">
            <p>Login</p>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
