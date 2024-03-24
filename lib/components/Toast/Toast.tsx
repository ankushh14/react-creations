import { forwardRef, useEffect, useState } from "react";
import { classMerge } from "../../utils/clsx";
import ToastBase from "./ToastBase";
import { defaultToastList, positionOptions } from "./constants";
import { ToastInstance } from "./state";
import { ToastTypes, Toaster } from "./types";

const Toast = forwardRef<HTMLDivElement, Toaster>(
  ({ position = "top-right" }, ref) => {
    const [toasts, setToasts] = useState<ToastTypes[]>([]);

    useEffect(() => {
      ToastInstance.subscribe((data) => {
        setToasts(data);
      });

      return () => {
        ToastInstance.unsubscribe((data) => {
          setToasts(data);
        });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div
        className={classMerge(defaultToastList, positionOptions[position])}
        ref={ref}
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
              />
            );
          })}
      </div>
    );
  }
);

export default Toast;
