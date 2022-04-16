import { ConcentricRings } from "./concentricRings";

it("creates a concentric rings animation", () => {
  expect(
ConcentricRings({
  getMilliseconds: () => 0,
  getSeconds: () => 0,
  getMinutes: () => 0,
  getHours: () => 0,
  getDay: () => 0 })).

toMatchInlineSnapshot(`
<article>
  <h2>
    Concentric Rings
  </h2>
  <p>
    
        Concentric rings rotate anticlockwise around a common centre.
        The outer most ring rotates once every 12 hours.
        The middle ring once every hour.
        The innermost ring once every minute.
        Red markers correspond to the zero on each ring.
        A static blue hand marks the vertical.
        The static hand can be thought of as moving relatively clockwise compared to the faces.
      
  </p>
  <svg
    viewBox="-100 -100 200 200"
  >
    <line
      stroke="red"
      stroke-linecap="round"
      stroke-width="5"
      x1="0"
      x2="0"
      y1="-94"
      y2="-85"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="46.99999999999999"
      x2="42.49999999999999"
      y1="-81.40638795573724"
      y2="-73.6121593216773"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="81.40638795573723"
      x2="73.61215932167728"
      y1="-47.00000000000001"
      y2="-42.50000000000001"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="94"
      x2="85"
      y1="-5.75583995599256e-15"
      y2="-5.204748896376251e-15"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="81.40638795573724"
      x2="73.6121593216773"
      y1="46.99999999999998"
      y2="42.49999999999998"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="46.99999999999999"
      x2="42.49999999999999"
      y1="81.40638795573724"
      y2="73.6121593216773"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="1.151167991198512e-14"
      x2="1.0409497792752502e-14"
      y1="94"
      y2="85"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-47.00000000000001"
      x2="-42.50000000000001"
      y1="81.40638795573723"
      y2="73.61215932167728"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-81.40638795573722"
      x2="-73.61215932167727"
      y1="47.00000000000004"
      y2="42.500000000000036"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-94"
      x2="-85"
      y1="1.7267519867977678e-14"
      y2="1.5614246689128753e-14"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-81.40638795573723"
      x2="-73.61215932167728"
      y1="-47.00000000000001"
      y2="-42.50000000000001"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="5"
      x1="-47.00000000000004"
      x2="-42.500000000000036"
      y1="-81.4063879557372"
      y2="-73.61215932167727"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="12h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="red"
      stroke-linecap="round"
      stroke-width="2"
      x1="0"
      x2="0"
      y1="-75"
      y2="-65"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="7.839634745074009"
      x2="7.316992428735742"
      y1="-74.5891421526205"
      y2="-69.61653267577913"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="15.593376811331948"
      x2="14.553818357243152"
      y1="-73.36107005503543"
      y2="-68.4703320513664"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="23.176274578121056"
      x2="21.631189606246316"
      y1="-71.32923872213651"
      y2="-66.57395614066074"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="30.505248230685012"
      x2="28.471565015306012"
      y1="-68.51590932319506"
      y2="-63.94818203498206"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="37.49999999999999"
      x2="32.49999999999999"
      y1="-64.9519052838329"
      y2="-56.29165124598852"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="44.083893921935484"
      x2="41.14496766047312"
      y1="-60.67627457812106"
      y2="-56.63118960624632"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="50.18479547691437"
      x2="46.839142445120075"
      y1="-55.735861910804566"
      y2="-52.020137783417596"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="55.735861910804566"
      x2="52.020137783417596"
      y1="-50.18479547691437"
      y2="-46.839142445120075"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="60.67627457812106"
      x2="56.63118960624632"
      y1="-44.083893921935484"
      y2="-41.14496766047312"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="64.9519052838329"
      x2="56.29165124598851"
      y1="-37.50000000000001"
      y2="-32.50000000000001"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="68.51590932319506"
      x2="63.94818203498206"
      y1="-30.505248230685027"
      y2="-28.471565015306027"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="71.32923872213651"
      x2="66.57395614066074"
      y1="-23.17627457812106"
      y2="-21.631189606246323"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="73.36107005503543"
      x2="68.4703320513664"
      y1="-15.593376811331943"
      y2="-14.553818357243147"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="74.5891421526205"
      x2="69.61653267577913"
      y1="-7.839634745074009"
      y2="-7.316992428735742"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="75"
      x2="65"
      y1="-4.592425496802574e-15"
      y2="-3.980102097228898e-15"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="74.58914215262051"
      x2="69.61653267577914"
      y1="7.839634745074"
      y2="7.316992428735733"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="73.36107005503543"
      x2="68.4703320513664"
      y1="15.593376811331934"
      y2="14.553818357243138"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="71.32923872213652"
      x2="66.57395614066075"
      y1="23.17627457812105"
      y2="21.631189606246313"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="68.51590932319507"
      x2="63.94818203498207"
      y1="30.50524823068501"
      y2="28.471565015306005"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="64.9519052838329"
      x2="56.29165124598852"
      y1="37.499999999999986"
      y2="32.499999999999986"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="60.67627457812106"
      x2="56.63118960624632"
      y1="44.08389392193548"
      y2="41.144967660473114"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="55.73586191080459"
      x2="52.02013778341761"
      y1="50.184795476914346"
      y2="46.83914244512005"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="50.18479547691435"
      x2="46.83914244512006"
      y1="55.73586191080458"
      y2="52.0201377834176"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="44.08389392193549"
      x2="41.14496766047313"
      y1="60.67627457812105"
      y2="56.631189606246316"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="37.49999999999999"
      x2="32.49999999999999"
      y1="64.9519052838329"
      y2="56.29165124598852"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="30.505248230685"
      x2="28.471565015306002"
      y1="68.51590932319507"
      y2="63.94818203498207"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="23.176274578121063"
      x2="21.631189606246327"
      y1="71.32923872213651"
      y2="66.57395614066074"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="15.593376811331948"
      x2="14.553818357243152"
      y1="73.36107005503543"
      y2="68.4703320513664"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="7.83963474507403"
      x2="7.3169924287357615"
      y1="74.5891421526205"
      y2="69.61653267577913"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="9.184850993605149e-15"
      x2="7.960204194457796e-15"
      y1="75"
      y2="65"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-7.8396347450740125"
      x2="-7.316992428735745"
      y1="74.5891421526205"
      y2="69.61653267577913"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-15.59337681133193"
      x2="-14.553818357243134"
      y1="73.36107005503543"
      y2="68.4703320513664"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-23.17627457812108"
      x2="-21.63118960624634"
      y1="71.32923872213651"
      y2="66.57395614066074"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-30.505248230684987"
      x2="-28.471565015305988"
      y1="68.51590932319507"
      y2="63.948182034982075"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-37.50000000000001"
      x2="-32.50000000000001"
      y1="64.9519052838329"
      y2="56.29165124598851"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-44.08389392193548"
      x2="-41.144967660473114"
      y1="60.67627457812106"
      y2="56.63118960624632"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-50.18479547691437"
      x2="-46.839142445120075"
      y1="55.735861910804566"
      y2="52.020137783417596"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-55.73586191080455"
      x2="-52.02013778341758"
      y1="50.18479547691438"
      y2="46.83914244512009"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-60.67627457812105"
      x2="-56.631189606246316"
      y1="44.08389392193549"
      y2="41.14496766047313"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-64.95190528383289"
      x2="-56.291651245988504"
      y1="37.500000000000036"
      y2="32.50000000000003"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-68.51590932319507"
      x2="-63.94818203498207"
      y1="30.50524823068501"
      y2="28.471565015306005"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-71.32923872213651"
      x2="-66.57395614066074"
      y1="23.176274578121067"
      y2="21.63118960624633"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-73.36107005503541"
      x2="-68.47033205136638"
      y1="15.593376811331984"
      y2="14.553818357243186"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-74.5891421526205"
      x2="-69.61653267577913"
      y1="7.8396347450740675"
      y2="7.316992428735796"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-75"
      x2="-65"
      y1="1.3777276490407723e-14"
      y2="1.1940306291686693e-14"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-74.5891421526205"
      x2="-69.61653267577913"
      y1="-7.839634745074041"
      y2="-7.316992428735771"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-73.36107005503541"
      x2="-68.47033205136638"
      y1="-15.593376811331957"
      y2="-14.55381835724316"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-71.32923872213652"
      x2="-66.57395614066075"
      y1="-23.176274578121042"
      y2="-21.631189606246306"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-68.51590932319507"
      x2="-63.948182034982075"
      y1="-30.505248230684984"
      y2="-28.471565015305984"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-64.9519052838329"
      x2="-56.29165124598851"
      y1="-37.50000000000001"
      y2="-32.50000000000001"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-60.67627457812107"
      x2="-56.63118960624633"
      y1="-44.08389392193547"
      y2="-41.14496766047311"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-55.73586191080455"
      x2="-52.02013778341758"
      y1="-50.18479547691438"
      y2="-46.83914244512009"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-50.18479547691441"
      x2="-46.83914244512012"
      y1="-55.73586191080452"
      y2="-52.02013778341756"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-44.0838939219355"
      x2="-41.144967660473135"
      y1="-60.67627457812105"
      y2="-56.631189606246316"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-37.500000000000036"
      x2="-32.50000000000003"
      y1="-64.95190528383287"
      y2="-56.2916512459885"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-30.505248230685012"
      x2="-28.471565015306012"
      y1="-68.51590932319507"
      y2="-63.94818203498207"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-23.17627457812107"
      x2="-21.631189606246334"
      y1="-71.32923872213651"
      y2="-66.57395614066074"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-15.593376811331991"
      x2="-14.553818357243191"
      y1="-73.36107005503541"
      y2="-68.47033205136638"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-7.839634745074073"
      x2="-7.3169924287358015"
      y1="-74.5891421526205"
      y2="-69.61653267577913"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="1h"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="red"
      stroke-linecap="round"
      stroke-width="2"
      x1="0"
      x2="0"
      y1="-55"
      y2="-45"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="5.74906547972094"
      x2="5.226423163382673"
      y1="-54.69870424525503"
      y2="-49.72609476841367"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="11.435142994976763"
      x2="10.395584540887965"
      y1="-53.79811804035931"
      y2="-48.907380036690284"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="16.995934690622107"
      x2="15.450849718747369"
      y1="-52.30810839623344"
      y2="-47.552825814757675"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="22.37051536916901"
      x2="20.336832153790006"
      y1="-50.24500017034305"
      y2="-45.67727288213004"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="27.499999999999996"
      x2="22.499999999999996"
      y1="-47.63139720814413"
      y2="-38.97114317029974"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="32.328188876086024"
      x2="29.389262614623657"
      y1="-44.49593469062211"
      y2="-40.45084971874737"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="36.802183349737206"
      x2="33.456530317942914"
      y1="-40.872965401256685"
      y2="-37.157241273869715"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="40.872965401256685"
      x2="37.157241273869715"
      y1="-36.802183349737206"
      y2="-33.456530317942914"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="44.49593469062211"
      x2="40.45084971874737"
      y1="-32.328188876086024"
      y2="-29.389262614623657"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="47.63139720814412"
      x2="38.97114317029974"
      y1="-27.500000000000007"
      y2="-22.500000000000004"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="50.24500017034305"
      x2="45.67727288213004"
      y1="-22.37051536916902"
      y2="-20.33683215379002"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="52.30810839623344"
      x2="47.552825814757675"
      y1="-16.99593469062211"
      y2="-15.450849718747373"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="53.79811804035931"
      x2="48.907380036690284"
      y1="-11.435142994976758"
      y2="-10.395584540887961"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="54.69870424525503"
      x2="49.72609476841367"
      y1="-5.74906547972094"
      y2="-5.226423163382673"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="55"
      x2="45"
      y1="-3.3677786976552213e-15"
      y2="-2.7554552980815448e-15"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="54.69870424525504"
      x2="49.72609476841367"
      y1="5.749065479720933"
      y2="5.226423163382667"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="53.79811804035931"
      x2="48.907380036690284"
      y1="11.435142994976752"
      y2="10.395584540887956"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="52.30810839623345"
      x2="47.55282581475768"
      y1="16.995934690622104"
      y2="15.450849718747367"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="50.245000170343054"
      x2="45.67727288213005"
      y1="22.370515369169006"
      y2="20.336832153790006"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="47.63139720814413"
      x2="38.97114317029974"
      y1="27.49999999999999"
      y2="22.49999999999999"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="44.49593469062211"
      x2="40.45084971874737"
      y1="32.32818887608602"
      y2="29.38926261462365"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="40.87296540125669"
      x2="37.15724127386972"
      y1="36.802183349737184"
      y2="33.45653031794289"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="36.80218334973719"
      x2="33.4565303179429"
      y1="40.87296540125669"
      y2="37.157241273869715"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="32.32818887608603"
      x2="29.38926261462366"
      y1="44.49593469062211"
      y2="40.450849718747364"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="27.499999999999996"
      x2="22.499999999999996"
      y1="47.63139720814413"
      y2="38.97114317029974"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="22.370515369169002"
      x2="20.336832153790002"
      y1="50.245000170343054"
      y2="45.67727288213005"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="16.995934690622114"
      x2="15.450849718747376"
      y1="52.30810839623344"
      y2="47.552825814757675"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="11.435142994976763"
      x2="10.395584540887965"
      y1="53.79811804035931"
      y2="48.907380036690284"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="5.749065479720955"
      x2="5.2264231633826865"
      y1="54.69870424525503"
      y2="49.72609476841367"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="6.735557395310443e-15"
      x2="5.5109105961630896e-15"
      y1="55"
      y2="45"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-5.749065479720943"
      x2="-5.226423163382675"
      y1="54.69870424525503"
      y2="49.72609476841367"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-11.435142994976749"
      x2="-10.395584540887953"
      y1="53.79811804035931"
      y2="48.907380036690284"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-16.995934690622125"
      x2="-15.450849718747387"
      y1="52.30810839623344"
      y2="47.552825814757675"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-22.37051536916899"
      x2="-20.33683215378999"
      y1="50.24500017034306"
      y2="45.677272882130055"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-27.500000000000007"
      x2="-22.500000000000004"
      y1="47.63139720814412"
      y2="38.97114317029974"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-32.32818887608602"
      x2="-29.38926261462365"
      y1="44.49593469062211"
      y2="40.45084971874737"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-36.802183349737206"
      x2="-33.456530317942914"
      y1="40.872965401256685"
      y2="37.157241273869715"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-40.87296540125667"
      x2="-37.1572412738697"
      y1="36.80218334973721"
      y2="33.45653031794292"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-44.49593469062211"
      x2="-40.450849718747364"
      y1="32.32818887608603"
      y2="29.38926261462366"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-47.631397208144115"
      x2="-38.97114317029973"
      y1="27.500000000000025"
      y2="22.50000000000002"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-50.245000170343054"
      x2="-45.67727288213005"
      y1="22.370515369169006"
      y2="20.336832153790006"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-52.30810839623344"
      x2="-47.552825814757675"
      y1="16.995934690622114"
      y2="15.450849718747378"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-53.798118040359306"
      x2="-48.90738003669028"
      y1="11.435142994976788"
      y2="10.39558454088799"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-54.69870424525503"
      x2="-49.72609476841367"
      y1="5.749065479720983"
      y2="5.226423163382711"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-55"
      x2="-45"
      y1="1.0103336092965664e-14"
      y2="8.266365894244634e-15"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-54.69870424525503"
      x2="-49.72609476841367"
      y1="-5.749065479720963"
      y2="-5.226423163382694"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-53.798118040359306"
      x2="-48.90738003669028"
      y1="-11.435142994976768"
      y2="-10.395584540887972"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-52.30810839623345"
      x2="-47.55282581475768"
      y1="-16.995934690622096"
      y2="-15.450849718747362"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-50.24500017034306"
      x2="-45.677272882130055"
      y1="-22.370515369168988"
      y2="-20.336832153789988"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-47.63139720814412"
      x2="-38.97114317029974"
      y1="-27.500000000000007"
      y2="-22.500000000000004"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-44.495934690622114"
      x2="-40.45084971874738"
      y1="-32.32818887608601"
      y2="-29.389262614623647"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-40.87296540125667"
      x2="-37.1572412738697"
      y1="-36.80218334973721"
      y2="-33.45653031794292"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-36.802183349737234"
      x2="-33.45653031794294"
      y1="-40.87296540125665"
      y2="-37.15724127386969"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-32.32818887608603"
      x2="-29.389262614623668"
      y1="-44.49593469062211"
      y2="-40.450849718747364"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-27.500000000000025"
      x2="-22.50000000000002"
      y1="-47.63139720814411"
      y2="-38.971143170299726"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-22.37051536916901"
      x2="-20.336832153790006"
      y1="-50.245000170343054"
      y2="-45.67727288213005"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-16.995934690622118"
      x2="-15.450849718747381"
      y1="-52.30810839623344"
      y2="-47.552825814757675"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-11.435142994976793"
      x2="-10.395584540887993"
      y1="-53.798118040359306"
      y2="-48.90738003669028"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <line
      stroke="black"
      stroke-linecap="round"
      stroke-width="2"
      x1="-5.749065479720986"
      x2="-5.226423163382715"
      y1="-54.69870424525503"
      y2="-49.72609476841367"
    >
      <animatetransform
        attributeName="transform"
        attributeType="XML"
        dur="60s"
        from="720 0 0"
        repeatCount="indefinite"
        to="360 0 0"
        type="rotate"
      />
    </line>
    <circle
      cx="0"
      cy="0"
      fill="transparent"
      r="95"
      stroke="black"
      stroke-width="5"
    />
    <circle
      cx="0"
      cy="0"
      fill="transparent"
      r="75"
      stroke="black"
      stroke-width="5"
    />
    <circle
      cx="0"
      cy="0"
      fill="transparent"
      r="55"
      stroke="black"
      stroke-width="5"
    />
    <line
      stroke="blue"
      stroke-linecap="round"
      stroke-width="1"
      x1="0"
      x2="0"
      y1="0"
      y2="-97"
    />
  </svg>
</article>
`);
});
