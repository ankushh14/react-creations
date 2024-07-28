import { ComponentProps, FunctionComponent } from "react";

type CustomProps = {
  autoChange?: boolean;
  childTemplate: () => React.ReactNode;
  numOfVisible?: number;
  value: object[];
  changeIntervalInMilli: number;
};

export type CarouselItemProps = {
  template: FunctionComponent;
  item: object;
  itemId: string;
};

export type CarouselProps = ComponentProps<"div"> & CustomProps;
