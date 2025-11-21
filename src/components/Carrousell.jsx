import React from "react";
import Slider from "react-slick";
import ProjectCard from "./elements/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = {
  root: ["w-full", "h-full", "mx-auto"].join(" "),
  slideWrap: ["px-10", "sm:px-16", "h-full"].join(" ") 
};

const projects = [
  {
    id: 1,
    title: "PIXEL-MECH-MAYHEM",
    description:"A 2D Platformer Game Prototype built with Vanilla JavaScript and structured around the Model-View-Controller (MVC) design pattern. Key features include sprite-based animations, controlled movement of game entities within the Canvas, individual state management for instances, and keyboard input for interaction.",
    stack: ["js", "css", "html"],
    repo: "https://github.com/MateoLiberatore/Pixel-Mech-Mayhem",
    url: "https://mateoliberatore.github.io/Pixel-Mech-Mayhem",
    image: (
        <img 
          src={"/portfolio/mech.jpeg"} 
          alt="Pixel Mech Mayhem" 
          className="w-full h-full object-cover rounded-lg object-[0%_98%]"  
        />
    )
  },
  {
    id: 2,
    title: ">PreCode",
    description: "Una aplicacion inspirada en el pseudocódigo, que por medio de templa\r\n",
    stack: ["react", "tailwind", "python", "flask", "docker"],
    repo: "https://github.com/MateoLiberatore/PreCode",
    url: "https://mateoliberatore.github.io/PreCode",
    image: (
        <img 
          src={"/portfolio/precode.jpeg"} 
          alt="PreCode App" 
          className="w-full h-full object-cover rounded-lg object-[30%_80%]" 
        />
    )
  },
  {
    id: 3,
    title: "Custom Assistant",
    description: "A console tool for generating highly customizable Artificial Intelligence agents, with the ability to save valuable conversations. Primarily designed for integration into multiple tools with the goal of easily and simply integrating language models for daily and diverse optimization tasks. Still in development.\r\n",
    stack: ["python","docker"],
    repo: "#",
    image: (
        <img 
          src={"/portfolio/assist.jpeg"} 
          alt="PreCode App" 
          className="w-full h-full object-cover rounded-lg object-[30%_80%]" 
        />
    )
  }
];

export default function Carrousell() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 600,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };
  
  return (
    <div className={styles.root}>
      <Slider {...settings}>
        {projects.map((p) => (
          <div key={p.id} className={styles.slideWrap}>
            <ProjectCard {...p} />
          </div>
        ))}
      </Slider>
    </div>
  );
}