import type { SeedNewsStory } from './news-stories'

export const novemberFourStories: SeedNewsStory[] = [
  {
    slug: 'hsl-contactless-fare-cap-november-2026',
    title: 'HSL now caps contactless fares over 24 hours. Here is how it actually works',
    standfirst: 'Tap for each journey with the same payment method and HSL will stop charging once your adult single tickets reach the matching day-ticket price. There are a few details worth getting right.',
    category: 'Helsinki',
    publishedAt: '2026-11-04T07:30:00.000Z',
    readingMinutes: 7,
    featured: true,
    practicalSummary: 'Since 2 November 2026, adult single tickets bought with the same contactless payment method within 24 hours are capped at the equivalent day-ticket price. You must still tap and buy a ticket before every journey. A physical bank card and a phone wallet linked to that card count separately, and tickets bought in the HSL app or with an HSL card do not count towards the cap.',
    html: `
      <p>There is a familiar bit of public-transport maths that happens halfway through a busy day in Helsinki.</p>
      <p>You bought a single ticket in the morning, another after lunch and now you are wondering whether a day ticket would have been cheaper. Since 2 November, HSL has started doing that calculation for contactless customers.</p>
      <p>If you buy several adult single tickets with the same contactless payment method during a 24-hour period, HSL will stop the total cost from going above the price of the day ticket covering the zones you used.</p>
      <p>It is a useful improvement for visitors and occasional passengers. It is also slightly easier to misunderstand than the headline suggests, so here is the practical version.</p>

      <h2>You still need to tap before every journey</h2>
      <p>The cap does not turn your bank card into a visible day ticket once you have spent enough.</p>
      <p>Before every journey, use the card reader to choose the correct zones and buy a ticket as usual. Do this even after you think you have reached the cap. That new transaction is what gives you a valid ticket for the journey, while HSL handles the price limit behind the scenes.</p>
      <p>Skipping the tap because you have already paid for several journeys can leave you without a valid ticket during an inspection.</p>

      <h2>Use exactly the same payment method</h2>
      <p>The system groups tickets by payment method, not simply by the bank account sitting behind it.</p>
      <p>A physical payment card and Apple Pay or Google Pay linked to that same card are treated as different payment methods. If you tap the plastic card in the morning and your phone in the afternoon, those payments will build separate caps.</p>
      <p>Pick one method and keep using it for the full 24 hours. This is probably the most important detail to remember.</p>

      <h2>How much are the caps?</h2>
      <p>HSL bases the cap on the current price of an adult day ticket for the zones included in your journeys:</p>
      <ul>
        <li><strong>Two zones</strong>, including AB, BC, CD or DE: €10.60</li>
        <li><strong>Three zones</strong>, including ABC, BCD or CDE: €12.80</li>
        <li><strong>Four zones</strong>, including ABCD or BCDE: €13.80</li>
        <li><strong>Five zones</strong>, ABCDE: €17.20</li>
      </ul>
      <p>The 24-hour clock begins when you buy the first ticket using contactless payment. It is not tied to the calendar day, so a cap beginning at 3pm runs until 3pm the following day.</p>

      <h2>Travelling farther can change the cap</h2>
      <p>The final limit depends on all the zones you use during the 24-hour period.</p>
      <p>If most of your journeys are within AB but one later journey extends into zone C, the relevant cap becomes the ABC day-ticket price. HSL is not promising that every passenger will pay no more than €10.60. It is promising that the contactless total will not exceed the day-ticket price that covers the journeys actually taken.</p>
      <p>This matters for airport trips too. Helsinki Airport is in zone C, so a journey between central Helsinki and the airport requires an ABC ticket.</p>

      <h2>The cap is personal</h2>
      <p>You can use contactless payment to buy more than one ticket in a transaction, but only one of those tickets contributes to your fare cap.</p>
      <p>In other words, one bank card cannot build a shared family cap. If two adults want the protection of separate fare caps, each should use their own contactless payment method throughout the day.</p>

      <h2>What does not count?</h2>
      <p>The new cap only covers adult single tickets purchased directly at HSL card readers using contactless payment.</p>
      <p>Tickets bought in the HSL app do not join the contactless total. Neither do single tickets purchased with value stored on an HSL card. Child and discounted tickets are outside this first version too.</p>
      <p>HSL says it is beginning with contactless payments so it can see how the system affects passengers, demand and ticket revenue before considering other sales channels.</p>

      <h2>When is a day ticket still the simpler option?</h2>
      <p>The cap removes the risk of paying more than the matching adult day ticket when your plans grow during the day. It does not make the original day ticket unnecessary in every situation.</p>
      <p>If you know you will travel heavily, buying a day ticket in advance can still feel clearer. It is also the better comparison for families, discounted passengers and anyone mixing ticket types, because the new automatic cap may not cover their full situation.</p>
      <p>A season ticket will normally remain better value for regular commuting. This change is mainly aimed at people who do not travel every day and do not want to study the whole ticket range before setting off.</p>

      <h2>The short version</h2>
      <p>Tap for every journey, keep using the same physical card or the same phone wallet and choose the zones you genuinely need. HSL will then keep the eligible adult single-ticket total within the matching 24-hour day-ticket price.</p>
      <p>It is not quite a London-style system where you simply tap in and travel without choosing a ticket. You are still buying a ticket at the reader each time. The useful part is that an unexpectedly busy day should no longer punish you for not predicting it in advance.</p>
    `,
    sources: [
      { name: 'HSL: fare cap for contactless payment from 2 November 2026', url: 'https://www.hsl.fi/en/hsl/news/news/2026/10/hsl-to-introduce-a-fare-cap-for-contactless-payment-on-2-november-2026' },
      { name: 'HSL: instructions for contactless payment', url: 'https://www.hsl.fi/en/support-and-instructions/instructions-for-contactless-payment' },
      { name: 'HSL: zones and zone map', url: 'https://www.hsl.fi/en/tickets-and-fares/hsl-area-and-zones' },
    ],
  },
  {
    slug: 'kela-therapy-decisions-2027',
    title: 'Kela is reviewing 11,000 therapy decisions. Here is what affected customers need to know',
    standfirst: 'A contract change means thousands of demanding medical rehabilitation decisions need checking for 2027. Many therapies can continue normally, while some customers may face a delay.',
    category: 'Life admin',
    publishedAt: '2026-11-04T07:00:00.000Z',
    readingMinutes: 8,
    featured: true,
    practicalSummary: 'Kela will contact customers whose demanding medical rehabilitation decision needs review for the new contract period beginning 1 January 2027. Wait for Kela’s letter, then reply as soon as possible, including through OmaKela if convenient. Therapy can often continue with the same provider while the review is pending, but people changing provider, beginning a new period or waiting for a new decision may need the updated decision before therapy starts.',
    html: `
      <p>If you or somebody in your family receives Kela-funded demanding medical rehabilitation, a letter arriving over the next few weeks may need a quicker reply than the usual pile of Finnish paperwork.</p>
      <p>Kela is reviewing around 11,000 therapy decisions because a new contract period for therapy providers begins on 1 January 2027. The work has taken longer than expected, and Kela says some decisions will not be checked before the end of the year.</p>
      <p>That does not mean 11,000 people will automatically lose therapy in January. Many can continue without interruption. The outcome depends on the current decision, the provider and whether the therapy continues under an old or new provider contract.</p>

      <h2>Why are the decisions being checked?</h2>
      <p>Kela buys demanding medical rehabilitation therapies from contracted service providers. When a new contract period begins, some existing rehabilitation decisions need to be updated so that the provider details match the new agreement.</p>
      <p>This review can be necessary even when a customer's current decision remains valid during 2027 and they intend to stay with the same therapist.</p>
      <p>Kela says the move to the new contracts has taken more time than anticipated. It cannot yet estimate how many customers will experience an interruption.</p>

      <h2>When can therapy continue normally?</h2>
      <p>There are two important situations where therapy may continue without waiting for a newly checked decision.</p>
      <p>First, some providers have told Kela they will complete therapies already running into 2027 under their current contract. In that case, the existing rehabilitation decision stays in use until it ends and no contract-related review is needed.</p>
      <p>Second, therapy may continue with the same provider under a new contract while Kela reviews the decision, provided that the provider has a new Kela contract for that type of therapy in the municipal group covering the customer's home municipality.</p>
      <p>The wording is administrative, but the practical point is reassuring: a pending review does not always mean treatment has to stop.</p>

      <h2>Who is more likely to need the new decision first?</h2>
      <p>A delay is more likely to affect customers who change service provider at the beginning of 2027. Therapy with the new provider can begin only after Kela has issued a decision naming that provider.</p>
      <p>The same applies when a current rehabilitation decision expires or somebody is applying for the therapy for the first time. A valid Kela decision is required before the new period can begin.</p>
      <p>Kela expects providers holding the new contracts to appear in its service-provider search around the beginning of December. Anyone choosing a provider for a therapy period beginning in 2027 will need to select from that new contracted list.</p>

      <h2>What should you do now?</h2>
      <p>Kela is contacting every customer whose continuing 2027 decision needs to be checked because of the contract change.</p>
      <p>If you have not received a letter, Kela says you do not need to take action at this stage. There is no benefit in sending a speculative application or trying to guess which contract your provider will use.</p>
      <p>If a letter does arrive, read it carefully and reply as soon as possible. Kela needs the requested information before it can make the updated decision. You can also send the response through OmaKela.</p>
      <p>If the instructions are unclear, or you are worried about whether a January appointment can go ahead, ask Kela and your current provider about your specific situation. General advice online cannot tell you which contract applies to your therapy.</p>

      <h2>Which therapies are affected?</h2>
      <p>The decisions under review cover every form of therapy included in Kela's demanding medical rehabilitation contracts:</p>
      <ul>
        <li>pool therapy</li>
        <li>physiotherapy</li>
        <li>riding therapy</li>
        <li>music therapy</li>
        <li>neuropsychological rehabilitation</li>
        <li>family therapy</li>
        <li>speech therapy</li>
        <li>psychotherapy</li>
        <li>art psychotherapy</li>
        <li>occupational therapy</li>
      </ul>
      <p>Around 50,495 people received these therapies in 2025. The 11,000 reviews are therefore a significant administrative job, but they do not cover every person receiving demanding medical rehabilitation.</p>

      <h2>A note for international families</h2>
      <p>Contract and rehabilitation language can be difficult even when Finnish is your first language. If the decision concerns a child or a therapy that supports everyday communication, movement or independence, uncertainty about a break can feel particularly heavy.</p>
      <p>Do not be shy about asking Kela to explain what it needs in plain terms. You can use Kela's English service channels, arrange an interpreter when the service permits it and ask your provider what they know about their 2027 contract. Keep copies of the letter, your reply and any messages about upcoming appointments.</p>
      <p>If somebody helps you manage the case, make sure Kela has the correct authorisation before expecting it to discuss personal details with them.</p>

      <h2>What happens next?</h2>
      <p>The provider search for the new contract period should be available in early December. Kela will continue checking decisions and contacting the customers who need to respond.</p>
      <p>For now, the sensible approach is simple. Continue following your current decision, watch for a Kela letter and respond promptly if one arrives. If you are changing provider or beginning a new therapy period in January, leave extra time and confirm that the updated decision is in place before the first appointment.</p>
      <p>The delay is real, but it is not a blanket cancellation of therapy. The details of your own provider and decision are what matter.</p>
    `,
    sources: [
      { name: 'Kela: around 11,000 therapy decisions will be reviewed for 2027', url: 'https://www.kela.fi/ajankohtaista/noin-11-000-asiakkaan-terapiapaatos-tarkistetaan-monen-terapia-voi-jatkua-ilman-katkosta' },
      { name: 'Kela: intensive medical rehabilitation', url: 'https://www.kela.fi/intensive-medical-rehabilitation' },
      { name: 'Kela: rehabilitation and provider search', url: 'https://www.kela.fi/rehabilitation' },
    ],
  },
]
