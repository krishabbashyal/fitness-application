import { supabase } from "../library/supabase"
import { useEffect} from "react"
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const customRedirect = useNavigate()
  const checkForUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user === null){
      customRedirect("/login")
    }
  }

  useEffect(() => {
    checkForUser()
  }, [])
  
  
  return (
    <Outlet/>
  )
}

export default ProtectedRoute