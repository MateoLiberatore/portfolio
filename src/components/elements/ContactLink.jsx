import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const iconMap = {
  mail: <MdEmail className="text-2xl text-accent" />,
  github: <FaGithub className="text-2xl text-accent" />,
  linkedin: <FaLinkedin className="text-2xl text-accent" />
};

const styles = {
  root: ["flex", "items-center", "gap-3", "text-sm", "text-foreground", "hover:text-accent", "transition-base"].join(" "),
  label: ["hidden", "sm:inline"].join(" ")
};

export default function ContactLink({ href, label, icon, onClick }) {
  
  const shouldOpenNewTab = icon !== 'mail';

  return (
    <a 
      href={href} 
      onClick={onClick} 
      target={shouldOpenNewTab ? "_blank" : undefined} 
      rel="noreferrer" 
      className={styles.root}
    >
      {iconMap[icon]}
      <span className={styles.label}>{label}</span>
    </a>
  );
}