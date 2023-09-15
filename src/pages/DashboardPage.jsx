import { useNavigate } from "react-router-dom";
import { supabase } from "../library/supabase";
import { useEffect, useState } from "react";

function DashboardPage() {
  const customRedirect = useNavigate();
  const [email, setEmail] = useState(null);

  const getCurrentUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setEmail(user.email);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const handleSignOut = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    } else {
      console.log("Signed Out");
      customRedirect("/");
    }
  };
  return (
    <div className="text-center flex flex-col justify-center align-middle mt-24 mx-4">
      <h1>Hi, {email}.</h1>
      <button onClick={handleSignOut}>Sign Out</button>
      <button onClick={getCurrentUser}>Log User Data</button>
    </div>
  );
}

export default DashboardPage;
