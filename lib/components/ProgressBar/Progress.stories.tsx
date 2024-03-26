import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from ".";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DeterminateWithLabel: Story = {
  args: {
    value: 0,
    label: true,
    color: "#4ca2f8",
    bgColor: "#d1b8b8",
    variant: "determinate",
  },
};

export const DeterminateWithoutLabel: Story = {
  args: {
    value: 0,
    label: false,
    color: "#4ca2f8",
    bgColor: "#d1b8b8",
    variant: "determinate",
  },
};

export const Indeterminate: Story = {
  args: {
    value: 0,
    label: false,
    color: "#4ca2f8",
    bgColor: "#d1b8b8",
    variant: "indeterminate",
  },
};
