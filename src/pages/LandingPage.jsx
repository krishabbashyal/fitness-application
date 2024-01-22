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
    <div className="mx-4 h-full">
      <div className="mt-10">
        <h1 className="text-[36px] font-semibold">Name.</h1>
        <h2 className="text-2xl">For those who want to take fitness to the next level.</h2>
      </div>
      
      <div className="flex justify-center my-4">
        <img className="rounded-[24px] w-96" src="../public/images/HeroImage.png" alt="" />
      </div>
      <div className="flex w-full space-x-2 text-white font-semibold h-14 mt-2">
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
      <div className="w-full flex text-white font-semibold my-3 h-14">
        <button className="w-full bg-[#008080] rounded-lg" type="button">
          <Link to={"/login"} className="w-full h-14">
            <p>Install Our App</p>
          </Link>
        </button>
      </div>
      <div className="text-center bg-[#1E232C] -mx-4 mt-6">
        <h1 className="py-6 text-white text-sm font-semibold"></h1>
      </div>
    </div>
  );
}

export default LandingPage;
