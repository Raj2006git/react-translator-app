import React from "react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        console.log(email, password);

        // later → API call here
    }
    return (
        <main className='flex flex-col items-center'>
            <div className='justify-start mt-4 text-[#5bf4de] left-24'><a href='/'>Back to Home</a></div>
            <div className="text-center mb-10">
                <h1 className="font-display text-3xl font-bold tracking-tighter text-[#5bf4de] mb-2 pt-14">LOGIN</h1>
            </div>
            <div className='w-[50%] bg-[#141f38b3] rounded-xl p-8 lg:p-10 border-[#40485d1a] border-2 mb-16'>
                <div className='mb-8'>
                    <h2 className="font-mono text-3xl font-bold tracking-tight text-[#dee5ff]">Welcome Back</h2>
                </div>
                <form onSubmit={handleLogin} className='space-y-6'>
                    <div className='space-y-2'>
                        <label className='font-mono text-sm uppercase tracking-widest text-[#6d758c] block ml-1'>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your E-mail ID' className='w-full bg-black border-none text-[#dee5ff] py-4 px-4 rounded-lg focus:ring-1 focus:ring-[#3b82f680] transition-all placeholder:text-[#3b82f680]' />
                    </div>
                    <div className='space-y-2'>
                        <label className='font-mono text-sm uppercase tracking-widest text-[#6d758c] block ml-1'>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className='w-full bg-black border-none text-[#dee5ff] py-4 px-4 rounded-lg focus:ring-1 focus:ring-[#3b82f680] transition-all placeholder:text-[#3b82f680]' />
                    </div>
                    <button className='w-full py-4 text-[#00594f] font-bold bg-[#11c9b4] rounded-lg shadow-[0_10px_20px_rgba(17,201,180,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer' type="submit">SIGN IN</button>
                </form>
                <div className="relative my-8 text-center">
                    <span className="absolute inset-x-0 top-1/2 h-px bg-[#40485d4d]"></span>
                    <span className="relative px-4 font-mono text-[0.6rem] uppercase tracking-widest text-[#6d758c] bg-[#141f38] inline-block">Alternatively</span>
                </div>
                <button className="w-full py-3 bg-[#0f1930] border border-[#40485d33] hover:border-[#11c9b4] cursor-pointer text-[#dee5ff] font-semibold rounded-lg flex items-center justify-center gap-3 transition-all">
                    <svg className="mr-1" height="20" viewBox="0 0 24 24" width="20">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                    </svg>
                    Continue with Google
                </button>
                <p className="text-center mt-4 text-[#a3aac4] text-sm">
                    New to the Lexicon?
                    <a className="text-[#5bf4de] font-bold hover:text-[#19edcd] transition-colors ml-1" href="/signup">Create Account</a>
                </p>
            </div>
        </main>
    )
}

export default Login
