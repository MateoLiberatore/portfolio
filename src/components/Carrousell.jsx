import React from "react";
import Slider from "react-slick";
import ProjectCard from "./elements/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = {
  root: ["w-full", "h-full", "mx-auto"].join(" "),
  slideWrap: ["px-", "sm:px-8", "h-full"].join(" ")
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
    <section className={styles.root}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 mt-5 text-center text-accent xl:text-center">
        Projects
      </h2>
      <div className="w-full">
        <Slider {...settings}>
          {projects.map((p) => (
            <div key={p.id} className={styles.slideWrap}>
              <ProjectCard {...p} image={null} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}