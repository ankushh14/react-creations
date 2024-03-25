// import { useState } from "react";
import { classMerge } from "../../utils/clsx";
import { containerdiv, defaultProgress, defaultProgressBg } from "./constants";
import { ProgressBarTypes } from "./types";

export default function ProgressBar({
  value,
  label,
  color,
  // variant,
}: ProgressBarTypes) {
  return (
    <div className={classMerge(containerdiv)}>
      <div className={classMerge(defaultProgressBg)}>
        <div
          className={classMerge(defaultProgress)}
          style={{
            transform: `translateX(-${100 - value}%)`,
            backgroundColor: color,
          }}
        ></div>
      </div>
      {label && <div className="font-semibold text-xs w-7">{value}%</div>}
    </div>
  );
}
