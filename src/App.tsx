import { createBrowserRouter as Router, RouterProvider } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const router = Router([
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/dashboard", element: <DashboardPage /> },
]);

// Do not make changes to this unless we need to alter the router
function App() {
  return <RouterProvider router={router} />;
}

export default App;
