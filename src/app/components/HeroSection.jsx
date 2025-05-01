"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
    return (
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold ">
              <span className="text-white bg-clip-text   h-32 w-full">
                Hello, I&apos;m{" "}
              </span>
          
              <TypeAnimation 
                sequence={[ 
                  "Nutthawut Ramee",
                  1000,
                  "Web Developer",
                  1000,
                  
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                className="bg-gradient-to-r from-pink-500 via-green-400 to-blue-500 bg-clip-text text-transparent"
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hello, my name is Natthawut Rami. I am 21 years old and currently a third-year 
            student majoring in Information Technology 
            and Multimedia at the Faculty of Information Technology, Sripatum University, Khon Kaen Campus.
           


            </p>
            <div>
              <Link
                href="/#contact"
                className=" text-white px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500\
                  hover:from-pink-500 hover:via-green-400 hover:to-blue-400 hover:scale-125 transition-all duration-500"
              >
                Hire Me
              </Link>
              <a
                href="/image/White simple Sales Representative Cv Resume.pdf"
                download 
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500
                  hover:bg-slate-800 text-white mt-3 hover:scale-125 transition-all duration-500"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download Resume
                </span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[320px] h-[320px] relative overflow-hidden group hover:scale-115 transition-all duration-300 ">
              <Image
                src="/image/upscalemedia-transformed.jpeg"
                alt="hero image"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover "
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;