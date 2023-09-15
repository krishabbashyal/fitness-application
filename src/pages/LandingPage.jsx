import { Link } from "react-router-dom";
import { supabase } from "../library/supabase";

import { useEffect, useState } from "react";


function LandingPage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    console.log("getting data")
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <div>
      <p>There is not much here, click <span className="text-blue-600"><Link to={"/register"}>this</Link></span> instead.</p>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
