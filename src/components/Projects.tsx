import React from 'react';
import Heading from './Heading';
import Card from './Card';

const  data = [
{


    id: 0,
    title: "Todo List",
    desc: "A React & TypeScript-based app for managing and organizing your tasks efficiently",
    img: "/project-0.png",
    tags: ["Next.Js", "Node,", "CSS", "TypeScript"],
},
 {
    id: 1,
    title: "Countdown Timer",
    desc: " A React & TypeScript-based app for tracking deadlines with a customizable timer.",
    img: "/project-1.png",
    tags: ["Next.Js", "Node,", "CSS", "TypeScript"],
} ,
{
    id: 2,
    title: "Dynamic Resume Builder",
    desc: "  A React & TypeScript-based app for creating and customizing professional resumes.",
    img: "/project-2.png",
    tags: ["Next.Js", "Node,", "CSS", "TypeScript"],
}  ,
{
    id: 3,
    title: "Weather Wiget",
    desc: "A React & TypeScript-based app for displaying real-time weather updates based on location.",
    img: "/project-3.png",
    tags: ["Next.Js", "Node,", "CSS", "TypeScript"],
}  ,
{
    id: 4,
    title: "Currency Converter",
    desc: "  A TypeScript-based CLI tool for quick and accurate currency conversions.",
    img: "/project-4.png",
    tags: ["Next.Js", "Node,", "CSS", "TypeScript"],
}  ,
{
    id: 5,
    title: "Automotive E-commerce Website",
    desc: " A React & TypeScript-based website for showcasing automotive products and services.",
    img: "/project-5.png",
    tags: ["Next.Js", "Node,", "CSS", "TypeScript"],
}  
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Projects;