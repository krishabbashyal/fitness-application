import React, { useState } from "react";

function ErrorBanner(props) {
  return (
    <div
      className=" flex justify-center items-center mb-3 rounded-md w-auto
     h-12 bg-[#FFB1B1] shrink-0 "
    >
      <p className="text-[#991B1B]">{props.message}</p>
    </div>
  );
}

export default ErrorBanner;
