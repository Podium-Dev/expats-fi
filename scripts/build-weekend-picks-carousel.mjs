import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const width = 1080
const height = 1350
const outputDirectory = path.resolve('public/social/2026-10-weekend-picks')

const colours = {
  navy: '#073765',
  blue: '#0868b2',
  pale: '#cde8f5',
  cream: '#f8f1e5',
  paper: '#fffdf8',
  ink: '#172332',
  orange: '#ef6a24',
  green: '#668c49',
  gold: '#f4a340',
}

const escapeXml = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

function styles() {
  return `<style>
    .display { font-family: 'Avenir Next Condensed', 'Arial Narrow', sans-serif; font-weight: 900; letter-spacing: -2px; }
    .sans { font-family: 'Avenir Next', Arial, sans-serif; }
    .eyebrow { font-family: 'Avenir Next', Arial, sans-serif; font-size: 23px; font-weight: 800; letter-spacing: 3px; }
    .body { font-family: 'Avenir Next', Arial, sans-serif; font-size: 31px; font-weight: 500; }
    .small { font-family: 'Avenir Next', Arial, sans-serif; font-size: 24px; font-weight: 600; }
    .footer { font-family: 'Avenir Next', Arial, sans-serif; font-size: 21px; font-weight: 800; letter-spacing: 2px; }
  </style>`
}

function svg(contents) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${styles()}${contents}</svg>`
}

function mark(x = 68, y = 55, light = false) {
  const fill = light ? colours.paper : colours.navy
  const cut = light ? colours.navy : colours.paper
  return `<g transform="translate(${x} ${y})">
    <circle cx="31" cy="31" r="31" fill="${fill}"/>
    <rect x="14" y="12" width="10" height="16" fill="${cut}"/>
    <rect x="14" y="35" width="10" height="16" fill="${cut}"/>
    <rect x="31" y="12" width="18" height="16" fill="${cut}"/>
    <rect x="31" y="35" width="18" height="16" fill="${cut}"/>
  </g>`
}

function footer(number, light = false) {
  const fill = light ? colours.paper : colours.ink
  return `<text x="68" y="1290" class="footer" fill="${fill}">EXPATS.FI</text>
    <text x="1012" y="1290" class="footer" fill="${fill}" text-anchor="end">${String(number).padStart(2, '0')} / 06</text>`
}

function ticket({ x, y, w, h, fill, date, title, detail, rotate = 0, accent = colours.orange }) {
  return `<g transform="translate(${x} ${y}) rotate(${rotate} ${w / 2} ${h / 2})">
    <rect width="${w}" height="${h}" rx="18" fill="${fill}"/>
    <circle cx="0" cy="${h / 2}" r="18" fill="${colours.navy}"/>
    <circle cx="${w}" cy="${h / 2}" r="18" fill="${colours.navy}"/>
    <text x="42" y="63" class="eyebrow" fill="${accent}">${escapeXml(date)}</text>
    <text x="42" y="137" class="display" font-size="54" fill="${colours.ink}">${escapeXml(title)}</text>
    <text x="42" y="185" class="small" fill="${colours.navy}">${escapeXml(detail)}</text>
  </g>`
}

const slides = [
  svg(`
    <rect width="1080" height="1350" fill="${colours.navy}"/>
    <circle cx="915" cy="135" r="300" fill="${colours.blue}"/>
    <circle cx="84" cy="1130" r="315" fill="${colours.green}"/>
    <path d="M0 240L1080 70V435L0 585Z" fill="${colours.pale}" opacity=".92"/>
    ${mark(68, 55, true)}
    <text x="151" y="96" class="eyebrow" fill="${colours.paper}">A FEW GOOD SHOUTS</text>
    <g transform="rotate(-2 540 635)">
      <rect x="68" y="300" width="865" height="600" rx="24" fill="${colours.paper}"/>
      <text x="120" y="465" class="display" font-size="122" fill="${colours.navy}">WHAT’S ON</text>
      <text x="120" y="610" class="display" font-size="134" fill="${colours.orange}">THIS WEEKEND?</text>
      <line x1="120" y1="666" x2="860" y2="666" stroke="${colours.gold}" stroke-width="8"/>
      <text x="122" y="748" class="body" fill="${colours.ink}">Six ideas around Helsinki and Espoo.</text>
      <text x="122" y="800" class="body" fill="${colours.ink}">24–25 October 2026.</text>
    </g>
    <g transform="translate(720 925) rotate(6)">
      <rect width="270" height="105" rx="10" fill="${colours.gold}"/>
      <text x="135" y="68" class="display" font-size="46" fill="${colours.navy}" text-anchor="middle">SAVE THIS</text>
    </g>
    <text x="68" y="1185" class="small" fill="${colours.pale}">Music, costumes, crafts, lights and one final circus.</text>
    ${footer(1, true)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.cream}"/>
    <path d="M0 0H1080V255L0 370Z" fill="${colours.pale}"/>
    ${mark()}
    <text x="151" y="96" class="eyebrow" fill="${colours.navy}">SATURDAY MORNING</text>
    <text x="68" y="292" class="display" font-size="90" fill="${colours.ink}">START SMALL. GO BIG.</text>
    <rect x="68" y="360" width="430" height="760" rx="25" fill="${colours.navy}"/>
    <circle cx="283" cy="518" r="92" fill="${colours.gold}"/>
    <path d="M236 518q47-70 94 0q-47 70-94 0" fill="none" stroke="${colours.navy}" stroke-width="15"/>
    <text x="108" y="690" class="eyebrow" fill="${colours.pale}">10:30 · KANNUSALI</text>
    <text x="108" y="784" class="display" font-size="65" fill="${colours.paper}">MEGAMUSKARI</text>
    <text x="108" y="858" class="body" fill="${colours.paper}">
      <tspan x="108">Songs, rhymes and</tspan><tspan x="108" dy="43">movement for ages 0–7.</tspan>
    </text>
    <text x="108" y="1015" class="small" fill="${colours.gold}">€8 + booking fee</text>
    <rect x="535" y="360" width="477" height="760" rx="25" fill="${colours.paper}" stroke="${colours.blue}" stroke-width="5"/>
    <path d="M705 490l38-82 38 82 88 10-65 60 18 87-79-43-79 43 18-87-65-60z" fill="${colours.orange}"/>
    <text x="579" y="690" class="eyebrow" fill="${colours.blue}">10:00–17:00 · TAPIOLA</text>
    <text x="579" y="778" class="display" font-size="61" fill="${colours.ink}">PUMPKIN PARTY</text>
    <text x="579" y="852" class="body" fill="${colours.ink}">
      <tspan x="579">Costumes, ghosts, glitter</tspan><tspan x="579" dy="43">and magic at Museo Leikki.</tspan>
    </text>
    <text x="579" y="1015" class="small" fill="${colours.orange}">Normal museum admission</text>
    ${footer(2)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.orange}"/>
    <path d="M0 0H1080V300L0 510Z" fill="${colours.navy}"/>
    <path d="M0 1030L1080 820V1350H0Z" fill="${colours.gold}"/>
    ${mark(68, 55, true)}
    <text x="151" y="96" class="eyebrow" fill="${colours.paper}">SATURDAY AFTERNOON</text>
    <g transform="translate(75 240) rotate(-1.5 465 450)">
      <rect width="930" height="865" rx="28" fill="${colours.paper}"/>
      <text x="60" y="135" class="display" font-size="83" fill="${colours.navy}">PAINT SOMETHING</text>
      <text x="60" y="228" class="display" font-size="83" fill="${colours.green}">WORTH KEEPING</text>
      <g transform="translate(75 310)">
        <path d="M98 35h95v75c0 35 28 59 28 120v190c0 45-32 76-76 76H70c-44 0-76-31-76-76V230c0-61 28-85 28-120V35h76" fill="${colours.pale}" stroke="${colours.blue}" stroke-width="9"/>
        <path d="M48 270q55-75 110 0t110 0" fill="none" stroke="${colours.orange}" stroke-width="18"/>
        <circle cx="94" cy="365" r="24" fill="${colours.gold}"/><circle cx="165" cy="337" r="17" fill="${colours.green}"/>
      </g>
      <text x="390" y="390" class="eyebrow" fill="${colours.orange}">14:00–17:00 · KALASATAMA</text>
      <text x="390" y="485" class="display" font-size="67" fill="${colours.ink}">UPCYCLED GLASS</text>
      <text x="390" y="558" class="display" font-size="67" fill="${colours.ink}">PAINTING</text>
      <text x="390" y="645" class="body" fill="${colours.ink}">
        <tspan x="390">A small English and Finnish</tspan><tspan x="390" dy="43">workshop at Daruma Kitchen.</tspan>
      </text>
      <rect x="390" y="730" width="415" height="72" rx="36" fill="${colours.navy}"/>
      <text x="598" y="778" class="small" fill="${colours.paper}" text-anchor="middle">AGES 13+ · FROM €37.50</text>
    </g>
    ${footer(3, true)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.navy}"/>
    <circle cx="825" cy="420" r="350" fill="none" stroke="${colours.pale}" stroke-width="7" opacity=".55"/>
    <circle cx="825" cy="420" r="270" fill="none" stroke="${colours.gold}" stroke-width="4" opacity=".75"/>
    <circle cx="825" cy="420" r="195" fill="${colours.blue}"/>
    ${Array.from({ length: 16 }, (_, index) => {
      const angle = (Math.PI * 2 * index) / 16
      const x = 825 + Math.cos(angle) * 310
      const y = 420 + Math.sin(angle) * 310
      return `<circle cx="${x}" cy="${y}" r="10" fill="${index % 2 ? colours.orange : colours.gold}"/>`
    }).join('')}
    ${mark(68, 55, true)}
    <text x="151" y="96" class="eyebrow" fill="${colours.paper}">SATURDAY EVENING</text>
    <rect x="55" y="245" width="665" height="725" rx="28" fill="${colours.paper}"/>
    <text x="105" y="385" class="display" font-size="104" fill="${colours.green}">LIGHT UP</text>
    <text x="105" y="490" class="display" font-size="104" fill="${colours.ink}">THE DARK</text>
    <text x="105" y="585" class="eyebrow" fill="${colours.blue}">17:00–20:00 · AURORA</text>
    <text x="105" y="690" class="body" fill="${colours.ink}">
      <tspan x="105">Kummajaiset brings light,</tspan><tspan x="105" dy="43">shadow, workshops and two</tspan><tspan x="105" dy="43">outdoor circus performances.</tspan>
    </text>
    <rect x="105" y="835" width="270" height="72" rx="36" fill="${colours.orange}"/>
    <text x="240" y="883" class="small" fill="${colours.paper}" text-anchor="middle">FREE ENTRY</text>
    <text x="68" y="1165" class="small" fill="${colours.pale}">Warm layers recommended. Outdoor programme is weather dependent.</text>
    ${footer(4, true)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.cream}"/>
    <path d="M0 0H1080V260L0 350Z" fill="${colours.gold}"/>
    ${mark()}
    <text x="151" y="96" class="eyebrow" fill="${colours.navy}">SUNDAY</text>
    <text x="68" y="276" class="display" font-size="86" fill="${colours.ink}">TWO VERY DIFFERENT SHOWS</text>
    ${ticket({ x: 70, y: 370, w: 940, h: 265, fill: colours.paper, date: '13:00 · KÄPYLÄ', title: 'CIRCUS FINLANDIA', detail: 'The final Helsinki show · tickets from €16', rotate: -1.2 })}
    ${ticket({ x: 70, y: 690, w: 940, h: 265, fill: '#e7f1e1', date: '13:00 + 14:30 · TAPIOLA', title: 'CAN’T SLEEP!', detail: 'A 35-minute forest concert for little ones', rotate: 1.1, accent: colours.green })}
    <text x="68" y="1080" class="body" fill="${colours.ink}">
      <tspan x="68">Both need tickets. The children’s concert does not admit latecomers,</tspan>
      <tspan x="68" dy="43">so give yourself a few extra minutes.</tspan>
    </text>
    ${footer(5)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.blue}"/>
    <path d="M0 980L1080 760V1350H0Z" fill="${colours.navy}"/>
    <path d="M0 0H1080V225L0 365Z" fill="${colours.pale}"/>
    ${mark()}
    <text x="151" y="96" class="eyebrow" fill="${colours.navy}">THE USEFUL BIT</text>
    <g transform="translate(70 290)">
      <rect width="940" height="610" rx="28" fill="${colours.paper}"/>
      <text x="58" y="135" class="display" font-size="94" fill="${colours.navy}">CHECK BEFORE</text>
      <text x="58" y="235" class="display" font-size="94" fill="${colours.orange}">YOU SET OFF</text>
      <text x="60" y="345" class="body" fill="${colours.ink}">
        <tspan x="60">Times, capacity and outdoor programmes can change.</tspan>
        <tspan x="60" dy="55">We have linked every organiser and booking page at</tspan>
      </text>
      <rect x="58" y="455" width="540" height="92" rx="12" fill="${colours.pale}"/>
      <text x="328" y="516" class="display" font-size="48" fill="${colours.navy}" text-anchor="middle">EXPATS.FI/EVENTS</text>
    </g>
    <text x="70" y="1035" class="display" font-size="76" fill="${colours.paper}">SAVE IT. SHARE IT.</text>
    <text x="70" y="1120" class="body" fill="${colours.pale}">And send us the good shouts we have missed 🙏</text>
    ${footer(6, true)}
  `),
]

await mkdir(outputDirectory, { recursive: true })

for (const [index, slide] of slides.entries()) {
  await sharp(Buffer.from(slide)).png().toFile(path.join(outputDirectory, `${String(index + 1).padStart(2, '0')}.png`))
}

const preview = await sharp({
  create: { width: 960, height: 800, channels: 4, background: '#efe9de' },
}).composite(
  await Promise.all(slides.map(async (slide, index) => ({
    input: await sharp(Buffer.from(slide)).resize(280, 350).png().toBuffer(),
    left: 20 + (index % 3) * 315,
    top: 25 + Math.floor(index / 3) * 390,
  }))),
).png().toBuffer()

await writeFile(path.join(outputDirectory, 'preview.png'), preview)
