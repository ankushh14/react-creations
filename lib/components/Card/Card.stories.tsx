import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";
import Button from "../Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    width: 300,
    title: "This is title",
    subtitle: "This is subtitle",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione illo reiciendis qui, autem magnam earum adipisci obcaecati eos aut?",
  },
};

export const Advanced: Story = {
  args: {
    width: 300,
    title: "This is title",
    subtitle: "This is subtitle",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione illo reiciendis qui, autem magnam earum adipisci obcaecati eos aut?",
    withImage: true,
    imageSrc:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Example image",
    footer: (
      <div className="w-full p-4 pt-0">
        <Button size="sm" variant="solid">
          Explore
        </Button>
      </div>
    ),
  },
};
