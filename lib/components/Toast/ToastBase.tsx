import { useEffect, useRef } from "react";
import { BsX } from "react-icons/bs";
import { classMerge } from "../../utils/clsx";
import styles from "./Toast.module.css";
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
  const toastRef = useRef<HTMLDivElement>(null);

  const removeToast = () => {
    if (toastRef.current) {
      toastRef.current.classList.add(styles["toastOut-right"]);
    }
    setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
      ToastInstance.remove(id);
    }, 250);
  };

  useEffect(() => {
    setTimeout(() => {
      removeToast();
    }, duration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={classMerge(
        defaultToast,
        colorOptions[type],
        styles["toast-right"]
      )}
      ref={toastRef}
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
