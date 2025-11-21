import React from "react";
import Personal from "./Personal";
import Carrousell from "./Carrousell";
import FooterContact from "./FooterContact";

const layout = {
  wrapper: "mx-auto max-w-[1600px] p-2 min-h-screen flex flex-col items-center",
  section: "section"
};

export default function Container({ themes, themeSelected, handleThemeChangeByValue }) {
  return (
    <div className={layout.wrapper}>
      <div className={layout.section}>
        <Personal
          themes={themes}
          themeSelected={themeSelected}
          handleThemeChangeByValue={handleThemeChangeByValue}
        />
      </div>

      <div className={layout.section}>
        <Carrousell />
      </div>

      <div className={layout.section}>
        <FooterContact />
      </div>
    </div>
  );
}