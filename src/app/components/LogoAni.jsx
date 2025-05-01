"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";


const imageList = [
  { src: "/image/css.png", alt:"logo css" },
  { src: "/image/html.png", alt:"logo html" },
  { src: "/image/javeS.png", alt:"logo ls" },
  { src: "/image/Bootstrap.png", alt:"logo Bootstrap" },
  { src: "/image/TailwindCSS.jpg", alt:"logo Tailwind CSS" },
  { src: "/image/React.jpg", alt:"logo React" },
  { src: "/image/Next.js.png", alt:"logo Next.js" },
  { src: "/image/css.png", alt:"logo css" },
  { src: "/image/html.png", alt:"logo html" },
  { src: "/image/javeS.png", alt:"logo ls" },
  { src: "/image/Bootstrap.png", alt:"logo Bootstrap" },
  { src: "/image/TailwindCSS.jpg", alt:"logo Tailwind CSS" },
  { src: "/image/React.jpg", alt:"logo React" },
  { src: "/image/Next.js.png", alt:"logo Next.js" },
  { src: "/image/css.png", alt:"logo css" },
  { src: "/image/html.png", alt:"logo html" },
  { src: "/image/javeS.png", alt:"logo ls" },
  { src: "/image/Bootstrap.png", alt:"logo Bootstrap" },
  { src: "/image/TailwindCSS.jpg", alt:"logo Tailwind CSS" },
  { src: "/image/React.jpg", alt:"logo React" },
  { src: "/image/Next.js.png", alt:"logo Next.js" },

];

const logoAni = () => {
  return (
    <div>
      <div className="container mx-auto">
         <div className="overflow-hidden [mask-image:linear-gradient(to_right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to_bottom, transparent 0%, black 20%, black 80%, transparent 100%)] [mask-composite:intersect]">

              <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                   translateX: '-50%',
              }}
              transition={{
                   duration: 15,
                   repeat: Infinity,
                   ease:"linear",
                   repeatType: "loop"
              }}
              >
              {imageList.map((image,index) => (
                <Image
                   key={index}
                   src={image.src}
                   alt={image.alt}
                   height={200}
                   width={150}
                   className="w-30 h-24"
                   
                />
              ))}

              </motion.div>
         </div>
      </div>
    </div>
  )
}

export default logoAni;