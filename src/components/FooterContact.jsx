import React from "react";
import ContactLink from "./elements/ContactLink";

const styles = {
  root: ["w-full", "py-2","mt-12", "mb-5"].join(" "),
  inner: ["w-full", "flex", "justify-center"].join(" "),
  list: ["flex", "flex-row", "gap-4", "sm:gap-12", "items-center"].join(" ")
};

export default function FooterContact() {
  const EMAIL_ADDRESS = "liberatoremate98@gmail.com";
  
  const handleEmailCopy = (e) => {
    e.preventDefault(); 
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL_ADDRESS).then(() => {
        alert("Email copied to clipboard! 📋"); 
      }).catch(err => {
        alert("Error trying to copy the email. Please try manually.");
      });
    } else {
      alert("Your browser does not support automatic copying. Please copy it manually.");
    }
  };

  const items = [
    { 
      href: `mailto:${EMAIL_ADDRESS}`, 
      label: EMAIL_ADDRESS, 
      icon: "mail",
      onClick: handleEmailCopy
    },
    { href: "https://github.com/MateoLiberatore", label: "GitHub", icon: "github" },
    { href: "https://www.linkedin.com/in/mateo-liberatore", label: "LinkedIn", icon: "linkedin" }
  ];

  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.list}>
          {items.map((c) => (
            <ContactLink key={c.label} {...c} />
          ))}
        </div>
      </div>
    </footer>
  );
}