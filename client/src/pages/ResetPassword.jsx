import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt=""
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer"
      />

       <form
        className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm"
      >
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          Reset Password
        </h1>
        <p className="text-center mb-6 text-indigo-300">
          Enter your registered email address.
        </p>
        <div>
          <img src={assets.mail_icon} alt="" className="w-3 h-3" />
          <input type="email" placeholder="email Id" className="bg-transparent outline-none text-white" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full">Submit</button>
        </form>

        <form
        onSubmit={onSubmitHandler}
        className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm"
      >
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          Email Verify OTP
        </h1>
        <p className="text-center mb-6 text-indigo-300">
          Enter the 6-digit code sent to your email ID.
        </p>
        <div className="flex justify-between gap-2 mb-6" onPaste={handlePaste}>
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md"
              ref={(el) => (inputRefs.current[index] = el)}
              onInput={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              required
            />
          ))}
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full">
          Verify Email
        </button>
      </form>
      
    </div>
  );
}

export default ResetPassword;
