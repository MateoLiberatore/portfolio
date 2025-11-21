import React from "react";
import ContactLink from "./elements/ContactLink";

const styles = {
  root: ["w-full", "py-2","mt-10", "mb-5"].join(" "),
  inner: ["w-full", "flex", "justify-center"].join(" "),
  list: ["flex", "flex-row", "gap-4", "sm:gap-12", "items-center"].join(" ")
};

export default function FooterContact() {
  const items = [
    { href: "liberatoremate98@gmail.com", label: "liberatoremate98@gmail.com", icon: "mail" },
    { href: "https://github.com/tuusuario", label: "GitHub", icon: "github" },
    { href: "https://linkedin.com/in/tuusuario", label: "LinkedIn", icon: "linkedin" }
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