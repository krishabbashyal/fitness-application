import { Link } from "react-router-dom";
import { useState } from "react";
import { auth} from '../../firebase/firebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandler = async () => {
    if (confirmPassword === password) {
      try { 
        await createUserWithEmailAndPassword(auth, email, password)

        // const userId = newUser.user.uid
        // const userReference = collection(db, "users")
        // await addDoc(userReference, {
        //   uid: userId,
        //   name: name,
        // })
  
        console.log("User has been created")
  
      } catch(error) {
        console.log(error)
      }
    } else {
      alert("Passwords Do Not Match")
    }

  } 


  return (
    <div className="text-center justify-center align-middle mt-24 mx-4">
      <h1 className="mb-4">Register a new account </h1>
      <div className="flex flex-col space-y-2">
        <input type="email" placeholder="Email" onChange={event => setEmail(event.target.value)} className="rounded-md p-3 border border-black h-10" />
        <input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} className="rounded-md p-3 border border-black h-10" />
        <input type="password" placeholder="Confirm password" onChange={event => setConfirmPassword(event.target.value)} className="rounded-md p-3 border border-black h-10" />
        <button onClick={submitHandler} className="rounded-md p-4 bg-blue-200 mt-3">Register</button>
      </div>
      <div className="mt-16">
        <Link to={"/login"}>Login Instead</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
