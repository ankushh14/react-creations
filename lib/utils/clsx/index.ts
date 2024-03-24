import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const classMerge = (...classnames: ClassValue[]) => {
  return twMerge(clsx(...classnames));
};
