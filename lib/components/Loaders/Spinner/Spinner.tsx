import { classMerge } from "../../../utils/clsx";
import { defaultSpinnerStyles, sizeOptions } from "./constants";
import { SpinnerProps } from "./types";

export default function Spinner({ color, size = "base" }: SpinnerProps) {
  return (
    <div
      className={classMerge(defaultSpinnerStyles, sizeOptions[size])}
      style={{
        borderColor: color,
      }}
    ></div>
  );
}
