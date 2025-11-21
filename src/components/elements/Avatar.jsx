import React from "react";
import { User } from "lucide-react"; 

const styles = {
  // El contenedor completo es el grupo de hover que aplica la escala a todo
  container: "relative group transition-transform duration-500 hover:scale-105", 
  
  // El 'ring' actúa como el contenedor principal con el borde secundario (gris/oscuro)
  // Define el tamaño del avatar.
  ring: [
    "w-32 h-32", 
    "sm:w-64 sm:h-64 mt-8", 
    "min-[720px]:w-48 min-[720px]:h-48",
    "min-[1280px]:w-56 min-[1280px]:h-56",
    "rounded-full border-4 border-secondary shadow-xl relative bg-gray-800" // Incluye el borde principal
  ].join(" "),

  halo: "absolute inset-[-4px] rounded-full border-4 border-accent opacity-50 transition-opacity duration-400 group-hover:opacity-100 group-hover:border-6 ", 
  
  // El 'frame' contiene la imagen y asegura el recorte circular. Debe estar sobre el halo.
  frame: "w-full h-full rounded-full overflow-hidden relative z-10 flex items-center justify-center"
};

export default function Avatar() {
  const imageUrl = "/portfolio/IMG_9515.JPG";

  return (
    <div className={styles.container}>
      {/* 1. Contenedor del anillo principal y el halo */}
      <div className={styles.ring}>
        
        {/* 2. El Halo de color que se ajusta perfectamente y reacciona al hover */}
        <div className={styles.halo}></div>
        
        {/* 3. El marco que contiene la imagen */}
        <div className={styles.frame}>
            <img 
              src={imageUrl} 
              alt="Avatar de Mateo Liberatore" 
              className="w-full h-full object-cover" 
              // Asegúrate de que la imagen esté disponible en esta ruta
            />
        </div>
      </div>
    </div>
  );
}