import { Day7 } from "./day7";

it("creates 7 day clock face", () => {
  expect(
Day7({
  getMilliseconds: () => 0,
  getSeconds: () => 0,
  getMinutes: () => 0,
  getHours: () => 0,
  getDay: () => 0 })).

toMatchInlineSnapshot(`
<article>
  <h2>
    7 day clock face
  </h2>
  <p>
    
        There are 7 days in a week.
        The day hand (displayed in green) treats the midnight between Saturday and Sunday as the start of the week.
        It completes a full rotation exactly once per week.
        Each radial marker represents one day.
      
  </p>
  <svg
    viewBox="-100 -100 200 200"
  >
    <line
      stroke="green"
      stroke-linecap="round"
      stroke-width="5"
      x1="0"
      x2="0"
      y1="-95"
      y2="-90"
    />
    <line
      stroke="green"
      stroke-linecap="round"
      stroke-width="5"
      x1="74.27399083446284"
      x2="70.36483342212269"
      y1="-59.23153117657969"
      y2="-56.11408216728602"
    />
    <line
      stroke="green"
      stroke-linecap="round"
      stroke-width="5"
      x1="92.61815165727324"
      x2="87.74351209636413"
      y1="21.139488725849862"
      y2="20.02688405606829"
    />
    <line
      stroke="green"
      stroke-linecap="round"
      stroke-width="5"
      x1="41.218955216168034"
      x2="39.04953652058024"
      y1="85.5920424507298"
      y2="81.08719811121772"
    />
    <line
      stroke="green"
      stroke-linecap="round"
      stroke-width="5"
      x1="-41.21895521616801"
      x2="-39.04953652058022"
      y1="85.59204245072982"
      y2="81.08719811121772"
    />
    <line
      stroke="green"
      stroke-linecap="round"
      stroke-width="5"
      x1="-92.61815165727324"
      x2="-87.74351209636413"
      y1="21.139488725849887"
      y2="20.02688405606831"
    />
    <line
      stroke="green"
      stroke-linecap="round"
      stroke-width="5"
      x1="-74.27399083446284"
      x2="-70.36483342212269"
      y1="-59.23153117657967"
      y2="-56.114082167286"
    />
    <circle
      cx="0"
      cy="0"
      fill="transparent"
      r="95"
      stroke="black"
      stroke-width="5"
    />
    <line
      stroke="green"
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
        dur="168h"
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
