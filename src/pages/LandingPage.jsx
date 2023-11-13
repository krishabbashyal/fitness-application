
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../library/supabase";
import { useEffect } from "react";

function LandingPage() {
  const customRedirect = useNavigate();

  useEffect(() => {
    async function getUser() {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (data?.user) {
          customRedirect("/dashboard");
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    }
    getUser();
  }, []);

  return (
    <div>
      <p className="mt-24">
        There is not much here, click{" "}
        <Link to={"/register"} className="text-blue-600 text-2xl p-4">this</Link>{" "}
        instead.
      </p>
      {/* TODO: Explore caching the user object in browser local storage or other caching mechanisms */}
    </div>
  );
}

export default LandingPage;
