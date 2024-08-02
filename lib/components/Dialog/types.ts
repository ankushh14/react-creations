import React from "react";

export type DialogProps = {
  visible: boolean;
  content?: React.ReactNode;
  Header?: React.ComponentType | null;
  Footer?: React.ComponentType | null;
  headless?: boolean;
  CustomUI?: React.ComponentType | null;
  onHide: () => void;
  closeOnEscape?: boolean;
};

export type DefaultContentProps = {
  content: React.ReactNode;
};

export type DefaultHeaderProps = {
  onHide: () => void;
};
