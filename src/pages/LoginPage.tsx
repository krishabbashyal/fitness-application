import { Link } from "react-router-dom";
import { useState } from "react";
import { auth} from '../../firebase/firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async () => {
      try { 
        await signInWithEmailAndPassword(auth, email, password)
        console.log("User has been logged in")
      } catch(error) {
        console.log(error)
      }
  } 

  return (
    <div className="text-center justify-center align-middle mt-24 mx-4">
      <h1 className="mb-4">RLog in to an existing account</h1>
      <div className="flex flex-col space-y-2">
        <input type="email" placeholder="Email" onChange={event => setEmail(event.target.value)} className="rounded-md p-3 border border-black h-10" />
        <input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} className="rounded-md p-3 border border-black h-10" />
        <button onClick={submitHandler} className="rounded-md p-4 bg-blue-200 mt-3">Log In</button>
      </div>
      <div className="mt-16">
        <Link to={"/register"}>Register Instead</Link>
      </div>
    </div>
  );
}

export default LoginPage;
