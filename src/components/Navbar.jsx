import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full z-50 bg-[#101828] backdrop-blur-xl flex justify-between items-center px-12 py-4 max-w-full shadow-[0_20px_50px_rgba(91,244,222,0.1)]'>
      <span className='text-2xl font-black text-[#5bf4de] tracking-tighter font-headline'><a href="/">LEXICON</a></span>
      <span className='hidden md:flex gap-10'>
        <NavLink className= {({ isActive }) => isActive? "border-b-2 border-[#5bf4de] text-[#5bf4de] pb-1 font-manrope font-semibold tracking-tight" : "text-slate-400 font-medium hover:text-[#5bf4de] font-manrope tracking-tight" } to = "/">Home</NavLink>
        <NavLink className= {({ isActive }) => isActive? "border-b-2 border-[#5bf4de] text-[#5bf4de] pb-1 font-manrope font-semibold tracking-tight" : "text-slate-400 font-medium hover:text-[#5bf4de] font-manrope tracking-tight" } to= "/translator">Translate</NavLink> 
      </span>
      <span className='flex items-center gap-6'>
        <button className='text-slate-400 font-medium hover:text-[#5bf4de] transition-all font-manrope tracking-tight prototype-link-hover prototype-hotspot'><a href='/login'>Login</a></button>
        <button className='bg-[#5bf4de] text-on-primary-container px-6 py-2 rounded-lg font-bold hover:scale-95 duration-200 ease-out'><a href='/signup'>Sign Up</a></button>
      </span>
    </div>
  )
}

export default Navbar
