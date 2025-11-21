import React from "react";
import { User } from "lucide-react"; 

const styles = {
  container: "relative group",
  frame: [
    "w-32 h-32", 
    "sm:w-60 sm:h-60 mt-8", 
    "min-[720px]:w-48 min-[720px]:h-48",
    "min-[1280px]:w-56 min-[1280px]:h-56",
    "rounded-full overflow-hidden border-4 border-secondary shadow-xl relative z-10 bg-gray-800 flex items-center justify-center"
  ].join(" "),
  ring: "absolute inset-0 rounded-full border-2 border-accent opacity-50 scale-105 group-hover:scale-110 transition-transform duration-500"
};

export default function Avatar() {
  const imageUrl = "public/IMG_9515.JPG"; 

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <img 
          src={imageUrl} 
          alt="Avatar de Mateo Liberatore" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className={styles.ring}></div>
    </div>
  );
}