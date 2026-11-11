import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const width = 1080
const height = 1350
const projectRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const outputDirectory = path.join(projectRoot, 'public/social/2026-11-hsl-fare-cap')
const heroImage = path.join(projectRoot, 'public/images/news/hsl-contactless-fare-cap-november-2026.webp')

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

function styles() {
  return `<style>
    .display { font-family: 'Avenir Next Condensed', 'Arial Narrow', sans-serif; font-weight: 900; letter-spacing: -2px; }
    .sans { font-family: 'Avenir Next', Arial, sans-serif; }
    .eyebrow { font-family: 'Avenir Next', Arial, sans-serif; font-size: 23px; font-weight: 800; letter-spacing: 3px; }
    .body { font-family: 'Avenir Next', Arial, sans-serif; font-size: 32px; font-weight: 500; }
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

const slides = [
  svg(`
    <rect width="1080" height="1350" fill="${colours.navy}" opacity=".58"/>
    <path d="M0 0H1080V245L0 395Z" fill="${colours.navy}" opacity=".92"/>
    <path d="M0 1050L1080 825V1350H0Z" fill="${colours.blue}" opacity=".95"/>
    ${mark(68, 55, true)}
    <text x="151" y="96" class="eyebrow" fill="${colours.paper}">IN CASE YOU MISSED IT</text>
    <g transform="translate(64 300) rotate(-1.3 470 320)">
      <rect width="952" height="610" rx="28" fill="${colours.paper}"/>
      <text x="55" y="145" class="display" font-size="112" fill="${colours.navy}">HSL MADE</text>
      <text x="55" y="264" class="display" font-size="112" fill="${colours.orange}">BUSY DAYS</text>
      <text x="55" y="383" class="display" font-size="112" fill="${colours.navy}">A BIT CHEAPER.</text>
      <line x1="55" y1="430" x2="890" y2="430" stroke="${colours.gold}" stroke-width="9"/>
      <text x="58" y="505" class="body" fill="${colours.ink}">Contactless adult tickets now stop charging</text>
      <text x="58" y="550" class="body" fill="${colours.ink}">once you reach the matching day-ticket price.</text>
    </g>
    <rect x="70" y="1020" width="435" height="82" rx="12" fill="${colours.gold}"/>
    <text x="288" y="1075" class="display" font-size="44" fill="${colours.navy}" text-anchor="middle">SINCE 2 NOVEMBER</text>
    ${footer(1, true)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.cream}"/>
    <path d="M0 0H1080V285L0 405Z" fill="${colours.pale}"/>
    ${mark()}
    <text x="151" y="96" class="eyebrow" fill="${colours.navy}">THE ONE THING TO REMEMBER</text>
    <text x="68" y="315" class="display" font-size="100" fill="${colours.ink}">TAP BEFORE</text>
    <text x="68" y="420" class="display" font-size="100" fill="${colours.orange}">EVERY JOURNEY.</text>
    <g transform="translate(70 520)">
      <rect width="940" height="535" rx="32" fill="${colours.navy}"/>
      <g transform="translate(90 85)">
        <rect width="315" height="200" rx="24" fill="${colours.paper}"/>
        <rect x="0" y="40" width="315" height="38" fill="${colours.blue}"/>
        <circle cx="255" cy="145" r="25" fill="none" stroke="${colours.orange}" stroke-width="9"/>
        <circle cx="285" cy="145" r="25" fill="none" stroke="${colours.gold}" stroke-width="9"/>
      </g>
      <path d="M525 120q120 0 120 95" fill="none" stroke="${colours.gold}" stroke-width="16" stroke-linecap="round"/>
      <path d="M525 190q55 0 55 45" fill="none" stroke="${colours.orange}" stroke-width="16" stroke-linecap="round"/>
      <rect x="700" y="95" width="125" height="255" rx="24" fill="${colours.pale}"/>
      <circle cx="762" cy="285" r="16" fill="${colours.blue}"/>
      <text x="90" y="390" class="body" fill="${colours.paper}">The cap does not mean you can stop tapping.</text>
      <text x="90" y="438" class="body" fill="${colours.paper}">HSL still needs a valid ticket for every trip.</text>
    </g>
    ${footer(2)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.blue}"/>
    <circle cx="940" cy="170" r="270" fill="${colours.pale}" opacity=".35"/>
    <circle cx="120" cy="1135" r="310" fill="${colours.green}"/>
    ${mark(68, 55, true)}
    <text x="151" y="96" class="eyebrow" fill="${colours.paper}">PICK ONE. STICK WITH IT.</text>
    <text x="68" y="265" class="display" font-size="94" fill="${colours.paper}">YOUR CARD AND</text>
    <text x="68" y="365" class="display" font-size="94" fill="${colours.gold}">PHONE ARE SEPARATE.</text>
    <g transform="translate(70 470)">
      <rect width="430" height="555" rx="30" fill="${colours.paper}"/>
      <rect x="58" y="75" width="314" height="205" rx="24" fill="${colours.navy}"/>
      <rect x="58" y="118" width="314" height="38" fill="${colours.orange}"/>
      <text x="215" y="365" class="display" font-size="64" fill="${colours.navy}" text-anchor="middle">BANK CARD</text>
      <text x="215" y="420" class="small" fill="${colours.ink}" text-anchor="middle">has its own running total</text>
    </g>
    <g transform="translate(580 470)">
      <rect width="430" height="555" rx="30" fill="${colours.paper}"/>
      <rect x="135" y="52" width="160" height="270" rx="28" fill="${colours.navy}"/>
      <rect x="154" y="82" width="122" height="188" rx="12" fill="${colours.pale}"/>
      <circle cx="215" cy="292" r="12" fill="${colours.orange}"/>
      <text x="215" y="365" class="display" font-size="64" fill="${colours.navy}" text-anchor="middle">PHONE WALLET</text>
      <text x="215" y="420" class="small" fill="${colours.ink}" text-anchor="middle">has a different running total</text>
    </g>
    <text x="70" y="1130" class="body" fill="${colours.paper}">Even when the same card sits inside Apple Pay or Google Pay.</text>
    ${footer(3, true)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.cream}"/>
    <path d="M0 0H1080V250L0 365Z" fill="${colours.gold}"/>
    ${mark()}
    <text x="151" y="96" class="eyebrow" fill="${colours.navy}">THE 24-HOUR CAPS</text>
    <text x="68" y="300" class="display" font-size="91" fill="${colours.ink}">WHAT IS THE MOST</text>
    <text x="68" y="398" class="display" font-size="91" fill="${colours.blue}">YOU WILL PAY?</text>
    <g transform="translate(70 500)">
      <rect width="940" height="580" rx="30" fill="${colours.paper}" stroke="${colours.blue}" stroke-width="5"/>
      <g class="display" font-size="58" fill="${colours.navy}">
        <text x="70" y="115">2 ZONES</text><text x="870" y="115" text-anchor="end">€10.60</text>
        <text x="70" y="240">3 ZONES</text><text x="870" y="240" text-anchor="end">€12.80</text>
        <text x="70" y="365">4 ZONES</text><text x="870" y="365" text-anchor="end">€13.80</text>
        <text x="70" y="490">5 ZONES</text><text x="870" y="490" text-anchor="end">€17.20</text>
      </g>
      <line x1="70" y1="150" x2="870" y2="150" stroke="${colours.pale}" stroke-width="5"/>
      <line x1="70" y1="275" x2="870" y2="275" stroke="${colours.pale}" stroke-width="5"/>
      <line x1="70" y1="400" x2="870" y2="400" stroke="${colours.pale}" stroke-width="5"/>
    </g>
    <text x="70" y="1155" class="small" fill="${colours.ink}">Adult contactless tickets only. The zones you choose still matter.</text>
    ${footer(4)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.navy}"/>
    <path d="M0 0H1080V310L0 465Z" fill="${colours.green}"/>
    ${mark(68, 55, true)}
    <text x="151" y="96" class="eyebrow" fill="${colours.paper}">WHAT JOINS THE CAP?</text>
    <text x="68" y="300" class="display" font-size="96" fill="${colours.paper}">YES. NO. EASY.</text>
    <g transform="translate(70 450)">
      <rect width="455" height="650" rx="30" fill="${colours.paper}"/>
      <circle cx="85" cy="105" r="42" fill="${colours.green}"/><path d="M65 105l16 17 28-35" fill="none" stroke="${colours.paper}" stroke-width="11"/>
      <text x="150" y="125" class="display" font-size="64" fill="${colours.green}">COUNTS</text>
      <text x="55" y="240" class="body" fill="${colours.ink}"><tspan x="55">Adult single tickets</tspan><tspan x="55" dy="50">bought contactlessly</tspan><tspan x="55" dy="50">with the same method</tspan><tspan x="55" dy="50">inside 24 hours.</tspan></text>
      <text x="55" y="500" class="small" fill="${colours.navy}">One passenger per payment method.</text>
    </g>
    <g transform="translate(555 450)">
      <rect width="455" height="650" rx="30" fill="${colours.paper}"/>
      <circle cx="85" cy="105" r="42" fill="${colours.orange}"/><path d="M66 86l38 38M104 86l-38 38" stroke="${colours.paper}" stroke-width="11"/>
      <text x="150" y="125" class="display" font-size="64" fill="${colours.orange}">DOESN’T</text>
      <text x="55" y="240" class="body" fill="${colours.ink}"><tspan x="55">Tickets bought in</tspan><tspan x="55" dy="50">the HSL app or loaded</tspan><tspan x="55" dy="50">onto an HSL card.</tspan></text>
      <text x="55" y="450" class="small" fill="${colours.navy}"><tspan x="55">Extra tickets bought in the</tspan><tspan x="55" dy="38">same transaction do not all count.</tspan></text>
    </g>
    ${footer(5, true)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.pale}"/>
    <path d="M0 930L1080 710V1350H0Z" fill="${colours.navy}"/>
    <circle cx="870" cy="210" r="220" fill="${colours.gold}"/>
    ${mark()}
    <text x="151" y="96" class="eyebrow" fill="${colours.navy}">THE SHORT VERSION</text>
    <text x="68" y="290" class="display" font-size="100" fill="${colours.navy}">TAP EVERY TIME.</text>
    <text x="68" y="395" class="display" font-size="100" fill="${colours.orange}">USE ONE METHOD.</text>
    <text x="68" y="500" class="display" font-size="100" fill="${colours.navy}">PICK YOUR ZONES.</text>
    <rect x="68" y="610" width="730" height="142" rx="20" fill="${colours.paper}"/>
    <text x="110" y="675" class="small" fill="${colours.ink}">The full plain-English guide is waiting at</text>
    <text x="110" y="728" class="display" font-size="48" fill="${colours.blue}">EXPATS.FI/NEWS</text>
    <text x="68" y="1010" class="display" font-size="78" fill="${colours.paper}">SAVE THIS FOR</text>
    <text x="68" y="1092" class="display" font-size="78" fill="${colours.gold}">THE NEXT BUSY DAY.</text>
    ${footer(6, true)}
  `),
]

await mkdir(outputDirectory, { recursive: true })

for (const [index, slide] of slides.entries()) {
  const canvas = index === 0
    ? sharp(heroImage).resize(width, height, { fit: 'cover' }).composite([{ input: Buffer.from(slide) }])
    : sharp(Buffer.from(slide))
  await canvas.png().toFile(path.join(outputDirectory, `${String(index + 1).padStart(2, '0')}.png`))
}

const previewInputs = await Promise.all(
  Array.from({ length: slides.length }, (_, index) =>
    sharp(path.join(outputDirectory, `${String(index + 1).padStart(2, '0')}.png`)).resize(280, 350).png().toBuffer(),
  ),
)

const preview = await sharp({
  create: { width: 960, height: 800, channels: 4, background: '#efe9de' },
}).composite(previewInputs.map((input, index) => ({
  input,
  left: 20 + (index % 3) * 315,
  top: 25 + Math.floor(index / 3) * 390,
}))).png().toBuffer()

await writeFile(path.join(outputDirectory, 'preview.png'), preview)
await writeFile(path.join(outputDirectory, 'caption.md'), `In case you missed it, HSL has quietly made those unexpectedly busy travel days a little less painful 🙏

Since 2 November, eligible adult single tickets bought by contactless payment are capped over 24 hours at the matching day-ticket price.

The important bits:

• tap before every journey
• keep using the same physical card or the same phone wallet
• choose the zones you actually need
• app and HSL-card tickets do not join the cap

We have put together the full plain-English guide at expats.fi. Link in bio.

Save this for the next day that somehow turns into six tram rides and an airport run 😅

#Helsinki #HSL #ExpatsInFinland #LifeInFinland #HelsinkiTips
`)
