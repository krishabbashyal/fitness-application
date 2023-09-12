import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const customRedirect = useNavigate();

  const handleSignOut = async () => {
    signOut(auth);
    console.log("Signed Out");
    customRedirect("/");
  };
  return (
    <div className="text-center justify-center align-middle mt-24 mx-4">
      <p>Hi, {auth.currentUser?.email}.</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default DashboardPage;
