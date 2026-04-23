import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <main className='pt-32 mb-18 bg-[rgb(91_244_222/0.05)] '>
      </main>
      <div className='relative min-h-[50%] flex items-center px-12 overflow-hidden pb-56'>
        <div>
          <div className='flex gap-2 items-center text-[#5bf4de] font-label text-xl'><span>INTILLIGENCE</span><span>MEETS</span><span>LINGUISTICS</span></div>
          <div><h1 className='text-5xl md:text-6xl text-white font-manrope font-bold tracking-tighter leading-none mt-4'>LANGUAGE</h1>
            <span className='text-[#5bf4de] text-5xl md:text-6xl items-center font-bold tracking-tighter' >without limits.</span>
            <span></span>
          </div>
          <div className='mt-5'><button className='bg-[#5bf4de] text-black px-4 py-3 rounded-xs font-mono cursor-pointer hover:scale-95 duration-300 hover:bg-[#15d1b5] tracking-tighter'><a href='/login'>Get Started</a></button></div>
        </div>
        <div className="hidden lg:block absolute right-12 top-1/3 -translate-y-1/2 w-1/3 aspect-square">
          <div className="relative w-full h-full rounded-full border border-outline-variant/10 neon-glow p-8">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img alt="Digital intelligence visualization" className="w-full h-full object-cover mix-blend-lighten opacity-60" data-alt="abstract visualization of neural networks and digital light particles in deep blue and teal tones reflecting high technology" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy0Q4rCGWFSKXlQVEUBZObQ5IZOZUsscPYyC4JbZdNrUF7x-rfO42VkSwoj0CyZSODXMX4TSOCjWtbGpT7mpTj0S8tKKM1Dnj7ZMwPO1LyObdFhm9N0wQUXNt2mUEvbQ4LoEc6bfSg_sJvC6zeDkSuStlsmM5Kvn3fvTsFbXpnsd4DEPZVsZ08V2wr_tf4ux3RgdGApbfaIK9VhpTYwXUiYytvvT7YvMAqZdde_GvmYx5cvgO4SOmVF3FH7RCi0SmHepkD47whXu8"></img>
            </div>
          </div>
        </div>
      </div>
      <div className='px-12'>
        <div className='w-[55%] py-10'>
          <h2 className='w-9/12 text-white text-3xl md:text-4xl font-bold tracking-tighter pb-3'>Precision Engineering for Communication.</h2>
          <p className='text-md text-stone-300'>We've stripped away the noise to focus on what matters: the absolute fidelity of your message across any cultural boundary.</p>
        </div>
        <div className='grid grid-cols-3 gap-8 pb-28'>
          <div className='bg-[#3aa2f2a5] px-5 py-6 rounded-md min-h-60 hover:-translate-y-2 duration-600'><h3 className='text-white text-2xl font-bold pb-7'>Precision</h3>
            <p className='text-stone-300 text-md'>Neural context mapping ensures that idioms and cultural nuances are never lost in translation.</p></div>
          <div className='bg-[#3aa2f2a5] px-5 py-6 rounded-md min-h-60 hover:-translate-y-2 duration-600'><h3 className='text-white text-2xl font-bold pb-7'>Speed</h3>
            <p className='text-stone-300 text-md'>Sub-100ms latency processing for real-time global collaboration without the wait.</p></div>
          <div className='bg-[#3aa2f2a5] px-5 py-6 rounded-md min-h-60 hover:-translate-y-2 duration-600'><h3 className='text-white text-2xl font-bold pb-7'>Privacy</h3>
            <p className='text-stone-300 text-md'>End-to-end encrypted linguistic processing. Your data never trains our public models.</p></div>
        </div>
      </div>
      <div><section className="relative py-48 px-12 overflow-hidden bg-background">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <span className="text-[24rem] text-white font-bold tracking-tighter select-none">LEX</span></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="font-label text-base uppercase tracking-[0.5em] text-[#5bf4de] mb-16 block">Our Philosophy</span>
          <blockquote className="text-4xl md:text-5xl font-light font-headline tracking-tight leading-tight italic text-white">
            "We believe that the future of human connection isn't just about understanding words, but <span className="text-[#5bf4de] font-semibold font-mono">illuminating the intent</span> behind them."
          </blockquote></div></section></div>
      <div><section className="rounded-xl mx-20">
        <div className="bg-[#192540]  max-w-7xl rounded-2xl p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#5bf4de]"></div>
          <div className="flex-1">
            <h2 className="text-5xl font-black mb-8 leading-tight text-white">Ready to transcend language?</h2>
            <p className="text-xl mb-10 max-w-lg text-stone-400">Join 50,000+ developers and global enterprises using Lexicon to power their communication.</p>
            <button className="px-12 py-5 bg-[#5bf4de] text-on-primary font-bold rounded-lg hover:scale-105 transition-transform"><a href='/login'>Get Started Free</a></button>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="bg-[#09477a7b] rounded-xl p-6 border-0">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
                <div className="w-3 h-3 rounded-full bg-[#5bf4de]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-gray-400 blur-2 rounded-full"></div>
                <div className="h-4 w-1/2 bg-gray-500 rounded-full"></div>
                <div class="h-4 w-5/6 bg-gray-400 rounded-full"></div>
                <div className="pt-4 border-t border-outline-variant/10">
                  <div className="h-10 w-full bg-[#5bf4ddb2] rounded border border-primary/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></div>
      <footer className="bg-[#091328] mt-28 w-full py-8 flex flex-col md:flex-row justify-between items-center px-12 border-t border-white/5">
        <div className="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
          <div className="text-lg font-bold text-[#5bf4de] font-headline">Lexicon</div>
          <p className=" text-xs uppercase tracking-widest text-slate-500">© 2026 Lexicon</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <a className=" text-xs uppercase tracking-widest text-slate-500 hover:text-[#5bf4de] transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
          <a className=" text-xs uppercase tracking-widest text-slate-500 hover:text-[#5bf4de] transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
          <a className=" text-xs uppercase tracking-widest text-slate-500 hover:text-[#5bf4de] transition-all opacity-80 hover:opacity-100" href="#">API Documentation</a>
          <a className=" text-xs uppercase tracking-widest text-slate-500 hover:text-[#5bf4de] transition-all opacity-80 hover:opacity-100" href="#">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default Home
