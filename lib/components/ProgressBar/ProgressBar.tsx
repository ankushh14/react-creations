import { forwardRef, memo } from "react";
import { classMerge } from "../../utils/clsx";
import styles from "./ProgressBar.module.css";
import { containerdiv, defaultProgress, defaultProgressBg } from "./constants";
import { ProgressBarProps } from "./types";

const ProgressBar = memo(
  forwardRef<HTMLDivElement, ProgressBarProps>(
    (
      {
        bgColor,
        color,
        label = true,
        value = 50,
        variant = "determinate",
        className,
        ...args
      },
      ref
    ) => {
      return (
        <div
          className={classMerge(containerdiv, className)}
          ref={ref}
          {...args}
        >
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
          {label && variant !== "indeterminate" && (
            <div className="font-semibold text-xs w-7 text-inherit">
              {value < 0 ? 0 : value > 100 ? 100 : value}%
            </div>
          )}
        </div>
      );
    }
  )
);

export default ProgressBar;
