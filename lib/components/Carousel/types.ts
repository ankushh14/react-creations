import {
  ComponentProps,
  Dispatch,
  FunctionComponent,
  SetStateAction,
} from "react";

type CustomProps = {
  autoChange?: boolean;
  childTemplate: () => React.ReactNode;
  numOfVisible?: number;
  value: object[];
  changeIntervalInMilli: number;
  orderedPages: boolean;
};

export type CarouselItemProps = {
  template: FunctionComponent;
  item: object;
  itemId: string;
};

export type IndicatorProps = {
  index: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export type CarouselProps = ComponentProps<"div"> & CustomProps;
