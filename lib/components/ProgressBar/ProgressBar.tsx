import { classMerge } from "../../utils/clsx";
import styles from "./ProgressBar.module.css";
import { containerdiv, defaultProgress, defaultProgressBg } from "./constants";
import { ProgressBarTypes } from "./types";

export default function ProgressBar({
  value,
  label,
  bgColor,
  color,
  variant,
}: ProgressBarTypes) {
  return (
    <div className={classMerge(containerdiv)}>
      <div
        className={classMerge(defaultProgressBg)}
        style={{
          backgroundColor: bgColor,
        }}
      >
        {variant === "indeterminate" ? (
          <div
            className={classMerge(defaultProgress, styles["progress-ind"])}
            style={{
              backgroundColor: color,
            }}
          ></div>
        ) : (
          <div
            className={classMerge(defaultProgress)}
            style={{
              transform: `translateX(-${100 - value}%)`,
              backgroundColor: color,
            }}
          ></div>
        )}
      </div>
      {label && variant === "determinate" && (
        <div className="font-semibold text-xs w-7">{value}%</div>
      )}
    </div>
  );
}
