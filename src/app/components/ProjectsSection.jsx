import React from 'react';
import ProjectCard from "./ProjectCard";



const ProjectDate = [
  {
     id:1,
     title:"web portfolio",
     description:"Project 1",
     image:"/image/Hello.png",
     tag:["all" ,"web"],
     gitUrl: "https://www.youtube.com/watch?v=Is1PyvA0MAU&list=RDMMIs1PyvA0MAU&start_radio=1",
     previewUrl: "https://www.youtube.com/watch?v=Is1PyvA0MAU&list=RDMMIs1PyvA0MAU&start_radio=1",
  },
  {
     id:2,
     title:"Shopping page",
     description:"Project 2",
     image:"/image/Shopping.png",
     tag:["all" ,"web"],
     gitUrl: "https://github.com/kokosnotkatt/ShoppingWeb.git",
     previewUrl: "https://shoppingweb-8c3n.onrender.com",
  },
];

const ProjectsSection = () => {
  return (
    <>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12" id="projects">My project</h2>
    <ul className="grid md:grid-cols-3 gap-8 md:gap-12" >{ProjectDate.map((project) =>
       <ProjectCard className="w-[100%] h-[300%] rounded-4xl mb:h-auto object-cover object-right
                     md:object-left-bottom "
        key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl} 
         />
        )} 
       </ul>
    </>
  )
}

export default ProjectsSection;