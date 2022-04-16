import { Classic24 } from "./classic24";

it("creates a Classic 24 hour clock face", () => {
  expect(
Classic24({
  getMilliseconds: () => 0,
  getSeconds: () => 0,
  getMinutes: () => 0,
  getHours: () => 0,
  getDay: () => 0 })).

toMatchInlineSnapshot(`
<article>
  <h2>
    24 hour clock face
  </h2>
  <p>
    
        The usual 12 radial markers are displayed in large.
        An additional 12 smaller blue markers are interleaved providing 24 markers, one for each hour of the day.
        The hour hand (displayed in blue) moves only a half as fast as on a conventional 12 hour clock face.
        It completes one rotation only once per full day.
      
  </p>
  <svg
    viewBox="-100 -100 200 200"
  >
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="0"
      x2="0"
      y1="-95"
      y2="-85"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="5"
      x1="24.58780928473947"
      x2="23.293714059226865"
      y1="-91.7629534974615"
      y2="-86.93332436601615"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="47.49999999999999"
      x2="42.49999999999999"
      y1="-82.27241335952168"
      y2="-73.6121593216773"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="5"
      x1="67.175144212722"
      x2="63.63961030678927"
      y1="-67.17514421272202"
      y2="-63.63961030678928"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="82.27241335952166"
      x2="73.61215932167728"
      y1="-47.50000000000001"
      y2="-42.50000000000001"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="5"
      x1="91.7629534974615"
      x2="86.93332436601615"
      y1="-24.58780928473947"
      y2="-23.293714059226865"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="95"
      x2="85"
      y1="-5.8170722959499274e-15"
      y2="-5.204748896376251e-15"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="5"
      x1="91.7629534974615"
      x2="86.93332436601615"
      y1="24.587809284739482"
      y2="23.293714059226875"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="82.27241335952168"
      x2="73.6121593216773"
      y1="47.49999999999998"
      y2="42.49999999999998"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="5"
      x1="67.17514421272202"
      x2="63.63961030678928"
      y1="67.175144212722"
      y2="63.63961030678927"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="47.49999999999999"
      x2="42.49999999999999"
      y1="82.27241335952168"
      y2="73.6121593216773"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="5"
      x1="24.587809284739496"
      x2="23.293714059226893"
      y1="91.76295349746148"
      y2="86.93332436601614"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="1.1634144591899855e-14"
      x2="1.0409497792752502e-14"
      y1="95"
      y2="85"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="5"
      x1="-24.587809284739432"
      x2="-23.293714059226833"
      y1="91.7629534974615"
      y2="86.93332436601615"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-47.50000000000001"
      x2="-42.50000000000001"
      y1="82.27241335952166"
      y2="73.61215932167728"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="5"
      x1="-67.175144212722"
      x2="-63.63961030678927"
      y1="67.17514421272203"
      y2="63.639610306789294"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-82.27241335952165"
      x2="-73.61215932167727"
      y1="47.50000000000004"
      y2="42.500000000000036"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="5"
      x1="-91.7629534974615"
      x2="-86.93332436601615"
      y1="24.58780928473946"
      y2="23.293714059226858"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-95"
      x2="-85"
      y1="1.745121688784978e-14"
      y2="1.5614246689128753e-14"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="5"
      x1="-91.7629534974615"
      x2="-86.93332436601615"
      y1="-24.58780928473943"
      y2="-23.293714059226826"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-82.27241335952166"
      x2="-73.61215932167728"
      y1="-47.50000000000001"
      y2="-42.50000000000001"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="5"
      x1="-67.17514421272203"
      x2="-63.639610306789294"
      y1="-67.175144212722"
      y2="-63.63961030678926"
    />
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-47.50000000000004"
      x2="-42.500000000000036"
      y1="-82.27241335952165"
      y2="-73.61215932167727"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="5"
      x1="-24.587809284739464"
      x2="-23.29371405922686"
      y1="-91.7629534974615"
      y2="-86.93332436601615"
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
      stroke="blue"
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
        dur="24h"
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