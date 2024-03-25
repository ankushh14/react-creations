type variant = "determinate" | "indeterminate";

export type ProgressBarTypes = {
  value: number;
  color: string;
  variant: variant;
  label: boolean;
};
