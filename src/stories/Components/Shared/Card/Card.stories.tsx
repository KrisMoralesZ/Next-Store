import { Card } from "@/components/shared/Card";

const meta = {
  title: "Components/Shared/Card",
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: "text" },
    image: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;

type Story = {
  args: {
    title?: string;
    image?: string;
    description?: string;
  };
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: "Sample Card Title",
    image:
      "https://img.freepik.com/free-photo/portrait-beautiful-purebred-pussycat-with-shorthair-orange-collar-neck-sitting-floor-reacting-camera-flash-scared-looking-light-indoor_8353-12551.jpg?semt=ais_hybrid&w=740&q=80",
    description: "This is a sample description for the card component.",
  },
};

export const NoImage: Story = {
  args: {
    title: "Card Without Image",
    description: "This card does not have an image.",
  },
};
