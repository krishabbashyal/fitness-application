import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../library/supabase";
import { useEffect } from "react";
import { data } from "autoprefixer";

function LandingPage() {
  const customRedirect = useNavigate();

  useEffect(() => {
    async function handleRedirect() {
 
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            const { data, error } = await supabase.from("profiles").select("completed_onboarding");
            if (data[0].completed_onboarding === false) {
              customRedirect("/onboarding")
            } else {
              customRedirect('/dashboard')
            }
        } else {
          console.log("No logged in user")
        }
    }


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
