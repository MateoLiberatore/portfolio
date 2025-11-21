import React from "react";
import {
  SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiCss3, 
  SiPython, SiNodedotjs, SiFlask, SiDocker, SiGit, SiLinux,
  SiPostgresql, SiSqlite
} from "react-icons/si";

const mapIcons = {
  react: <SiReact />, javascript: <SiJavascript />, typescript: <SiTypescript />, tailwind: <SiTailwindcss />, css: <SiCss3 />,
  python: <SiPython />, node: <SiNodedotjs />, flask: <SiFlask />, sqlite: <SiSqlite />, postgresql: <SiPostgresql />,
  docker: <SiDocker />, git: <SiGit />, linux: <SiLinux />
};

const styles = {
  root: [
    "flex", "flex-wrap", "items-center", "text-accent",
    "justify-start", "gap-6", 
    "min-[720px]:justify-center", "min-[720px]:gap-5",
    "min-[1280px]:justify-start"
  ].join(" "),
  
  sizes: [
      "text-2xl",
      "sm:text-4xl",
      "min-[720px]:text-6xl",
      "min-[1280px]:text-7xl" 
    ].join(" "),

  iconWrapper: "p-1 hover:scale-150 transition-all duration-200 ease-in-out cursor-pointer"
};

export default function IconRow({ icons }) {
  return (
    <div className={styles.root}>
      {icons.map((icon, index) => (
        <div key={index} className={[styles.iconWrapper, styles.sizes].join(" ")}>
          {mapIcons[icon] || null}
        </div>
      ))}
    </div>
  );
}