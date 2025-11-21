Refactor de portfolio
Se esta usando React.js
Se esta usando Tailwind 4.x

En la imagen se ve el actual estado de la web del portfolio, factores a corregir y/o implementar:
-   menos espaciado entre los tres elementos personal, proyectos y footer
-   ocupar mejor el ancho en todos sus breakpoints
-   las filas de iconos en personal deben manejar diferentes tamaños para que en los breakpoints no se rompan y se respeten siempre las 3 filas
-   el "aire" necesario en la parte superior para que no este pegada al limite superior de la pantalla
-   el selector de themes debe estar contra el borde izquierdo de su espacio, no centrado
-   En la seccion de proyectos, el titulo debe estar en el limite superior, los iconos de las tecnologias y links deben estar en el límite inferior(fila de las herramientas y debajo fila de os links como viene siendo hasta ahora, solo que reacomodado) y en el espacion que quede entre el titulo y los elementos irá el parrafo de texto
-   reacomodá los estilos dentro de cada componente de tal manera que queden mas modulares y sea mas facil editarlos a futuro.

Estilos:

es preciso generar un diseño responsive para que este portfolio se pueda ver correctamente en:

* moviles

pantallas con las siguientes resoluciones:

* movile
* sm: 640px
* md: 768px
* lg: 1024px
* xl: 1280px
* 2xl: 1536px

Hay que hacer el ajuste de los estilos para que sean compatibles con estos requerimientos responsive.

Dejar todos los estilos LEGIBLES y de facil edicion a futuro de ser necesario 

Encapsular los estilos mas repetidos en clases del index.css que usa tailwind. 

Archivos actuales del proyecto portfolio:
main.jsx:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

App.jsx:
import { useEffect, useState } from "react";
import Container from "./components/Container";


const THEMES = [
{ name: "Sky", color: "#38bdf8", value: "sky" },
{ name: "Orange", color: "#fb923c", value: "orange" },
{ name: "Green", color: "#2dd4bf", value: "green" },
{ name: "Berry", color: "#f43f5e", value: "berry" },
];


export default function App() {
const [themeSelected, setThemeSelected] = useState(THEMES[0]);


const handleThemeChangeByValue = (value) => {
const found = THEMES.find((t) => t.value === value);
if (found) setThemeSelected(found);
};


useEffect(() => {
document.documentElement.setAttribute("data-theme", themeSelected.value);
}, [themeSelected]);


return (
<div className="min-h-screen w-full bg-background transition-colors duration-400">
<Container
themes={THEMES}
themeSelected={themeSelected}
handleThemeChangeByValue={handleThemeChangeByValue}
/>
</div>
);
}
index.css:
@import "tailwindcss";
/* ============================= */
/* BASE GLOBAL */
/* ============================= */
@layer base {
html, body {
margin: 0;
padding: 0;
width: 100%;
height: 100%;
background-color: var(--color-background);
color: var(--color-foreground);
-webkit-font-smoothing: antialiased;
}


/* transiciones suaves globales */
* {
transition:
background-color 250ms ease,
color 250ms ease,
border-color 250ms ease,
fill 250ms ease;
}
}


/* ============================= */
/* UTILIDADES PERSONALIZADAS */
/* ============================= */
@layer utilities {
.bg-background { background-color: var(--color-background); }
.text-foreground { color: var(--color-foreground); }
.text-accent { color: var(--color-accent); }
.bg-secondary { background-color: var(--color-secondary); }


/* Layout principal */
.class-container {
width: 100vw;
min-height: 100vh;
padding: 1rem 0;
background-color: var(--color-background);
}


/* Reusables */
.card {
@apply rounded-xl bg-secondary p-6 sm:p-10 shadow-md;
}


.section {
@apply w-full px-6 sm:px-10 py-10;
}


.title-accent {
@apply text-accent font-semibold;
}


.flex-center {
@apply flex items-center justify-center;
}


.transition-base {
@apply transition-all duration-300 ease-in-out;
}
}


components:
Carrousell.jsx:
import React from "react";
import Slider from "react-slick";
import ProjectCard from "./elements/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const projects = [
{
id: 1,
title: "PIXEL-MECH-MAYHEM",
description: "Interfaz moderna creada con HTML, CSS y JS con animaciones personalizadas.",
stack: ["js", "css", "html"],
repo: "https://github.com/tuusuario/proyecto1",
url: "https://tuusuario.github.io/proyecto1"
},
{
id: 2,
title: ">PreCode",
description: "Aplicación completa con React, Tailwind, Flask y Docker.",
stack: ["react", "tailwind", "python", "flask", "docker"],
repo: "https://github.com/tuusuario/proyecto2",
url: "https://proyecto2.vercel.app"
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
pauseOnHover: true,
};


return (
<section className="section">
<Slider {...settings}>
{projects.map((p) => (
<div key={p.id} className="px-4">
<ProjectCard {...p} image={null} />
</div>
))}
</Slider>
</section>
);
}

Container.jsx:
import React from "react";
import Personal from "./Personal";
import Carrousell from "./Carrousell";
import FooterContact from "./FooterContact";


export default function Container({ themes, themeSelected, handleThemeChangeByValue }) {
return (
<div className="class-container flex flex-col items-center gap-20">

{/* header */}
<div className="w-full max-w-7xl">
<Personal
themes={themes}
themeSelected={themeSelected}
handleThemeChangeByValue={handleThemeChangeByValue}
/>
</div>

{/* proyectos */}
<div className="w-full max-w-7xl">
<Carrousell />
</div>

{/* footer contacto */}
<div className="w-full max-w-7xl">
<FooterContact />
</div>
</div>
);
}

FooterContact.jsx:
import React from "react";
import ContactLink from "./elements/ContactLink";


export default function FooterContact() {
const items = [
{ href: "mailto:tuemail@example.com", label: "Email", icon: "mail" },
{ href: "https://github.com/tuusuario", label: "GitHub", icon: "github" },
{ href: "https://linkedin.com/in/tuusuario", label: "LinkedIn", icon: "linkedin" }
];


return (
<footer className="p-0 py-4 flex justify-center">
<div className="flex gap-20 items-center">
{items.map((c) => (
<ContactLink key={c.label} {...c} />
))}
</div>
</footer>
);
}

Personal.jsx:
import React from "react";
import Avatar from "./elements/Avatar";
import IconRow from "./elements/IconRow";
import ThemeSelector from "./ThemeSelector";


export default function Personal({ themes, themeSelected, handleThemeChangeByValue }) {
return (
<section className="section flex flex-col lg:flex-row items-start gap-10 text-foreground">
  
{/* Avatar */}
<Avatar />


{/* Nombre + Descripción + Tema */}
<div className="flex flex-col gap-6 flex-1">
<h1 className="text-4xl sm:text-5xl font-semibold text-accent">Mateo Liberatore</h1>


<p className="text-sm leading-relaxed text-gray-400 max-w-2xl">
Desarrollador web orientado al detalle, enfocado en construir interfaces claras, optimizadas y
funcionales. Apasionado por la integración entre frontend y backend y la mejora continua de
la experiencia del usuario.
</p>


<ThemeSelector
themes={themes}
selectedValue={themeSelected.value}
onChangeByValue={handleThemeChangeByValue}
/>
</div>


{/* Stack de tecnologías */}
<div className="w-full lg:w-1/3 flex flex-col gap-8">
<IconRow icons={["react", "javascript", "typescript", "tailwind", "css"]} />
<IconRow icons={["python", "node", "flask", "postgresql", "sqlite"]} />
<IconRow icons={["docker", "git", "linux"]} />
</div>
</section>
);
}

ThemeSelector.jsx:
import React from "react";

export default function ThemeSelector({ themes, selectedValue, onChangeByValue }) {
  function handleThemeClick(e) {
    const value = e.currentTarget.dataset.value;
    onChangeByValue(value);
  }

  return (
    <div className="flex gap-5 flex-wrap justify-center mt-0">
      {themes.map((theme) => {
        const isSelected = selectedValue === theme.value;
        return (
          <button
            key={theme.value}
            data-value={theme.value}
            onClick={handleThemeClick}
            title={theme.name}
            className={`w-5.5 h-5.5 rounded-full grid place-items-center transition-transform duration-150 hover:scale-130 
              ${ isSelected }`}
            style={{ backgroundColor: theme.color }}
          />
        );
      })}
    </div>
  );
}


elements:
Avatar.jsx:
import React from "react";


export default function Avatar() {
return (
<div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-secondary overflow-hidden flex-center">
<svg viewBox="0 0 100 100" className="w-28 h-28" fill="currentColor">
<rect width="100" height="100" rx="12" stroke="currentColor" strokeWidth="2" fill="none" />
<circle cx="50" cy="34" r="14" />
<path d="M20 82c6-12 18-22 30-22s24 10 30 22z" />
</svg>
</div>
);
}

ContactLink.jsx:
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Icon({ name }) {
const icons = {
mail: <MdEmail className="text-2xl text-accent" />,
github: <FaGithub className="text-2xl text-accent" />,
linkedin: <FaLinkedin className="text-2xl text-accent" />,
};


return icons[name] || null;
}


export default function ContactLink({ href, label, icon }) {
return (
<a
href={href}
target="_blank"
rel="noreferrer"
className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors"
>
<Icon name={icon} />
<span className="hidden sm:inline">{label}</span>
</a>
);
}

IconRow.jsx:
import React from "react";
import {
SiReact,
SiJavascript,
SiTypescript,
SiTailwindcss,
SiCss3,
SiHtml5,
SiPython,
SiNodedotjs,
SiFlask,
SiDocker,
SiGit,
SiGithub,
SiLinux,
SiPostgresql,
SiSqlite,
} from "react-icons/si";


function getIcon(name) {
const map = {
react: <SiReact />,
javascript: <SiJavascript />,
js: <SiJavascript />,
typescript: <SiTypescript />,
tailwind: <SiTailwindcss />,
css: <SiCss3 />,


python: <SiPython />,
node: <SiNodedotjs />,
flask: <SiFlask />,


docker: <SiDocker />,
git: <SiGit />,
github: <SiGithub />,
linux: <SiLinux />,


postgresql: <SiPostgresql />,
postgres: <SiPostgresql />,
sqlite: <SiSqlite />,
};


return map[name] || null;
}


export default function IconRow({ title, icons = [] }) {
return (
<div className="flex flex-col gap-2">
{title && <span className="text-base font-semibold text-accent">{title}</span>}


<div className="flex flex-wrap gap-6 text-3xl md:text-4xl text-accent">
{icons.map((i) => (
<div key={i} className="p-2 hover:scale-110 transition-transform">
{getIcon(i)}
</div>
))}
</div>
</div>
);
}

ProjectCard.jsx:
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact, SiFlask, SiJavascript, SiPython, SiDocker, SiCss3, SiTailwindcss, SiHtml5
} from "react-icons/si";

function getTechIcon(name) {
  const map = {
    react: <SiReact />, flask: <SiFlask />, js: <SiJavascript />, html: <SiHtml5/>,
    python: <SiPython />, docker: <SiDocker />, css: <SiCss3 />, tailwind: <SiTailwindcss />
  };
  return map[name.toLowerCase()] || null;
}

export default function ProjectCard({ image, title, description, stack, repo, url }) {
  return (
    <article className="rounded-xl p-10 bg-background text-foreground flex flex-col md:flex-row gap-10 items-center justify-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full h-72 bg-secondary rounded-lg grid place-items-center text-sm text-accent">
          {image || "Imagen / Animación"}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h4 className="text-2xl font-semibold text-accent">{title}</h4>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
        <div className="flex gap-5 flex-wrap text-3xl text-accent">
          {stack.map((s) => (
            <div key={s} className="hover:scale-110 transition-transform">
              {getTechIcon(s)}
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-2 text-accent text-2xl">
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className="hover:scale-130 transition-transform">
              <FaGithub />
            </a>
          )}
          {url && (
            <a href={url} target="_blank" rel="noreferrer" className="hover:scale-130 transition-transform">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

