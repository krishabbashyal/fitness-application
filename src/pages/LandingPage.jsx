import { Link } from "react-router-dom";

function LandingPage() {


  return (
    <div>
      <p class="mt-24">There is not much here, click <button className="text-blue-600 text-2xl p-4"><Link to={"/register"}>this</Link></button> instead.</p>
      <p class="mt-24">To Do: See if we can store the user object in the browser local storage or some other type of cache</p>
    </div>
  );
}

export default LandingPage;
