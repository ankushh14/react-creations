import Card from "../Card";

export function defaultTemplate(item: {
  title: string;
  description: string;
}): React.ReactNode {
  return (
    <Card
      width={300}
      imageSrc={
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      withImage
      title={item.title}
    >
      {item.description}
    </Card>
  );
}

export const defaultValues = [
  {
    title: "This is first element",
    description: "Hey first element",
  },
  {
    title: "This is second element",
    description: "Hey second element",
  },
  {
    title: "This is third element",
    description: "Hey third element",
  },
  {
    title: "This is Fourth element",
    description: "Hey third element",
  },
  {
    title: "This is Fifth element",
    description: "Hey third element",
  },
  {
    title: "This is Sixth element",
    description: "Hey third element",
  },
];
