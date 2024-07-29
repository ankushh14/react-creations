import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    autoChange: false,
    changeIntervalInMilli: 2000,
    orderedPages: true,
    numOfVisible: 1,
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    autoChange: false,
    changeIntervalInMilli: 2000,
    orderedPages: true,
    numOfVisible: 1,
    orientation: "vertical",
  },
};

export const AutoChange: Story = {
  args: {
    autoChange: true,
    changeIntervalInMilli: 2000,
    orderedPages: true,
    numOfVisible: 1,
    orientation: "horizontal",
  },
};
