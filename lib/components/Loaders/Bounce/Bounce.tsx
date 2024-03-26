import { classMerge } from "../../../utils/clsx";
import {
  defaultBounceStyles,
  defaultContainerStyles,
  sizeOptions,
} from "./constants";
import { BounceProps } from "./types";

export default function Bounce({ color, size = "base" }: BounceProps) {
  const commonStyles = {
    backgroundColor: color,
  };

  return (
    <div className={classMerge(defaultContainerStyles)}>
      <span
        className={classMerge(defaultBounceStyles, sizeOptions[size])}
        style={commonStyles}
      ></span>
      <span
        className={classMerge(
          defaultBounceStyles,
          "[animation-delay:-.5s]",
          sizeOptions[size]
        )}
        style={commonStyles}
      ></span>
      <span
        className={classMerge(
          defaultBounceStyles,
          "[animation-delay:-.7s]",
          sizeOptions[size]
        )}
        style={commonStyles}
      ></span>
    </div>
  );
}
