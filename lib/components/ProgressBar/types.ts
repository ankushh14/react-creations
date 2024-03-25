type variant = "determinate" | "indeterminate";

export type ProgressBarTypes = {
  value: number;
  bgColor: string;
  color: string;
  variant: variant;
  label: boolean;
};
