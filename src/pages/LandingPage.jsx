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

      <div className="-mx-4 py-2 mt-5 text-center">
        <div className="my-4 flex flex-col space-y-3 mx-4">
          <p className="font-semibold text-xl">Track Workouts Easily</p>
          <p className="font-light pb-3 border-b">Log gym sessions effortlessly, maintaining a consistent record of your fitness routine.</p>
          <p className="font-semibold text-xl">Discover Insights</p>
          <p className="font-light pb-3 border-b">Analyze your workout patterns with in-depth insights, helping you optimize your fitness strategy.</p>
          <p className="font-semibold text-xl">Visualize Progress</p>
          <p className="font-light pb-3 border-b">Watch as your body transforms and track your health improvements over time.</p>
          <p className="font-semibold text-xl">Personalized Recommendations</p>
          <p className="font-light">Get customized weight suggestions tailored to your unique workout history and progress.</p>
        </div>
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
