import React, { useState } from "react";
import Slider from "react-slick";
import ProjectCard from "./elements/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const styles = {
  root: ["w-full", "h-full", "mx-auto"].join(" "),
  slideWrap: ["px-12", "sm:px-16", "h-full"].join(" ") 
};

const NextArrow = ({ onClick, stopAutoplay }) => {
  const handleClick = (e) => {
    stopAutoplay();
    onClick(e);
  };
  return (
    <button 
      onClick={handleClick} 
      className="absolute top-1/2 right-0 z-10 
               transform -translate-y-1/2 text-2xl text-accent 
               hover:scale-125 transition-all duration-200 focus:outline-none
               p-2 sm:p-0"
      aria-label="Siguiente Proyecto"
    >
      <FaArrowRight />
    </button>
  );
};

const PrevArrow = ({ onClick, stopAutoplay }) => {
  const handleClick = (e) => {
    stopAutoplay();
    onClick(e);
  };
  return (
    <button 
      onClick={handleClick} 
      className="absolute top-1/2 left-0 z-10 
               transform -translate-y-1/2 text-2xl text-accent 
               hover:scale-125 transition-all duration-200 focus:outline-none
               p-2 sm:p-0"
      aria-label="Proyecto Anterior"
    >
      <FaArrowLeft />
    </button>
  );
};


export default function Carrousell() {
  const [autoplayActive, setAutoplayActive] = useState(true);
  const stopAutoplay = () => setAutoplayActive(false);

  const nextArrowComponent = <NextArrow stopAutoplay={stopAutoplay} />;
  const prevArrowComponent = <PrevArrow stopAutoplay={stopAutoplay} />;
  
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
      description: "This application is inspired by the concept of pseudocode, utilizing generative templates combined with AI integration. These templates structure the prompts to generate code that is efficient, concise, and highly tailored to the solution being developed. For the Minimum Viable Product (MVP), a class template was implemented. The long-term vision is to implement templates for the most common daily coding structures — ranging from simple functions to full API routes and more — thereby accelerating development processes and eliminating the need for lengthy natural language explanations.\r\n",
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
      description: "A console tool for generating highly customizable Artificial Intelligence agents, with the ability to save valuable conversations. Primarily designed for integration into multiple tools with the goal of easily y simply integrating language models for daily and diverse optimization tasks. Still in development.\r\n",
      stack: ["python","docker"],
      repo: "https://github.com/MateoLiberatore/Custom-assistant",
      image: (
          <img 
            src={"/portfolio/assist.jpeg"} 
            alt="PreCode App" 
            className="w-full h-full object-cover rounded-lg object-[30%_80%]" 
          />
      )
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: true, 
    speed: 600,
    slidesToShow: 1,
    autoplay: autoplayActive,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: nextArrowComponent, 
    prevArrow: prevArrowComponent,
    fade: true,
    cssEase: 'linear' 
  };
  
  return (
    <div className={styles.root + " relative"}>
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