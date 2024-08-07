import { forwardRef, useCallback, useEffect, useState } from "react";
import { classMerge } from "../../utils/clsx";
import ToastBase from "./ToastBase";
import { defaultToastList, positionOptions } from "./constants";
import { ToastInstance } from "./state";
import { ToastTypes, Toaster } from "./types";

const Toast = forwardRef<HTMLDivElement, Toaster>(
  ({ position = "top-right" }, ref) => {
    const [toasts, setToasts] = useState<ToastTypes[]>([]);

    const getData = useCallback(
      (data: ToastTypes[]) => {
        if (position.includes("bottom")) {
          setToasts(data);
        } else {
          setToasts(data.reverse());
        }
      },
      [position]
    );

    useEffect(() => {
      ToastInstance.subscribe(getData);

      return () => {
        ToastInstance.unsubscribe(getData);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div
        className={classMerge(defaultToastList, positionOptions[position])}
        ref={ref}
        role="alert"
        aria-live="assertive"
      >
        {toasts.length > 0 &&
          toasts.map((value) => {
            return (
              <ToastBase
                key={value.id}
                content={value.content}
                duration={value.duration}
                type={value.type}
                id={value.id}
                setToasts={setToasts}
                position={position}
              />
            );
          })}
      </div>
    );
  }
);

export default Toast;
