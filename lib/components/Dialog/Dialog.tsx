import { memo, useEffect, useRef } from "react";
import { classMerge } from "../../utils/clsx";
import styles from "./Dialog.module.css";
import { DefaultContent, DefaultFooter, DefaultHeader } from "./DialogBase";
import {
  defaultContainerStyles,
  defaultContentPara,
  defaultDialogStyles,
} from "./constants";
import { DialogProps } from "./types";

const Dialog = memo(
  ({
    visible = false,
    content = defaultContentPara,
    Footer = null,
    Header = null,
    onHide = () => {},
    headless = false,
    CustomUI = null,
    closeOnEscape,
  }: DialogProps) => {
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const ReturnRef = useRef<HTMLElement | null>(null);

    const createHeader = () => {
      if (Header) {
        return Header;
      } else {
        return DefaultHeader;
      }
    };

    const createFooter = () => {
      if (Footer) {
        return Footer;
      } else {
        return DefaultFooter;
      }
    };

    const createCustomUI = () => {
      if (CustomUI) {
        return CustomUI;
      } else {
        return () => <></>;
      }
    };

    const CustomHeader = createHeader();
    const CustomFooter = createFooter();
    const UserUI = createCustomUI();

    const closeDialog = () => {
      if (dialogRef) {
        dialogRef.current?.classList.add(styles["dialog-out"]);
      }
      setTimeout(() => {
        dialogRef.current?.classList.remove(styles["dialog-out"]);
        onHide();
      }, 300);
    };

    const handleBackgroundClick = () => {
      closeDialog();
    };

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    };

    const handleCloseOnKeys = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (closeOnEscape) {
        if (e.key === "Escape") {
          closeDialog();
        }
      } else {
        return;
      }
    };

    useEffect(() => {
      if (document.activeElement instanceof HTMLElement) {
        ReturnRef.current = document.activeElement as HTMLElement;
      }
      const trapFocus = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          const focusableElements = dialogRef.current?.querySelectorAll(
            "a[href], button, textarea, input, select, div[tabIndex] "
          ) as NodeListOf<HTMLElement>;
          if (!focusableElements || focusableElements.length === 0) return;
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };
      if (visible) {
        dialogRef.current?.focus();
      }
      document.addEventListener("keydown", trapFocus);
      return () => {
        document.removeEventListener("keydown", trapFocus);
        ReturnRef.current?.focus();
      };
    }, [visible]);

    return (
      visible && (
        <div
          className={classMerge(defaultContainerStyles)}
          role="dialog"
          aria-modal={visible}
          aria-live="polite"
          aria-atomic
          onClick={handleBackgroundClick}
          onKeyDown={handleCloseOnKeys}
        >
          <div
            className={classMerge(defaultDialogStyles, styles["dialog-in"])}
            ref={dialogRef}
            onClick={handleModalClick}
            tabIndex={0}
          >
            {headless ? (
              <UserUI />
            ) : (
              <div className="max-w-[600px]">
                <CustomHeader onHide={closeDialog} />
                <DefaultContent content={content} />
                <CustomFooter />
              </div>
            )}
          </div>
        </div>
      )
    );
  }
);

export default Dialog;
