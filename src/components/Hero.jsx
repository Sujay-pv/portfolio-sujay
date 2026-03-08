import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = ({ onReady }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/SujayPV_Resume_FullStack.pdf";
    link.setAttribute("download", "SujayPV_Resume_FullStack_2026.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className='relative w-full min-h-screen mx-auto overflow-hidden'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[110px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-5`}
      >
        <div className='w-full lg:w-[42%] lg:max-w-[520px]'>
          <div className='flex flex-row items-start gap-5'>
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915eff]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm<span className='text-[#915eff]'> Sujay</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                A Full Stack Dev fixing real-world{" "}
                <br className='sm:block hidden' /> gaps with AI tools & web apps.
              </p>
              <button
                onClick={handleDownload}
                className='mt-6 px-5 py-2 bg-[#915eff] text-white rounded-xl cursor-pointer'
              >
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className='hero-canvas-wrap relative w-full lg:flex-1 lg:min-w-0 h-[48vh] sm:h-[52vh] lg:h-[70vh] max-h-[680px]'>
          <ComputersCanvas onLoaded={onReady} />
        </div>
      </div>

      <div className='absolute inset-x-0 bottom-4 sm:bottom-6 md:bottom-8 max-[700px]:bottom-3 w-full flex justify-center items-center pointer-events-none z-20'>
        <a href='#about' className='pointer-events-auto'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
