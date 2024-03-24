import { useEffect } from "react";
import { BsX } from "react-icons/bs";
import { classMerge } from "../../utils/clsx";
import "./Toast.css";
import {
  additionalBarColor,
  colorOptions,
  defaultToast,
  getIcons,
} from "./constants";
import { ToastInstance } from "./state";
import { ToastBaseProps } from "./types";

export default function ToastBase({
  type,
  content,
  duration,
  id,
  setToasts,
}: ToastBaseProps) {
  const Icon = getIcons(type, 30);

  const removeToast = () => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
    ToastInstance.remove(id);
  };

  useEffect(() => {
    setTimeout(() => {
      removeToast();
    }, duration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={classMerge(defaultToast, colorOptions[type], "toast-right")}
    >
      <div className="w-full flex flex-row px-2 py-3">
        <div className="w-fit flex justify-center items-start">{Icon}</div>
        <div className="w-full px-2 text-center">{content}</div>
        <div
          className="w-fit flex justify-center items-start"
          onClick={removeToast}
        >
          <BsX size={25} className="cursor-pointer" />
        </div>
      </div>
      <div
        className={classMerge(
          "w-full rounded-t-lg py-[0.15rem]",
          additionalBarColor[type]
        )}
      ></div>
    </div>
  );
}
