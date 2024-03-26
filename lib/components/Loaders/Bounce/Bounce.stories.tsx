import type { Meta, StoryObj } from "@storybook/react";
import Bounce from ".";

const meta: Meta<typeof Bounce> = {
  title: "Components/Loaders/Bounce",
  component: Bounce,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IndeterminateBounce: Story = {
  args: {
    color: "#4ca2f8",
  },
};
