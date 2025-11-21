import React from "react";

const styles = {
  wrapper: ["flex", "items-center", "gap-3"].join(" "),
  btnBase: "rounded-full transition-all duration-200 ease-in-out",
  size: [
    "w-6 h-6", 
    "sm:w-7 sm:h-7", 
    "min-[720px]:w-8 min-[720px]:h-8"
  ].join(" ")
};

export default function ThemeSelector({ themes, selectedValue, onChangeByValue }) {
  return (
    <div className={styles.wrapper}>
      {themes.map((theme) => {
        const isSelected = theme.value === selectedValue;
        const classes = [
          styles.btnBase, 
          styles.size, 
          isSelected ? "ring-2 ring-offset-2 ring-offset-[#0f1720]" : "border border-white/10 opacity-70 hover:opacity-100 hover:scale-110"
        ].join(" ");
        
        return (
          <button
            key={theme.value}
            data-value={theme.value}
            onClick={() => onChangeByValue(theme.value)}
            title={theme.name}
            style={{ backgroundColor: theme.color }}
            className={classes}
            aria-pressed={isSelected}
          />
        );
      })}
    </div>
  );
}