import React from "react";
import { render } from "@testing-library/react";
import SanitizeHTML from "@/components/shared/SanitizeHTML/SanitizeHTML";

describe("SanitizeHTML Component", () => {
  it("renders sanitized HTML correctly", () => {
    const dirtyHTML =
      '<p>Paragraph</p><b>Bold Text</b> <i>Italic Text</i> <script>alert("XSS Attack!")</script> <strong>Strong Text</strong> <em>Emphasized Text</em>';
    const { container } = render(
      <SanitizeHTML tag="div">{dirtyHTML}</SanitizeHTML>
    );

    expect(container.querySelector("p")).toBeNull(); // <p> should be removed
    expect(container.querySelector("b")).toBeNull(); // <b> should be removed
    expect(container.querySelector("i")).toBeNull(); // <i> should be removed
    expect(container.querySelector("script")).toBeNull(); // <script> should be removed
    expect(container.querySelector("strong")).toBeNull(); // <strong> should be removed
    expect(container.querySelector("em")).toBeNull(); // <em> should be removed

    expect(container.textContent).toContain("Bold Text");
    expect(container.textContent).toContain("Italic Text");
    expect(container.textContent).toContain("Strong Text");
    expect(container.textContent).toContain("Emphasized Text");
    expect(container.textContent).not.toContain("XSS Attack!");
  });
});
