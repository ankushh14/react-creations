import { MouseEvent, forwardRef, memo, useEffect, useState } from "react";
import { classMerge } from "../../utils/clsx";
import styles from "./Button.module.css";
import {
  checkDisable,
  // colorOptions,
  defaultButtonStyles,
  sizeOptions,
  variantOptions,
} from "./constants";
import { ButtonProps } from "./types";

const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      { variant = "solid", size = "md", className, onClick, children, ...args },
      ref
    ) => {
      const [coords, setCoords] = useState({ x: -1, y: -1 });
      const [isRippling, setIsRippling] = useState(false);

      useEffect(() => {
        if (
          coords.x !== -1 &&
          coords.y !== -1 &&
          (variant === "solid" || variant === "outline")
        ) {
          setIsRippling(true);
          setTimeout(() => setIsRippling(false), 500);
        } else setIsRippling(false);
      }, [coords, variant]);

      useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
      }, [isRippling]);

      return (
        <button
          ref={ref}
          {...args}
          className={classMerge(
            defaultButtonStyles,
            variantOptions[variant],
            sizeOptions[size],
            // colorOptions[shade],
            styles["ripple-btn-effect"],
            className
          )}
          disabled={checkDisable(variant)}
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            onClick && onClick(e);
          }}
        >
          {isRippling ? (
            <span
              className={styles.ripple}
              style={{
                left: coords.x,
                top: coords.y,
              }}
            />
          ) : (
            ""
          )}
          <span className={styles.content}>{children}</span>
        </button>
      );
    }
  )
);

export default Button;
