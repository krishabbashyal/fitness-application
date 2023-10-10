import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../library/supabase";
import ErrorBanner from "../components/ErrorBanner";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  const customRedirect = useNavigate();

  const validateForm = (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailPattern.test(email);

    if (validEmail) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    if (password.length >= 6) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }

    if (confirmPassword === password && confirmPassword.length > 0) {
      setConfirmError(false);
    } else {
      setConfirmError(true);
    }

    if (!emailError && !passwordError && !confirmError) {
      submitHandler(event);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (confirmPassword === password) {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) {
        console.log(error.message);
      } else {
        console.log(data);
        customRedirect("/dashboard");
      }
    }
  };

  return (
    <div className="text-center justify-center align-middle mt-28 mx-4 max-w-lg">
      <h1 className="mb-6 text-[32px] font-semibold">Register</h1>
      <ErrorBanner />
      <form>
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className={`rounded-lg pl-3 placeholder:font-medium h-14 ${
              emailError
                ? "border-[#EF4444] border-2 placeholder:text-[#991B1B]"
                : "border-[#E8ECF4] border mb-3"
            }`}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError ? (
            <p className="text-left mt-1 mb-2.5 text-[#991B1B]">
              Please enter a valid email address
            </p>
          ) : null}
          <input
            type="password"
            placeholder="Password"
            className={`rounded-lg pl-3 placeholder:font-medium h-14 ${
              passwordError
                ? "border-[#EF4444] border-2 placeholder:text-[#991B1B]"
                : "border-[#E8ECF4] border mb-3"
            }`}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError ? (
            <p className="text-left mt-1 mb-2.5 text-[#991B1B]">
              Password should be at least 6 characters
            </p>
          ) : null}

          <input
            type="password"
            placeholder="Confirm password"
            className={`rounded-lg pl-3 placeholder:font-medium h-14 ${
              confirmError
                ? "border-[#EF4444] border-2 placeholder:text-[#991B1B]"
                : "border-[#E8ECF4] border mb-3"
            }`}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {confirmError ? (
            <p className="text-left mt-1 mb-2.5 text-[#991B1B]">
              Passwords do not match
            </p>
          ) : null}

          <button
            onClick={validateForm}
            className="rounded-md p-4 mt-5 bg-[#475E88] font-semibold text-white"
          >
            Register
          </button>
        </div>
        <div className="mt-16 flex justify-center space-x-1">
          <p className="text-[#1E232C] font-medium">Already have an account?</p>
          <Link className="text-[#35C2C1] font-medium" to={"/login"}>
            Login Instead
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
