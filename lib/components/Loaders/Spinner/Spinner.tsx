import React from "react";
import { classMerge } from "../../../utils/clsx";
import { borderOptions, defaultSpinnerStyles, sizeOptions } from "./constants";
import { SpinnerProps } from "./types";

const Spinner = React.memo(
  ({ color, size = "base", borderSize = "xs", ...args }: SpinnerProps) => {
    return (
      <div
        className={classMerge(
          defaultSpinnerStyles,
          sizeOptions[size],
          borderOptions[borderSize]
        )}
        style={{
          borderColor: color,
        }}
        {...args}
      ></div>
    );
  }
);

export default Spinner;
