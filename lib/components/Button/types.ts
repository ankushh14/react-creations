import { ComponentProps } from "react";

type CustomProps = {
  variant: "solid" | "outline" | "ghost" | "link" | "disabled";
  size: "xs" | "sm" | "md" | "lg" | "xl";
  // shade: "success" | "primary" | "warning" | "error";
};

export type ButtonProps = ComponentProps<"button"> & CustomProps;
