import { useRef } from "react";
import { classMerge } from "../../utils/clsx";
import styles from "./Dialog.module.css";
import { DefaultContent, DefaultFooter, DefaultHeader } from "./DialogBase";
import {
  defaultContainerStyles,
  defaultContentPara,
  defaultDialogStyles,
} from "./constants";
import { DialogProps } from "./types";

const Dialog = ({
  visible = false,
  content = defaultContentPara,
  Footer = null,
  Header = null,
  onHide = () => {},
  headless = false,
  CustomUI = null,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);

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

  return (
    visible && (
      <div className={classMerge(defaultContainerStyles)}>
        <div
          className={classMerge(defaultDialogStyles, styles["dialog-in"])}
          ref={dialogRef}
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
};

export default Dialog;
