import { CloseIcon } from "../../utils/Icons";
import { DefaultContentProps, DefaultHeaderProps } from "./types";

export const DefaultHeader = ({ onHide }: DefaultHeaderProps) => {
  return (
    <div className="w-full p-2 flex justify-end items-center">
      <button
        className="w-fit bg-transparent border-none rounded-md"
        onClick={onHide}
        tabIndex={0}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export const DefaultContent = ({ content }: DefaultContentProps) => {
  return (
    <div className="w-full py-2 px-3">
      <p className="w-full whitespace-pre-wrap break-words">{content}</p>
    </div>
  );
};

export const DefaultFooter = () => {
  return <div className="w-full flex p-2"></div>;
};
