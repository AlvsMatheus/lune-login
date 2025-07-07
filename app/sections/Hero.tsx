"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Hero = () => {

  const containerRef = useRef(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from([".login-title", ".form-element"], {
      opacity: 0,
      filter: "blur(10px)",
      x: -50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      onComplete: () => {
        setIsAnimationComplete(true);
      }
    });
  }); 

  
  return () => ctx.revert();


}, []);
  return (
    <header ref={containerRef}>
      <div className="flex justify-center items-center h-screen w-full bg-[url('/background.png')] bg-cover bg-top lg:bg-center xl:bg-top">
        <div className="backdrop-blur-md bg-white/10 shadow-lg h-90 w-90 md:h-80 md:w-110 lg:h-110 lg:w-90 rounded-2xl border border-white/40 transition-all duration-500 ease-in-out">
          <div className="grid grid-cols-1 grid-rows-[12%_88%] gap-5 md:gap-2  lg:gap-8 h-full w-full p-5 md:p-2 lg:p-10 rounded-2xl">
            <div className="flex justify-center">
              <h1 className="text-3xl font-roboto text-white login-title">Login</h1>
            </div>
            <form
            className=""
            action="">
             <div className="flex flex-col items-center gap-4">
               <div className="flex justify-center w-full form-element">
                <input 
                required
                autoFocus
                type="text" 
                id="iname" 
                placeholder="Username" 
                className="w-50 border rounded-4xl p-2 border-white text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div className="flex flex-col items-center justify-center form-element">
                  <input 
                  required
                  type="password" 
                  placeholder="Password" 
                  className=" w-50 border rounded-4xl p-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 " />
                  <div className="flex justify-end w-full mt-1">
                    <a
                    href="#"
                    className="text-gray-300 text-sm">
                    forgot password?
                    </a>
                  </div>
                </div>
                <div className={`group bg-gradient-to-bl hover:cursor-pointer hover:bg-gradient-to-t hover:from-indigo-700 hover:to-black/20 from-black/20 to-indigo-700 w-20 text-center p-2 rounded-3xl my-0 lg:my-6 form-element ${isAnimationComplete ? 'transition-all duration-500 ease-in-out' : ''}`}>
                  <button className="text-white font-roboto font-bold group-hover:cursor-pointer group-hover:text-fuchsia-400 font-roboto ">Login</button>
                </div>
                <div className="flex flex-col items-center gap-2 w-full form-element">
                  <div className=" flex items-center gap-2">
                      <label
                      className="text-black text-nowrap text-sm font-roboto"
                      htmlFor="">Remember me</label>
                      <input 
                      className="checked"
                      type="checkbox" />
                  </div>
                  <div>
                    <a
                    className="text-black text-sm"
                    href="">dont have an account? <strong className="text-fuchsia-600 font-bold font-roboto underline">register now</strong></a>
                  </div>
                </div>
             </div>
            </form>
          </div>
        </div>
      </div> 
    </header>
  )
}

export default Hero
