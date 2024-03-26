import type { Meta, StoryObj } from "@storybook/react";
import Spinner from ".";

const meta: Meta<typeof Spinner> = {
  title: "Components/Loaders/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IndeterminateSpinner: Story = {
  args: {
    color: "#4ca2f8",
  },
};
