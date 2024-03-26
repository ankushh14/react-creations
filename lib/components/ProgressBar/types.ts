import { ComponentPropsWithRef } from "react";

type variant = "determinate" | "indeterminate";

export type ProgressBarTypes = {
  value: number;
  bgColor: string;
  color: string;
  variant: variant;
  label: boolean;
};

export type ProgressBarProps = ComponentPropsWithRef<"div"> & ProgressBarTypes;
