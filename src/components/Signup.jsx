import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    console.log(username, email, password);
  }

  return (
    <main className="flex flex-col items-center">
      
      {/* BACK */}
      <div className="mt-4 text-[#5bf4de]">
        <a href="/">Back to Home</a>
      </div>

      {/* TITLE */}
      <div className="text-center mb-10">
        <h1 className="font-display text-3xl font-bold tracking-tighter text-[#5bf4de] mb-2 pt-14">
          SIGN UP
        </h1>
      </div>

      {/* CARD */}
      <div className="w-[50%] bg-[#141f38b3] rounded-xl p-8 lg:p-10 border-[#40485d1a] border-2 mb-16">

        <div className="mb-8">
          <h2 className="font-mono text-3xl font-bold tracking-tight text-[#dee5ff]">
            Create Account
          </h2>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">

          {/* USERNAME */}
          <div className="space-y-2">
            <label className="font-mono text-sm uppercase tracking-widest text-[#6d758c] block ml-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username"
              className="w-full bg-black text-[#dee5ff] py-4 px-4 rounded-lg focus:ring-1 focus:ring-[#3b82f680] placeholder:text-[#3b82f680]"
            />
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <label className="font-mono text-sm uppercase tracking-widest text-[#6d758c] block ml-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your E-mail ID"
              className="w-full bg-black text-[#dee5ff] py-4 px-4 rounded-lg focus:ring-1 focus:ring-[#3b82f680] placeholder:text-[#3b82f680]"
            />
          </div>

          {/* PASSWORD */}
          <div className="space-y-2">
            <label className="font-mono text-sm uppercase tracking-widest text-[#6d758c] block ml-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-black text-[#dee5ff] py-4 px-4 rounded-lg focus:ring-1 focus:ring-[#3b82f680] placeholder:text-[#3b82f680]"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-4 text-[#00594f] font-bold bg-[#11c9b4] rounded-lg shadow-[0_10px_20px_rgba(17,201,180,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            SIGN UP
          </button>
        </form>

        {/* DIVIDER */}
        <div className="relative my-8 text-center">
          <span className="absolute inset-x-0 top-1/2 h-px bg-[#40485d4d]"></span>
          <span className="relative px-4 font-mono text-[0.6rem] uppercase tracking-widest text-[#6d758c] bg-[#141f38] inline-block">
            Or Continue with
          </span>
        </div>

        {/* GOOGLE */}
        <button className="w-full py-3 bg-[#0f1930] border border-[#40485d33] hover:border-[#11c9b4] text-[#dee5ff] font-semibold rounded-lg flex items-center justify-center gap-3 transition-all">
          Google
        </button>

        {/* FOOTER */}
        <p className="text-center mt-4 text-[#a3aac4] text-sm">
          Already Registered?
          <a
            className="text-[#5bf4de] font-bold hover:text-[#19edcd] ml-1"
            href="/login"
          >
            Log in here
          </a>
        </p>
      </div>
    </main>
  );
};

export default Signup;