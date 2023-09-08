import { Link } from "react-router-dom"

function RegisterPage() {
  return (
    <div>
      <form action="">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password"/>
        <button>Register</button>
      </form>
      <Link to = {'/login'}>Login Instead</Link>
    </div>
  )
}

export default RegisterPage