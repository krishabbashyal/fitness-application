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

    // Ensure the component is still mounted before redirecting
    let isMounted = true;

    getUser();

    return () => {
      isMounted = false;
    };
  }, [customRedirect]);

  return (
    <div>
      <p className="mt-24">
        There is not much here, click{" "}
        <button className="text-blue-600 text-2xl p-4">
          <Link to={"/register"}>this</Link>
        </button>{" "}
        instead.
      </p>
      <p className="mt-24">To Do: See if we can store the user object in the browser local storage or some other type of cache</p>
    </div>
  );
}

export default LandingPage;
