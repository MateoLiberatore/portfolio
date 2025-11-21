import React from "react";
import Avatar from "../components/elements/Avatar";
import IconRow from "../components/elements/IconRow";
import ThemeSelector from "./ThemeSelector";

const styles = {
  root: [
    "w-full", "flex", "flex-col", "gap-8", "py-6", "px-4", "max-w-[1600px]", "mx-auto",
    "items-center", "text-center", "mt-10",
    "min-[720px]:items-center", "min-[720px]:text-center", "min-[720px]:px-8",
    "min-[1280px]:flex-row", "min-[1280px]:justify-between", "min-[1280px]:gap-16", "min-[1280px]:py-8",
    "min-[1280px]:items-start", "min-[1280px]:text-left"
  ].join(" "),

  mainContent: [
    "w-full", "flex", "flex-col", "items-center", "gap-5",
    "min-[720px]:w-full", "min-[720px]:items-center",
    "min-[1280px]:flex-row", "min-[1280px]:items-start", "min-[1280px]:gap-10",
    "min-[1280px]:w-auto", "min-[1280px]:flex-1"
  ].join(" "),

  avatarContainer: [
    "flex-none", "flex", "flex-col", 
    "items-center", "justify-center",
    "min-[720px]:items-center", 
    "min-[1280px]:items-start"
  ].join(" "),

  infoContainer: [
    "flex", "flex-col", "gap-6", "w-full",
    "items-center",
    "min-[720px]:items-center", 
    "min-[1280px]:items-start"
  ].join(" "),

  themeContainer: [
    "w-full", "flex", 
    "justify-center", "mt-2",
    "min-[720px]:justify-center",
    "min-[1280px]:justify-start"
  ].join(" "),

  iconsContainer: [
    "w-full", "flex", "flex-col", "gap-6", 
    "max-w-xl", 
    "mx-auto", 
    "items-start", "mt-4", 
    "min-[720px]:w-full", "min-[720px]:mt-8", 
    "min-[1280px]:items-center", "min-[1280px]:w-5/12", "min-[1280px]:mt-0", 
    "min-[1280px]:max-w-none","min-[1280px]:mx-0","min-[1280px]:mt-15"
  ].join(" "),
  
  sectionWrapper: [
    "flex", "flex-row", "items-center", 
    "w-full", 
    "mx-0", 
    "min-[720px]:w-full", 
    "min-[720px]:mx-0", 
    "min-[1280px]:w-full", 
    "min-[1280px]:mx-0" 
  ].join(" "),

  iconTitle: "text-accent font-semibold text-base sm:text-lg flex-shrink-0 w-32", 

  title: [
    "font-bold", "text-accent", "tracking-tight", "leading-tight",
    "text-2xl",
    "sm:text-4xl",
    "min-[720px]:text-6xl",
    "min-[1080px]:text-7xl",
    "min-[1280px]:text-8xl"
  ].join(" "),

  description: [
    "text-slate-400", "max-w-xl", "font-ms",
    "text-xs", "sm:text-base", "leading-tight"
  ].join(" ")
};

export default function Personal({ themes, themeSelected, handleThemeChangeByValue }) {
  return (
    <section className={styles.root}>
      <div className={styles.mainContent}>
        <div className={styles.avatarContainer}>
          <Avatar />
        </div>

        <div className={styles.infoContainer}>
          <h1 className={styles.title}>
            Mateo Liberatore
          </h1>
          <p className={styles.description}>
            I am Systems Analyist and Full Stack Developer, focused on transforming business vision into concrete and efficient 
            technological solutions. My profile combines the capacity of an analyst to diagnose needs and design robust architectures 
            with the technical skill of a Full Stack Developer to implement the solution end-to-end. My goal is to drive innovation by 
            delivering software products that are both highly functional and strategically aligned with business objectives.
          </p>
          <div className={styles.themeContainer}>
            <ThemeSelector
              themes={themes}
              selectedValue={themeSelected.value}
              onChangeByValue={handleThemeChangeByValue}
            />
          </div>
        </div>
      </div>
      
      <div className={styles.iconsContainer}>
        
        <div className={styles.sectionWrapper}>
          <p className={styles.iconTitle}>Frontend</p>
          <IconRow icons={["react", "javascript", "typescript", "tailwind", "css"]} />
        </div>
        
        <div className={styles.sectionWrapper}>
          <p className={styles.iconTitle}>Backend</p>
          <IconRow icons={["python", "node", "flask", "postgresql", "sqlite"]} />
        </div>
        
        <div className={styles.sectionWrapper}>
          <p className={styles.iconTitle}>Tools</p>
          <IconRow icons={["docker", "git", "linux"]} />
        </div>

      </div>
    </section>
  );
}