import { MouseEvent, forwardRef, useEffect, useState } from "react";
import { classMerge } from "../../utils/clsx";
import "./Button.css";
import {
  checkDisable,
  // colorOptions,
  defaultButtonStyles,
  sizeOptions,
  variantOptions,
} from "./constants";
import { ButtonProps } from "./types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "solid",
      size = "md",
      // shade = "primary",
      className,
      onClick,
      children,
      ...args
    },
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
        setTimeout(() => setIsRippling(false), 300);
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
          "ripple-btn-effect",
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
            className="ripple"
            style={{
              left: coords.x,
              top: coords.y,
            }}
          />
        ) : (
          ""
        )}
        <span className="content">{children}</span>
      </button>
    );
  }
);

export default Button;
