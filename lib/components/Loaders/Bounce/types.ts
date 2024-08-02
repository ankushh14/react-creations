import React from "react";

type Props = {
  color: string;
  size: "xs" | "sm" | "md" | "base" | "lg" | "xl";
};

export type BounceProps = Props & React.ComponentProps<"div">;
