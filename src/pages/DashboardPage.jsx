import { useNavigate } from "react-router-dom";
import { supabase } from "../library/supabase";
import { useEffect, useState } from "react";
import GreetingBar from "../components/GreetingBar";
import NavBar from "../components/NavBar";

function DashboardPage() {
  const customRedirect = useNavigate();

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
    <div>
      <GreetingBar/>
      <NavBar />
    </div>
  );
}

export default DashboardPage;
