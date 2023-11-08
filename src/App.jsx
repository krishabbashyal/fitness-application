import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import statements

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./utilities/ProtectedRoute";
import OnboardingPage from "./pages/OnboardingPage";


// Do not make changes to this unless we need to alter the router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} exact/>
        <Route path="/login" element={<LoginPage />} exact/>
        <Route path="/register" element={<RegisterPage />} exact/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<DashboardPage/>} exact/>
          <Route path="/onboarding" element={<OnboardingPage/>} exact/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
