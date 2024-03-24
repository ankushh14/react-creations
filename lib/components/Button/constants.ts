export const variantOptions = {
  solid: "bg-blue-500 border-transparent hover:bg-blue-600 border-2",
  outline:
    "text-blue-600 border-blue-500 bg-transparent hover:bg-blue-100 border-2",
  ghost: "text-blue-600 bg-transparent hover:bg-transparent border-transparent",
  link: "text-blue-500 hover:text-blue-600 bg-transparent border-transparent underline hover:bg-transparent",
  disabled: "bg-blue-600 text-slate-300",
};

export const sizeOptions = {
  xs: "px-2 py-1 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
};

export const checkDisable = (value: string) => {
  if (value === "disabled") {
    return true;
  } else {
    return false;
  }
};

export const defaultButtonStyles = [
  "w-full",
  "rounded-md",
  sizeOptions["md"],
  variantOptions["solid"],
  "text-white",
  "font-semibold",
  "focus:outline-none",
  "disabled:cursor-not-allowed",
  "transition-colors duration-300",
];

export const colorOptions = {
  success: "bg-green-100 hover:bg-green-200 border-green-300",
  primary: "bg-blue-500 hover:bg-blue-600 border-blue-500",
  warning: "bg-orange-100 hover:bg-orange-200 border-orange-300",
  error: "bg-red-100 hover:bg-red-200 border-orange-300",
};
