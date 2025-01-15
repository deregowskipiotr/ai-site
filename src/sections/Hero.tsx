"use client";
import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ 
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        duration: 120,
        repeat: Infinity,
        easy: "linear",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5),78%,transparent)]"></div>
      
      {/* START PLANET */}
      <div
        className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 
        top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] 
        bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]
        shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"
      ></div>
      {/* START RING 1 */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
      >
        <div className="absolute h-2 w-2 top-[50%] left-0 -translate-x-[50%] -translate-y-[50%] bg-white rounded-full"></div>
        <div className="absolute h-2 w-2 top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white rounded-full"></div>
        <div className="absolute h-5 w-5 top-[50%] left-full -translate-x-[50%] -translate-y-[50%] border border-white rounded-full flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* START RING 2 */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] border-dashed"
      ></motion.div>
      {/* START RING 3 */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border opacity-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
      >
        <div className="absolute h-2 w-2 top-[50%] left-0 -translate-x-[50%] -translate-y-[50%] bg-white rounded-full"></div>
        <div className="absolute h-2 w-2 top-[50%] left-full -translate-x-[50%] -translate-y-[50%] bg-white rounded-full"></div>
      </motion.div>
      <div className="container  relative mt-16">
        <h1
          className="text-8xl md:text-[168px] md:leading-none md:font-bold font-semibold tracking-tighter bg-white 
        bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(91,51,185,0.5))]
        text-transparent bg-clip-text text-center"
        >
          AI SEO
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center md:text-xl max-w-xl mx-auto">
          Elevate your site&apos;s visibility effortlessly wit AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
