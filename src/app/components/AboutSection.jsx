"use client";
import React,{ useTransition,useState } from "react";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>tailwind</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>bootstrap</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>Lomsak Wittayakom School <br /> 2018-2021</li>
        <li>Sripatum University, Khon Kaen <br /> 2021-2025</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab,setTab] = useState("skills");
  const [isPending,startTransition] = useTransition();

  const handleTabChange = (id) => {
      startTransition(() =>{
        setTab(id);
      });
  }
  return (
    <section className = "text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 text-[#ADB7BE]" id="about">
          <img className=" rounded-3xl w-[350px] h-[300px] relative overflow-hidden group hover:scale-115 transition-all duration-300 ml-25" src="/image/upscalemedia-transformed (1).jpeg" width={500} height={500} /> 
          <div >
            <h2 className=' text-3xl font-bold text-white mb-4' >
                About ME
            </h2>
            <p className="text-base mb:text-lg">
              I am a web developer  I am a web developer with a strong passion for 
              web development, particularly in frontend technologies.
              During my studies, I have developed skills in HTML, CSS, 
              JavaScript, React, and Next.js, and have also utilized tools 
              such as Tailwind CSS and Git to manage and structure projects more efficiently..
            </p>
            <div className=' flex flex-row mt-6 text-2xl'>
              <TabButton selectTab={() => handleTabChange("skills")} 
                active={tab === "skills"}>
                  {""}
                   skills 
                  {""}
                   </TabButton>
                   <TabButton selectTab={() => handleTabChange("Education")} 
                active={tab === "Education"}>
                  {""}
                  Education 
                  {""}
                   </TabButton>
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection