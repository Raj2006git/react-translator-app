import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <main className='pt-24 md:pt-32 mb-10 bg-[rgb(91_244_222/0.05)]' />

      <div className='relative flex flex-col lg:flex-row items-center px-4 md:px-12 md:justify-between overflow-hidden pb-20 md:pb-56 gap-10'>

        {/* LEFT */}
        <div className='text-center lg:text-left'>
          <div className='flex flex-wrap justify-center lg:justify-start gap-2 text-[#5bf4de] text-sm md:text-xl'>
            <span>INTELLIGENCE</span>
            <span>MEETS</span>
            <span>LINGUISTICS</span>
          </div>

          <div>
            <h1 className='text-4xl md:text-6xl text-white font-bold mt-4'>
              LANGUAGE
            </h1>
            <span className='text-[#5bf4de] text-4xl md:text-6xl font-bold'>
              without limits.
            </span>
          </div>

          <div className='mt-6'>
            <button className='bg-[#5bf4de] text-black px-6 py-3 rounded-md font-mono hover:scale-95 duration-300'>
              <a href='/login'>Get Started</a>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:block w-1/3">
          <div className="relative w-full h-full rounded-full border p-8">
            <img
              className="w-full h-full object-cover opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy0Q4rCGWFSKXlQVEUBZObQ5IZOZUsscPYyC4JbZdNrUF7x-rfO42VkSwoj0CyZSODXMX4TSOCjWtbGpT7mpTj0S8tKKM1Dnj7ZMwPO1LyObdFhm9N0wQUXNt2mUEvbQ4LoEc6bfSg_sJvC6zeDkSuStlsmM5Kvn3fvTsFbXpnsd4DEPZVsZ08V2wr_tf4ux3RgdGApbfaIK9VhpTYwXUiYytvvT7YvMAqZdde_GvmYx5cvgO4SOmVF3FH7RCi0SmHepkD47whXu8"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className='px-4 md:px-12'>
        <div className='max-w-2xl py-10'>
          <h2 className='text-white text-2xl md:text-4xl font-bold pb-3'>
            Precision Engineering for Communication.
          </h2>
          <p className='text-sm md:text-md text-stone-300'>
            We've stripped away the noise to focus on what matters.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pb-20'>
          {["Precision", "Speed", "Privacy"].map((item) => (
            <div key={item} className='bg-[#3aa2f2a5] p-6 rounded-md hover:-translate-y-2 transition'>
              <h3 className='text-white text-xl font-bold pb-4'>{item}</h3>
              <p className='text-stone-300 text-sm'>
                High-quality translation experience.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="mx-4 md:mx-20 mb-20">
        <div className="bg-[#192540] rounded-2xl p-6 md:p-16 flex flex-col md:flex-row items-center gap-10">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to transcend language?
            </h2>
            <p className="text-stone-400 mb-6">
              Join thousands of users worldwide.
            </p>
            <button className="px-6 py-3 bg-[#5bf4de] rounded-lg hover:scale-105 transition">
              <a href='/login'>Get Started</a>
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#091328] py-6 flex flex-col md:flex-row justify-between items-center px-4 md:px-12 text-center">
        <div className="mb-4 md:mb-0">
          <div className="text-lg font-bold text-[#5bf4de]">Lexicon</div>
          <p className="text-xs text-slate-500">© 2026</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">API</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default Home