import React from "react";
import { User } from "lucide-react"; 

const styles = {

  container: "relative group transition-transform duration-500 hover:scale-105", 
  
  ring: [
    "w-32 h-32", 
    "sm:w-64 sm:h-64 mt-8", 
    "min-[720px]:w-48 min-[720px]:h-48",
    "min-[1280px]:w-56 min-[1280px]:h-56",
    "rounded-full border-4 border-secondary shadow-xl relative bg-gray-800" 
  ].join(" "),

  halo: "absolute inset-[-4px] rounded-full border-4 border-accent opacity-50 transition-opacity duration-400 group-hover:opacity-100 group-hover:border-6 ", 
  
  frame: "w-full h-full rounded-full overflow-hidden relative z-10 flex items-center justify-center"
};

export default function Avatar() {
  const imageUrl = "/portfolio/IMG_9515.JPG";

  return (
    <div className={styles.container}>
      <div className={styles.ring}>
        
        <div className={styles.halo}></div>
        
        <div className={styles.frame}>
            <img 
              src={imageUrl} 
              alt="Avatar de Mateo Liberatore" 
              className="w-full h-full object-cover"
            />
        </div>
      </div>
    </div>
  );
}