import { HTMLAttributes, createElement } from "react";
import sanitizeHtml from "sanitize-html";

type SanitizeHTMLProps = {
  children: string;
  tag: string;
} & HTMLAttributes<HTMLElement>;

const SanitizeHTML = ({ children, tag, ...props }: SanitizeHTMLProps) => {
  const sanitizedString = sanitizeHtml(children, {
    allowedTags: ["b", "i", "em", "strong"],
  });

  return createElement(tag, { ...props }, sanitizedString);
};

export default SanitizeHTML;
