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
  position = "top-right",
}: ToastBaseProps) {
  const Icon = getIcons(type, 30);
  const toastRef = useRef<HTMLDivElement>(null);

  const removeToast = () => {
    if (toastRef.current) {
      if (position.includes("left")) {
        toastRef.current.classList.add(styles["toastOut-left"]);
      } else if (position === "center") {
        toastRef.current.classList.add(styles["toast-center-out"]);
      } else if (position === "bottom-center") {
        toastRef.current.classList.add(styles["toastOut-up"]);
      } else if (position === "top-center") {
        toastRef.current.classList.add(styles["toastOut-down"]);
      } else {
        toastRef.current.classList.add(styles["toastOut-right"]);
      }
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
        `${position.includes("left") && position !== "center" && position !== "top-center" && position !== "bottom-center" ? styles["toast-left"] : styles["toast-right"]}`,
        `${position === "center" && styles["toast-center"]}`,
        `${position === "top-center" && styles["toast-down"]}`,
        `${position === "bottom-center" && styles["toast-up"]}`
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
          additionalBarColor[type],
          styles["toast-load"]
        )}
        style={{
          animationDuration: `${duration}ms`,
        }}
      ></div>
    </div>
  );
}
