import { classMerge } from "../../../utils/clsx";
import { borderOptions, defaultSpinnerStyles, sizeOptions } from "./constants";
import { SpinnerProps } from "./types";

export default function Spinner({
  color,
  size = "base",
  borderSize = "xs",
}: SpinnerProps) {
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
    ></div>
  );
}
