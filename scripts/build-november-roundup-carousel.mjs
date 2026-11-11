import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const width = 1080
const height = 1350
const projectRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const outputDirectory = path.join(projectRoot, 'public/social/2026-11-expat-roundup')

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

const slides = [
  svg(`
    <rect width="1080" height="1350" fill="${colours.navy}"/>
    <circle cx="910" cy="155" r="315" fill="${colours.blue}"/>
    <circle cx="110" cy="1170" r="330" fill="${colours.green}"/>
    <path d="M0 255L1080 70V405L0 600Z" fill="${colours.pale}" opacity=".96"/>
    ${mark(68, 55, true)}
    <text x="151" y="96" class="eyebrow" fill="${colours.paper}">IN CASE YOU MISSED IT</text>
    <g transform="translate(65 300) rotate(-1.5 475 310)">
      <rect width="950" height="610" rx="28" fill="${colours.paper}"/>
      <text x="58" y="150" class="display" font-size="112" fill="${colours.navy}">FIVE THINGS</text>
      <text x="58" y="270" class="display" font-size="112" fill="${colours.orange}">WORTH KNOWING</text>
      <text x="58" y="390" class="display" font-size="112" fill="${colours.navy}">THIS NOVEMBER.</text>
      <line x1="58" y1="438" x2="890" y2="438" stroke="${colours.gold}" stroke-width="9"/>
      <text x="60" y="520" class="body" fill="${colours.ink}">Transport, Kela, students and the job market.</text>
    </g>
    <rect x="720" y="950" width="285" height="102" rx="12" fill="${colours.gold}" transform="rotate(4 862 1001)"/>
    <text x="862" y="1017" class="display" font-size="45" fill="${colours.navy}" text-anchor="middle" transform="rotate(4 862 1001)">SAVE THIS</text>
    <text x="68" y="1168" class="small" fill="${colours.pale}">The useful bits, without the administrative fog.</text>
    ${footer(1, true)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.cream}"/>
    <path d="M0 0H1080V290L0 405Z" fill="${colours.gold}"/>
    ${mark()}
    <text x="151" y="96" class="eyebrow" fill="${colours.navy}">01 · STUDENTS</text>
    <text x="68" y="310" class="display" font-size="95" fill="${colours.ink}">THE DEADLINE IS</text>
    <text x="68" y="410" class="display" font-size="95" fill="${colours.blue}">15 NOVEMBER.</text>
    <g transform="translate(68 505)">
      <rect width="944" height="555" rx="30" fill="${colours.paper}" stroke="${colours.blue}" stroke-width="5"/>
      <circle cx="185" cy="185" r="116" fill="${colours.pale}"/>
      <text x="185" y="210" class="display" font-size="70" fill="${colours.navy}" text-anchor="middle">€35.35</text>
      <text x="350" y="125" class="display" font-size="61" fill="${colours.orange}">NO BILL ARRIVES.</text>
      <text x="350" y="205" class="body" fill="${colours.ink}"><tspan x="350">Higher-education students need</tspan><tspan x="350" dy="45">to pay the autumn healthcare fee</tspan><tspan x="350" dy="45">themselves through OmaKela.</tspan></text>
      <rect x="65" y="365" width="814" height="120" rx="18" fill="${colours.navy}"/>
      <text x="100" y="420" class="small" fill="${colours.paper}">Registered after 1 October?</text>
      <text x="100" y="461" class="small" fill="${colours.gold}">Your deadline may instead be 31 December.</text>
    </g>
    ${footer(2)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.blue}"/>
    <circle cx="900" cy="190" r="250" fill="${colours.pale}" opacity=".35"/>
    <path d="M0 1030L1080 815V1350H0Z" fill="${colours.navy}"/>
    ${mark(68, 55, true)}
    <text x="151" y="96" class="eyebrow" fill="${colours.paper}">02 · HSL</text>
    <text x="68" y="275" class="display" font-size="94" fill="${colours.paper}">CONTACTLESS FARES</text>
    <text x="68" y="375" class="display" font-size="94" fill="${colours.gold}">NOW HAVE A CAP.</text>
    <g transform="translate(70 465)">
      <rect width="940" height="480" rx="30" fill="${colours.paper}"/>
      <rect x="55" y="60" width="280" height="180" rx="22" fill="${colours.navy}"/>
      <rect x="55" y="98" width="280" height="35" fill="${colours.orange}"/>
      <path d="M405 100q95 0 95 78" fill="none" stroke="${colours.orange}" stroke-width="15" stroke-linecap="round"/>
      <path d="M405 160q43 0 43 36" fill="none" stroke="${colours.gold}" stroke-width="15" stroke-linecap="round"/>
      <rect x="565" y="70" width="120" height="230" rx="22" fill="${colours.pale}" stroke="${colours.navy}" stroke-width="8"/>
      <text x="55" y="330" class="display" font-size="52" fill="${colours.navy}">ONE ADULT RIDER.</text>
      <text x="55" y="385" class="body" fill="${colours.ink}">Same card or phone wallet. Tap before every trip.</text>
      <text x="55" y="430" class="small" fill="${colours.orange}">Extra tickets bought for others do not build a shared cap.</text>
    </g>
    <text x="70" y="1070" class="small" fill="${colours.pale}">The 24-hour limit matches the adult day-ticket price for your zones.</text>
    ${footer(3, true)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.cream}"/>
    <path d="M0 0H1080V260L0 370Z" fill="${colours.pale}"/>
    ${mark()}
    <text x="151" y="96" class="eyebrow" fill="${colours.navy}">03 · KELA THERAPY DECISIONS</text>
    <text x="68" y="300" class="display" font-size="90" fill="${colours.ink}">11,000 DECISIONS</text>
    <text x="68" y="395" class="display" font-size="90" fill="${colours.green}">ARE BEING CHECKED.</text>
    <g transform="translate(70 490) rotate(-1 470 300)">
      <rect width="940" height="590" rx="28" fill="${colours.paper}" stroke="${colours.green}" stroke-width="5"/>
      <circle cx="160" cy="165" r="92" fill="${colours.green}"/>
      <path d="M120 165l28 30 60-70" fill="none" stroke="${colours.paper}" stroke-width="18" stroke-linecap="round"/>
      <text x="300" y="118" class="display" font-size="62" fill="${colours.navy}">WATCH FOR A LETTER.</text>
      <text x="300" y="190" class="body" fill="${colours.ink}"><tspan x="300">Kela will contact the customers</tspan><tspan x="300" dy="45">whose 2027 decision needs review.</tspan></text>
      <line x1="65" y1="310" x2="875" y2="310" stroke="${colours.pale}" stroke-width="6"/>
      <text x="65" y="385" class="body" fill="${colours.ink}"><tspan x="65">Reply promptly if Kela contacts you. A review does not</tspan><tspan x="65" dy="48">automatically mean therapy will stop, but some people</tspan><tspan x="65" dy="48">changing provider may need the updated decision first.</tspan></text>
    </g>
    ${footer(4)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.orange}"/>
    <path d="M0 0H1080V315L0 470Z" fill="${colours.navy}"/>
    <path d="M0 1040L1080 840V1350H0Z" fill="${colours.gold}"/>
    ${mark(68, 55, true)}
    <text x="151" y="96" class="eyebrow" fill="${colours.paper}">04 · KELA TAXIS</text>
    <text x="68" y="300" class="display" font-size="89" fill="${colours.paper}">EVERY BOOKING NUMBER</text>
    <text x="68" y="395" class="display" font-size="89" fill="${colours.gold}">CHANGES IN JANUARY.</text>
    <g transform="translate(70 500)">
      <rect width="940" height="470" rx="30" fill="${colours.paper}"/>
      <rect x="65" y="95" width="245" height="190" rx="35" fill="${colours.navy}"/>
      <rect x="105" y="55" width="165" height="72" rx="28" fill="${colours.navy}"/>
      <circle cx="125" cy="295" r="36" fill="${colours.ink}"/><circle cx="250" cy="295" r="36" fill="${colours.ink}"/>
      <text x="375" y="115" class="display" font-size="64" fill="${colours.orange}">1 JANUARY 2027</text>
      <text x="375" y="195" class="body" fill="${colours.ink}"><tspan x="375">Save your new regional number</tspan><tspan x="375" dy="45">before the year turns.</tspan></text>
      <text x="375" y="310" class="small" fill="${colours.navy}"><tspan x="375">January journeys can be booked through</tspan><tspan x="375" dy="38">the new numbers from 21 December.</tspan></text>
      <text x="65" y="410" class="small" fill="${colours.green}">Use a familiar driver? Check whether they can continue in 2027.</text>
    </g>
    ${footer(5, true)}
  `),
  svg(`
    <rect width="1080" height="1350" fill="${colours.pale}"/>
    <circle cx="900" cy="140" r="280" fill="${colours.gold}"/>
    <path d="M0 910L1080 715V1350H0Z" fill="${colours.navy}"/>
    ${mark()}
    <text x="151" y="96" class="eyebrow" fill="${colours.navy}">05 · THE JOB MARKET</text>
    <text x="68" y="295" class="display" font-size="98" fill="${colours.navy}">298,000 PEOPLE</text>
    <text x="68" y="400" class="display" font-size="98" fill="${colours.orange}">WERE UNEMPLOYED.</text>
    <rect x="68" y="500" width="830" height="250" rx="25" fill="${colours.paper}"/>
    <text x="110" y="575" class="body" fill="${colours.ink}"><tspan x="110">September’s figure was 39,000 higher than</tspan><tspan x="110" dy="48">one year earlier. If the search feels rough,</tspan><tspan x="110" dy="48">the difficult market is real. It is not just you.</tspan></text>
    <text x="68" y="1005" class="display" font-size="78" fill="${colours.paper}">FULL GUIDES AND SOURCES</text>
    <text x="68" y="1090" class="display" font-size="78" fill="${colours.gold}">AT EXPATS.FI/NEWS</text>
    <text x="68" y="1170" class="small" fill="${colours.pale}">Save it, share it and tell us what we have missed 🙏</text>
    ${footer(6, true)}
  `),
]

await mkdir(outputDirectory, { recursive: true })

for (const [index, slide] of slides.entries()) {
  await sharp(Buffer.from(slide)).png().toFile(path.join(outputDirectory, `${String(index + 1).padStart(2, '0')}.png`))
}

const previewInputs = await Promise.all(slides.map((_, index) =>
  sharp(path.join(outputDirectory, `${String(index + 1).padStart(2, '0')}.png`)).resize(280, 350).png().toBuffer(),
))

const preview = await sharp({
  create: { width: 960, height: 800, channels: 4, background: '#efe9de' },
}).composite(previewInputs.map((input, index) => ({
  input,
  left: 20 + (index % 3) * 315,
  top: 25 + Math.floor(index / 3) * 390,
}))).png().toBuffer()

await writeFile(path.join(outputDirectory, 'preview.png'), preview)
await writeFile(path.join(outputDirectory, 'caption.md'), `In case you missed it, a few genuinely useful things have changed or need your attention this November 👀

The quick version:

• students may need to pay the €35.35 healthcare fee by 15 November
• HSL now caps eligible adult contactless fares over 24 hours, but the cap is personal to one adult rider and one payment method
• Kela is reviewing around 11,000 demanding medical rehabilitation therapy decisions
• every regional Kela taxi booking number changes on 1 January 2027
• Finland’s job market remains properly difficult, with 298,000 people unemployed in September

We have broken the details down properly at expats.fi/news, with the official sources linked so you can check anything that applies to you.

Save this for later, share it with somebody who might need it and give us a shout if there is something important we have missed 🙏

#ExpatsInFinland #LifeInFinland #Helsinki #Kela #HSL #FinlandNews
`)
