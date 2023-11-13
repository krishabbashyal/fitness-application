import { supabase } from "../library/supabase";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage"

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
    return <LoadingPage/>
  }

  return <Outlet />;
};

export default ProtectedRoute;
