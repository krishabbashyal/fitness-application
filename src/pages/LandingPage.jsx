import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../library/supabase";
import { useEffect, useState } from "react";

function LandingPage() {
  const customRedirect = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
        const { data: user } = await supabase.auth.getUser();
        if (user) {
          customRedirect("/dashboard");
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, [customRedirect]);

  if (loading) {
    return <p>Loading...</p>; // You might want to display a loading spinner or some indication that data is being fetched
  }

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
