import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <main className="min-h-screen flex flex-col items-center px-4">

      {/* BACK */}
      <div className="w-full max-w-md mt-4">
        <NavLink to="/" className="text-[#5bf4de] text-sm">
          ← Back to Home
        </NavLink>
      </div>

      {/* TITLE */}
      <div className="text-center mb-6 mt-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#5bf4de]">
          LOGIN
        </h1>
      </div>

      {/* CARD */}
      <div className="w-full max-w-md bg-[#141f38b3] rounded-xl p-6 md:p-8 border border-[#40485d1a]">

        <h2 className="text-xl md:text-3xl font-bold text-[#dee5ff] mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="text-xs uppercase text-[#6d758c]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 bg-black text-white py-3 px-3 rounded-lg outline-none focus:ring-1 focus:ring-[#3b82f680]"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-xs uppercase text-[#6d758c]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full mt-1 bg-black text-white py-3 px-3 rounded-lg outline-none focus:ring-1 focus:ring-[#3b82f680]"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-[#11c9b4] text-[#00594f] font-bold rounded-lg hover:scale-[1.02] transition"
          >
            SIGN IN
          </button>
        </form>

        {/* DIVIDER */}
        <div className="relative my-6 text-center">
          <span className="absolute inset-x-0 top-1/2 h-px bg-[#40485d4d]" />
          <span className="relative px-3 text-[10px] uppercase text-[#6d758c] bg-[#141f38]">
            Alternatively
          </span>
        </div>

        {/* GOOGLE BUTTON */}
        <button className="w-full py-3 bg-[#0f1930] border border-[#40485d33] hover:border-[#11c9b4] text-white rounded-lg flex items-center justify-center gap-2">
          Continue with Google
        </button>

        {/* FOOTER */}
        <p className="text-center mt-4 text-[#a3aac4] text-sm">
          New to Lexicon?
          <NavLink
            to="/signup"
            className="text-[#5bf4de] font-bold ml-1"
          >
            Create Account
          </NavLink>
        </p>
      </div>
    </main>
  );
};

export default Login;