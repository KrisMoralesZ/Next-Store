import { SanitizeHTML } from "@/components/shared/SanitizeHTML";

const meta = {
  title: "Components/Shared/SanitizeHTML",
  component: SanitizeHTML,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = {
  args: {
    tag: string;
    children: string;
  };
};

export const Default: Story = {
  args: {
    tag: "div",
    children:
      '<p>Paragraph</p><b>Bold Text</b> <i>Italic Text</i> <script>alert("XSS Attack!")</script> <strong>Strong Text</strong> <em>Emphasized Text</em>',
  },
};
