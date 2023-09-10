import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="text-center justify-center align-middle mt-24 mx-4">
      <p>Welcome to the fitness app landing page</p>
      <p>There is not much here, click <span className="text-blue-600"><Link to={"/register"}>this</Link></span> instead.</p>
    </div>
  );
}

export default LandingPage;
