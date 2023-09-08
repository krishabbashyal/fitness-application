import { Link } from "react-router-dom"

function LoginPage() {
  return (
    <div>
      <form action="">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Log In</button>
      </form>
      <Link to = {'/register'}>Register Instead</Link>
    </div>
  )
}

export default LoginPage