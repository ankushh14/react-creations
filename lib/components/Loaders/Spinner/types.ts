import React from "react";

type Props = {
  color: string;
  size: "xxs" | "xs" | "sm" | "md" | "base" | "lg" | "xl" | "custom";
  borderSize: "xs" | "sm";
};

export type SpinnerProps = Props & React.ComponentProps<"div">;
