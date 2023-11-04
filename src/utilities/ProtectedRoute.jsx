import { supabase } from "../library/supabase";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage"

const ProtectedRoute = () => {
  const customRedirect = useNavigate();
  const [loading, setLoading] = useState(true);

  const checkForUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user === null) {
      customRedirect("/login");
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkForUser();
  }, []);

  if (loading) {
    // Render a loading spinner or message while checking for user authentication
    return <LoginPage/>
  }

  return <Outlet />;
};

export default ProtectedRoute;
