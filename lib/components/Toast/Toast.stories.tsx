import type { Meta, StoryObj } from "@storybook/react";
import ToastBase from "./ToastBase";

const meta: Meta<typeof ToastBase> = {
  title: "Components/Toast",
  component: ToastBase,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: "success",
    content: "This is a toast message.",
  },
};
export const Information: Story = {
  args: {
    type: "information",
    content: "This is a toast message.",
  },
};
export const Warning: Story = {
  args: {
    type: "warning",
    content: "This is a toast message.",
  },
};
export const Error: Story = {
  args: {
    type: "error",
    content: "This is a toast message.",
  },
};
