import React from "react";

export type DialogProps = {
  visible: boolean;
  content: string;
  Header: React.ComponentType | null;
  Footer: React.ComponentType | null;
  headless: boolean;
  CustomUI: React.ComponentType | null;
  onHide: () => void;
};

export type DefaultContentProps = {
  content: string;
};

export type DefaultHeaderProps = {
  onHide: () => void;
};
