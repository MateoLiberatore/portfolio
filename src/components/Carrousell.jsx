import React from "react";
import Slider from "react-slick";
import ProjectCard from "./elements/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = {
  root: ["w-full", "h-full", "mx-auto","p-1","mt-2"].join(" "),
  // Aumento del padding en slideWrap
  slideWrap: ["px-10", "sm:px-16", "h-full"].join(" ") 
};

const projects = [
  {
    id: 1,
    title: "PIXEL-MECH-MAYHEM",
    description: "Interfaz moderna con HTML, CSS y JS con animaciones personalizadas.",
    stack: ["js", "css", "html"],
    repo: "#",
    url: "#"
  },
  {
    id: 2,
    title: ">PreCode",
    description: "Aplicación con React, Tailwind, Flask y Docker.",
    stack: ["react", "tailwind", "python", "flask", "docker"],
    repo: "#",
    url: "#"
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