import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../library/supabase";

const GreetingBar = () => {
  const [displayName, setDisplayName] = useState(null);

  const getCurrentUser = async () => {
    const { data, error } = await supabase.from("profiles").select("display_name");
    setDisplayName(data[0].display_name)
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <div>
      <h1 className="text-[32px] font-semibold my-3">Hi, {displayName}.</h1>
    </div>
  );
};

export default GreetingBar;
