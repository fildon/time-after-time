import { Circle, Group, Line, Rectangle, RotationAnimation, SVG } from "./svg";

describe("SVG utils", () => {
  describe("SVG", () => {
    it("creates an <svg> with sensible defaults", () => {
      expect(SVG(Line())).toMatchInlineSnapshot(`
<svg
  viewBox="-100 -100 200 200"
>
  <line
    stroke="black"
    stroke-linecap="round"
    stroke-width="5"
    x1="0"
    x2="0"
    y1="0"
    y2="0"
  />
</svg>
`);
    });
  });

  describe("Group", () => {
    it("creates a <g> with sensible defaults", () => {
      expect(Group(Circle())).toMatchInlineSnapshot(`
<g>
  <circle
    cx="0"
    cy="0"
    fill="transparent"
    r="95"
    stroke="black"
    stroke-width="5"
  />
</g>
`);
    });
  });

  describe("Line", () => {
    it("creates a <line> with sensible defaults", () => {
      expect(Line()).toMatchInlineSnapshot(`
<line
  stroke="black"
  stroke-linecap="round"
  stroke-width="5"
  x1="0"
  x2="0"
  y1="0"
  y2="0"
/>
`);
    });

    it("supports animation as children", () => {
      expect(
Line({
  children: [RotationAnimation({ startOffset: 0, duration: "1s" })] })).

toMatchInlineSnapshot(`
<line
  stroke="black"
  stroke-linecap="round"
  stroke-width="5"
  x1="0"
  x2="0"
  y1="0"
  y2="0"
>
  <animatetransform
    attributeName="transform"
    attributeType="XML"
    dur="1s"
    from="0 0 0"
    repeatCount="indefinite"
    to="360 0 0"
    type="rotate"
  />
</line>
`);
    });
  });

  describe("Circle", () => {
    it("creates a <circle> with sensible defaults", () => {
      expect(Circle()).toMatchInlineSnapshot(`
<circle
  cx="0"
  cy="0"
  fill="transparent"
  r="95"
  stroke="black"
  stroke-width="5"
/>
`);
    });
  });

  describe("Rectangle", () => {
    it("creates a <rect> with sensible defaults", () => {
      expect(Rectangle()).toMatchInlineSnapshot(`
<rect
  fill="transparent"
  height="50"
  stroke="black"
  stroke-width="2"
  width="100"
  x="-90"
  y="10"
/>
`);
    });
  });

  describe("RotationAnimation", () => {
    it("creates an <animateTransform> of type 'rotate'", () => {
      expect(RotationAnimation({ startOffset: 0, duration: "1s" }))
        .toMatchInlineSnapshot(`
<animatetransform
  attributeName="transform"
  attributeType="XML"
  dur="1s"
  from="0 0 0"
  repeatCount="indefinite"
  to="360 0 0"
  type="rotate"
/>
`);
    });
  });
});
