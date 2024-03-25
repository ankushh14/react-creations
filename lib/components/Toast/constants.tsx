import {
  BsCheck2Circle,
  BsExclamationCircle,
  BsExclamationTriangle,
  BsXCircle,
} from "react-icons/bs";

export const positionOptions = {
  "top-left": "top-1 left-1",
  "top-right": "top-1 right-1",
  "top-center": "top-1 left-1/2 -translate-x-1/2",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "left-center": "left-1 top-1/2 -translate-y-1/2",
  "right-center": "right-1 top-1/2 -translate-y-1/2",
  "bottom-left": "left-1 bottom-1",
  "bottom-center": "bottom-1 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-1 right-1",
};

export const defaultToast = [
  "w-full",
  "md:w-[400px]",
  "flex",
  "flex-col",
  "rounded-md",
  "justify-center",
  "items-center",
  "shadow-sm",
  "shadow-slate-500",
  "my-4",
  "transition-transform",
  "duration-700",
  "overflow-hidden",
];

export const defaultToastList = [
  "w-full",
  "max-w-[400px]",
  "h-fit",
  "max-h-screen",
  "overflow-hidden",
  "fixed",
  "z-[9999999999]",
  "pointer-events-auto",
];

export const getIcons = (value: string, size: number) => {
  if (value === "success") {
    return <BsCheck2Circle size={size} />;
  } else if (value === "warning") {
    return <BsExclamationTriangle size={size} />;
  } else if (value === "error") {
    return <BsXCircle size={size} />;
  } else {
    return <BsExclamationCircle size={size} />;
  }
};

export const colorOptions = {
  success: "bg-green-100 text-green-600",
  information: "bg-blue-100 text-blue-500",
  warning: "bg-orange-100 text-orange-500",
  error: "bg-red-100 text-red-500",
  plain: "bg-white text-black",
  contrast: "bg-[#121212] text-white",
};

export const additionalBarColor = {
  success: "bg-green-500",
  information: "bg-blue-500",
  warning: "bg-orange-500",
  error: "bg-red-500",
  plain: "bg-[#121212]",
  contrast: "bg-white",
};
