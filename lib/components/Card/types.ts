import { ComponentProps, ReactNode } from "react";

type CustomProps = {
  width?: number;
  height?: number;
  header?: ReactNode;
  footer?: ReactNode;
  title?: string;
  subtitle?: string;
  withImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
};

export type CardProps = ComponentProps<"div"> & CustomProps;
