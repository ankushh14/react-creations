import { CloseIcon } from "../../utils/Icons";
import { DefaultContentProps, DefaultHeaderProps } from "./types";

export const DefaultHeader = ({ onHide }: DefaultHeaderProps) => {
  return (
    <div className="w-full p-1 flex justify-end items-center">
      <div className="w-fit" onClick={onHide}>
        <CloseIcon />
      </div>
    </div>
  );
};

export const DefaultContent = ({ content }: DefaultContentProps) => {
  return (
    <div className="w-full">
      <p className="w-full whitespace-pre-wrap break-words">{content}</p>
    </div>
  );
};

export const DefaultFooter = () => {
  return <div className="w-full flex p-1"></div>;
};
