import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../library/supabase";

const ProfilePage = () => {
  const [displayName, setDisplayName] = useState(null);
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

  const getCurrentUser = async () => {
    try {
      const { data, error } = await supabase.from("profiles").select("display_name");
      setDisplayName(data[0].display_name)

      if (error) {
        throw error
      }
    } catch(error) {
      console.error("Error getting user", error)
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <div>
      <div>
        <div class="bg-custom-gradient h-[252px] flex flex-col justify-between items-center">
          <p class="text-white text-xl font-medium mt-8">Profile</p>
          <p class="text-white text-[22px] font-medium pb-10">{displayName}</p>
        </div>
        <div className="h-full rounded-t-3xl">
          <div class="flex flex-col space-y-5 mx-4">
            <button class="mt-[52px] h-[64px] w-full bg-[#1E232C] font-medium text-white rounded-lg">Change Information</button>
            <button class="mt-8 h-[64px] w-full bg-[#1E232C] font-medium text-white rounded-lg">Settings</button>
            <button class="mt-8 h-[64px] w-full bg-[#1E232C] font-medium text-white rounded-lg">Bug Report / Feature Request</button>
            <button class="mt-8 h-[64px] w-full bg-[#1E232C] font-medium text-white rounded-lg">GitHub Repo</button>
            <button class="mt-10 h-[64px] w-full bg-[#982F2F] font-medium text-white rounded-lg" onClick={handleSignOut}>Sign Out</button>
          </div>
        </div>
      </div>
      <NavBar activeButton="profile" />
    </div>
  );
};

export default ProfilePage;
