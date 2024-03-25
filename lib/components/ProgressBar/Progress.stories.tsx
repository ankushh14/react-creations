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

export const Solid: Story = {
  args: {
    value: 0,
    label: true,
    color: "#FF0000",
  },
};
