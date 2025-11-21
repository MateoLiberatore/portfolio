import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiFlask, SiJavascript, SiPython, SiDocker, SiCss3, SiTailwindcss, SiHtml5 } from "react-icons/si";

const techMap = {
  react: <SiReact />, flask: <SiFlask />, js: <SiJavascript />, javascript: <SiJavascript />,
  python: <SiPython />, docker: <SiDocker />, css: <SiCss3 />, tailwind: <SiTailwindcss />, html: <SiHtml5 />
};

const styles = {
  articleBase: [
    "flex", "flex-col", "gap-6", "w-full", "text-foreground", 
    "items-center",
    "min-[720px]:flex-row",
    "min-[720px]:items-start"
  ].join(" "),
  
  imgWrap: [
    "w-full",
    "min-[720px]:w-1/2",
    "min-[720px]:justify-start"
  ].join(" "),

  imgBox: [
    "w-full", "h-48", "sm:h-56", "min-[720px]:h-64", "min-[1280px]:h-72", 
    "bg-secondary", "rounded-lg", "grid", "place-items-center", "text-sm", "text-accent"
  ].join(" "),
  
  contentWrap: [
    "w-full",
    "flex", "flex-col", "gap-4", 
    "justify-between",
    "items-center", "text-center",
    "min-[720px]:w-1/2",
    "min-[720px]:items-start", "min-[720px]:text-left"
  ].join(" "),
  
  title: [
    "text-2xl", "sm:text-2xl", "min-[720px]:text-4xl", 
    "font-semibold", "text-accent"
  ].join(" "),

  description: ["text-body", "mt-2"].join(" "),

  stackRow: [
    "flex", "flex-wrap", "gap-4", 
    "text-xl", "text-accent", 
    "items-start", "justify-center",
    "min-[720px]:justify-start"
  ].join(" "),

  linkRow: [
    "flex", "gap-5", "text-xl", "text-accent", 
    "items-start", "justify-center",
    "min-[720px]:justify-start"
  ].join(" ")
};

export default function ProjectCard({ image, title, description, stack = [], repo, url }) {
  return (
    <article className={styles.articleBase}>
      <div className={styles.imgWrap}>
        <div className={styles.imgBox}>
          {image || "Imagen / Animación"}
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.stackRow}>
          {stack.map((s) => (
            <span key={s} className="hover:scale-150 transition-all duration-200 ease-in-out cursor-pointer">
              {techMap[s]}
            </span>
          ))}
        </div>

        <div className={styles.linkRow}>
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" 
            className="hover:scale-140 transition-all duration-200 ease-in-out cursor-pointer">
              <FaGithub />
            </a>
          )}
          {url && (
            <a href={url} target="_blank" rel="noreferrer" 
            className="hover:scale-130 transition-all duration-200 ease-in-out cursor-pointer">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}