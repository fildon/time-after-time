import { Classic12 } from "./classic12";

it("creates a Classic 12 hour clock", () => {
  expect(
Classic12({
  getMilliseconds: () => 0,
  getSeconds: () => 0,
  getMinutes: () => 0,
  getHours: () => 0,
  getDay: () => 0 })).

toMatchInlineSnapshot(`
<article>
  <h2>
    12 hour clock face
  </h2>
  <svg
    viewBox="-100 -100 200 200"
  >
    <circle
      cx="0"
      cy="0"
      fill="transparent"
      r="95"
      stroke="black"
      stroke-width="5"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="0"
      x2="0"
      y1="-95"
      y2="-90"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="47.49999999999999"
      x2="44.99999999999999"
      y1="-82.27241335952168"
      y2="-77.94228634059948"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="82.27241335952166"
      x2="77.94228634059948"
      y1="-47.50000000000001"
      y2="-45.00000000000001"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="95"
      x2="90"
      y1="-5.8170722959499274e-15"
      y2="-5.5109105961630896e-15"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="82.27241335952168"
      x2="77.94228634059948"
      y1="47.49999999999998"
      y2="44.99999999999998"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="47.49999999999999"
      x2="44.99999999999999"
      y1="82.27241335952168"
      y2="77.94228634059948"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="1.1634144591899855e-14"
      x2="1.1021821192326179e-14"
      y1="95"
      y2="90"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-47.50000000000001"
      x2="-45.00000000000001"
      y1="82.27241335952166"
      y2="77.94228634059948"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-82.27241335952165"
      x2="-77.94228634059947"
      y1="47.50000000000004"
      y2="45.00000000000004"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-95"
      x2="-90"
      y1="1.745121688784978e-14"
      y2="1.6532731788489267e-14"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-82.27241335952166"
      x2="-77.94228634059948"
      y1="-47.50000000000001"
      y2="-45.00000000000001"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-47.50000000000004"
      x2="-45.00000000000004"
      y1="-82.27241335952165"
      y2="-77.94228634059945"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="0"
      x2="0"
      y1="0"
      y2="-60"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="0 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="0"
      x2="0"
      y1="0"
      y2="-80"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60min"
        from="0 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="3"
      x1="0"
      x2="0"
      y1="0"
      y2="-80"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="0 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
  </svg>
</article>
`);
});
