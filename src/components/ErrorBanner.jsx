import React from "react";

function ErrorBanner() {
  return (
    <div
      className=" flex justify-center items-center mb-3 rounded-md w-auto
     h-12 bg-[#FFB1B1] shrink-0 "
    >
      <p className="text-[#991B1B]">User already registered</p>
    </div>
  );
}

export default ErrorBanner;
