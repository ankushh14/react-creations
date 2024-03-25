import React from "react";

export type Toaster = {
  position:
    | "top-left"
    | "top-center"
    | "top-right"
    | "center"
    | "left-center"
    | "right-center"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
};

export type ToastTypes = {
  id: number;
  type: "success" | "information" | "warning" | "error" | "plain" | "contrast";
  content: string;
  duration: number;
};

export type ToastFunctionProps = {
  type: "success" | "information" | "warning" | "error" | "plain" | "contrast";
  content: string;
  duration: number;
};

export type ToastBaseProps = {
  id: number;
  type: "success" | "information" | "warning" | "error" | "plain" | "contrast";
  content: string;
  duration: number;
  setToasts: React.Dispatch<React.SetStateAction<ToastTypes[]>>;
  position:
    | "top-left"
    | "top-center"
    | "top-right"
    | "center"
    | "left-center"
    | "right-center"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
};
