/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps, Dispatch, SetStateAction } from "react";

type CustomProps = {
  autoChange?: boolean;
  childTemplate: (value: any) => React.ReactNode;
  numOfVisible?: number;
  value: any[];
  changeIntervalInMilli: number;
  orderedPages: boolean;
  orientation: "horizontal" | "vertical";
};

export type CarouselItemProps = {
  template: (value: any) => React.ReactNode;
  item: any;
  itemId: string;
};

export type IndicatorProps = {
  index: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setIndex: Dispatch<SetStateAction<number>>;
  numOfVisible: number;
};

export type CarouselProps = ComponentProps<"div"> & CustomProps;
