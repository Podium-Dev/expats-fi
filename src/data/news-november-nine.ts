import type { SeedNewsStory } from './news-stories'

export const novemberNineStories: SeedNewsStory[] = [
  {
    slug: 'student-healthcare-fee-november-2026',
    title: 'Students, the healthcare fee is due on 15 November. Kela will not send you a bill',
    standfirst: 'Higher-education students registered as attending for the autumn term usually need to pay €35.35 themselves through OmaKela. Missing the deadline adds a late fee.',
    category: 'Life admin',
    publishedAt: '2026-11-09T08:00:00.000Z',
    readingMinutes: 6,
    featured: true,
    practicalSummary: 'If you are enrolled at a Finnish university or university of applied sciences and registered as attending for autumn 2026, check whether you must pay the €35.35 student healthcare fee by 15 November. Kela does not send an invoice. Pay through OmaKela using the correct term and personal reference number. A €5 late fee is added after the deadline.',
    html: `
      <p>There are some Finnish payments that arrive with a bill, a reference number and enough reminders to make forgetting genuinely difficult.</p>
      <p>The higher-education student healthcare fee is not one of them.</p>
      <p>If you are registered as attending at a Finnish university or university of applied sciences for the autumn 2026 term, the payment is generally your responsibility. Kela will not post or email you an invoice. The autumn deadline is 15 November and the fee is €35.35.</p>
      <p>It is a small piece of life admin, but an easy one to miss when you are new to Finland and assume every official charge will come looking for you.</p>

      <h2>Who normally needs to pay?</h2>
      <p>The fee applies to students completing a bachelor's or master's degree at a Finnish university or university of applied sciences who have registered as attending for the term.</p>
      <p>It funds healthcare services provided by the Finnish Student Health Service, usually known as FSHS or YTHS. You must normally pay even if you do not plan to use those services, or if you also have access to occupational healthcare, private insurance or another health service.</p>
      <p>Students studying at an open university, completing a postgraduate degree or registered as non-attending are not covered in the same way. Exchange students coming from another EU or EEA country, Switzerland, Great Britain or Northern Ireland may also be exempt when their social-security coverage remains elsewhere.</p>
      <p>If you are unsure, use Kela's official eligibility guidance rather than guessing from your student card or residence status.</p>

      <h2>How to pay it</h2>
      <p>The simplest route is OmaKela. Sign in, open the section for the student healthcare fee and follow the payment instructions shown for your term.</p>
      <p>OmaKela provides the correct account details and your personal reference number. Check that you select autumn 2026 and copy the reference exactly. That is how Kela connects the payment to you.</p>
      <p>If you cannot use OmaKela, Kela also publishes bank-payment instructions. Do not send money to an account copied from an old screenshot or another student's payment, because the reference and term details matter.</p>

      <h2>What happens if you miss 15 November?</h2>
      <p>Kela adds a €5 late-payment charge and sends a reminder. If the fee remains unpaid, it can eventually be collected through enforcement without a separate court judgment.</p>
      <p>That sounds rather heavier than the original €35.35 payment, which is why it is worth sorting while the deadline is still in front of you.</p>
      <p>If you have already paid but OmaKela does not show the payment immediately, give the bank transfer time to arrive before paying again. Keep the receipt and contact Kela if the status still looks wrong.</p>

      <h2>What if your registration changed?</h2>
      <p>The important detail is whether you registered as attending by the relevant deadline. Cancelling studies, graduating or changing registration can affect the situation, but it does not automatically mean a fee already due disappears.</p>
      <p>Kela has separate rules for refunds. For example, a refund may be possible when your registration as attending is cancelled or when you later provide proof that you were covered by another country's social security and did not have to pay.</p>
      <p>Do not simply reverse a transfer or deduct the amount from another Kela payment. Check the refund rules and apply through the official route.</p>

      <h2>A quick checklist</h2>
      <ul>
        <li>Confirm that you are registered as attending for autumn 2026.</li>
        <li>Check whether one of Kela's exemption rules applies to you.</li>
        <li>Pay €35.35 by 15 November if required.</li>
        <li>Use OmaKela and your own reference number.</li>
        <li>Keep the payment confirmation.</li>
      </ul>
      <p>If you are an international student, this is also a useful reminder to check that your Finnish address and contact information are current. Official systems do not always share every detail instantly, and the easiest paperwork is usually the paperwork handled before the deadline.</p>
    `,
    sources: [
      { name: 'Kela: the student healthcare fee deadline is approaching', url: 'https://www.kela.fi/news/due-date-for-the-student-healthcare-fee-approaches-remember-to-pay-in-time' },
      { name: 'Kela: healthcare fee for students in higher education', url: 'https://www.kela.fi/student-healthcare-fee-higher-education' },
    ],
  },
  {
    slug: 'kela-public-notices-2026',
    title: 'Kela has started publishing notices for customers it cannot reach. Here is what that means',
    standfirst: 'The new online list is a last-resort way of serving a decision when Kela has no working address or electronic contact. It does not reveal which benefit the decision concerns.',
    category: 'Life admin',
    publishedAt: '2026-11-09T07:30:00.000Z',
    readingMinutes: 6,
    featured: true,
    practicalSummary: 'Since 5 November, Kela can publish a limited public notice when it has made a decision but cannot reach the customer by post or electronically. The notice shows a name, decision number and issue date, not the benefit or result. A person is considered notified seven days after publication, so keep your address updated with the Digital and Population Data Services Agency and your contact details current in OmaKela.',
    html: `
      <p>If you move home in Finland, updating your address is not just about making sure the electricity bill finds you.</p>
      <p>Since 5 November, Kela has a new last-resort method for decisions it cannot deliver normally. It can publish a short notice on its website naming the customer and identifying the decision.</p>
      <p>This will not affect most people. Kela says it is intended for situations where it has no usable contact information, posted letters come back or the customer does not use its electronic services. Still, the consequences of missing a decision can be important, especially when an appeal deadline is running.</p>

      <h2>What does Kela publish?</h2>
      <p>The public notice contains only the customer's name, the decision number and the date the decision was issued.</p>
      <p>It does not say which benefit or application is involved. It does not reveal whether the decision was positive or negative, how much money is involved or the reasons behind it.</p>
      <p>The actual decision remains private. A named customer can read it in OmaKela or ask Kela for it by phone or at a service point.</p>

      <h2>Why the seven-day rule matters</h2>
      <p>A customer is considered to have received the decision seven days after the notice is published. The public notice stays online for 14 days and is then removed.</p>
      <p>That legal timetable can continue even when the person has not personally spotted the list. It may affect when an appeal period begins or when another action needs to be taken.</p>
      <p>This is why the sensible response is not to start checking Kela's public-notice page every morning. It is to make sure Kela can reach you through ordinary channels.</p>

      <h2>Check these two places after moving</h2>
      <p>First, submit your notification of move to the Digital and Population Data Services Agency, known as DVV, and Posti. That updates your official address in the Population Information System.</p>
      <p>Second, sign in to OmaKela and check the contact information Kela uses. If you rely on electronic decisions, make sure your phone number and email address are current and that you still have access to them.</p>
      <p>International residents sometimes keep an old number for messaging apps long after replacing the Finnish SIM attached to official accounts. That is worth checking before an important application is underway.</p>

      <h2>What if you see your name?</h2>
      <p>Do not try to work out the benefit from the notice, because it deliberately does not contain that information.</p>
      <p>Sign in to OmaKela and look for the decision. If you cannot access OmaKela, contact Kela or visit a service point and have identification ready. Use the decision number from the public notice so staff can locate the correct document.</p>
      <p>If the decision includes a deadline, check the issue date and act promptly. Ask Kela what the notice date means for any appeal or further information it requires.</p>

      <h2>A privacy point</h2>
      <p>Seeing names on an official website can understandably feel uncomfortable. Kela's approach limits the published information and removes it after 14 days. The notice is there to complete formal service of a decision, not to create a searchable history of somebody's benefits.</p>
      <p>Do not share screenshots of the list in community groups or speculate about why a person appears. A name on the page tells you nothing about their benefit, finances or the outcome of their case.</p>

      <h2>The short version</h2>
      <p>This is a safety net for failed contact, not a new normal delivery method.</p>
      <p>Keep your official address up to date, check your OmaKela contact details and open decisions when notifications arrive. If life has been messy and you suspect Kela has been trying to reach you, the public-notice page is now one more place to check.</p>
    `,
    sources: [
      { name: 'Kela: public notices for customers who cannot otherwise be reached', url: 'https://www.kela.fi/news/kela-to-publish-public-notices-of-its-decisions-on-its-website-for-customers-who-cannot-be-reached-otherwise' },
      { name: 'DVV: notification of move', url: 'https://dvv.fi/en/moving' },
    ],
  },
  {
    slug: 'kela-taxi-numbers-2027',
    title: 'Kela taxi numbers change in January. Save the new Uusimaa numbers now',
    standfirst: 'The regional dispatch numbers will change across mainland Finland on 1 January 2027. The old numbers still apply to journeys made during 2026.',
    category: 'Life admin',
    publishedAt: '2026-11-09T07:00:00.000Z',
    readingMinutes: 7,
    featured: false,
    practicalSummary: 'New Kela taxi dispatch numbers take effect on 1 January 2027. In Uusimaa, Taksi Helsinki will use 0800 051 70 in Finnish and 0800 051 71 in Swedish. KSMYK will use 0800 504 050 in Finnish and 0800 504 055 in Swedish. Use the current numbers for journeys during 2026. New numbers can be used from 21 December to book journeys taking place in January.',
    html: `
      <p>If you use a Kela-reimbursed taxi for healthcare or rehabilitation, the number saved in your phone may stop being the right one when the year changes.</p>
      <p>Kela's taxi contracts are changing on 1 January 2027. Every regional dispatch number in mainland Finland will change, while Åland keeps its existing arrangement.</p>
      <p>There is no need to switch early. Current numbers remain correct for journeys made in 2026. The new numbers can be used from 21 December, but only when booking a journey that will take place in January or later.</p>

      <h2>The new numbers for Uusimaa</h2>
      <p>People living in Helsinki, Espoo, Vantaa and the rest of Uusimaa will continue to have two contracted dispatch centres to choose from.</p>
      <ul>
        <li><strong>Taksi Helsinki, Finnish:</strong> 0800 051 70</li>
        <li><strong>Taksi Helsinki, Swedish:</strong> 0800 051 71</li>
        <li><strong>KSMYK, Finnish:</strong> 0800 504 050</li>
        <li><strong>KSMYK, Swedish:</strong> 0800 504 055</li>
      </ul>
      <p>English-speaking customers can call a Finnish-language dispatch number and ask for service in English. Kela also publishes separate SMS numbers and regional details, so check the official list if you book by text message or live outside Uusimaa.</p>

      <h2>Why you must use the contracted dispatch service</h2>
      <p>A Kela taxi is not simply any taxi taken to a medical appointment.</p>
      <p>To receive the direct reimbursement and pay only the customer copayment, you normally need to order through one of Kela's contracted regional dispatch centres. Booking another taxi independently can leave you responsible for the full fare.</p>
      <p>The maximum copayment remains €25 for a one-way journey. Eligible copayments count towards the annual out-of-pocket maximum, which remains €300. Once that maximum is reached, qualifying Kela taxi journeys are generally provided without another copayment for the rest of the calendar year.</p>

      <h2>When should you book?</h2>
      <p>Kela advises customers to book by 14:00 on the day before the journey. If you know several appointment times in advance, you can book them together.</p>
      <p>Same-day bookings are possible when a journey could not have been arranged earlier, but allow extra time. Dispatch centres may combine passengers travelling in the same direction when their medical needs allow it.</p>
      <p>Tell the dispatcher about mobility equipment, an assistance dog, the need for an accessible vehicle, a companion or any other support requirement when you book. Do not assume an old note will automatically follow you into the new contract period.</p>

      <h2>If you use a familiar driver</h2>
      <p>Some customers have the right to use a familiar taxi driver because of an individual health or communication need.</p>
      <p>Kela advises these customers to confirm that their driver will continue under one of the new contracted service providers. A familiar driver can only keep handling Kela journeys if the required contractual arrangement is in place for 2027.</p>
      <p>It is worth having that conversation before the Christmas break rather than discovering a problem on the morning of the first January appointment.</p>

      <h2>What to do before New Year</h2>
      <ul>
        <li>Keep using the current dispatch number for every journey taking place in 2026.</li>
        <li>Save the new number for your chosen dispatch centre under a clearly dated contact name.</li>
        <li>From 21 December, use the new number only for a journey taking place in January 2027 or later.</li>
        <li>Check the official regional list if you live outside Uusimaa or book by SMS.</li>
        <li>Confirm familiar-driver and accessibility arrangements early.</li>
      </ul>
      <p>The change is mostly administrative, but for somebody relying on a taxi to reach dialysis, rehabilitation or another regular appointment, a wrong phone number is not a small inconvenience. Save the correct one now, share it with the family member or support worker who handles bookings and leave one less job for the first week of January.</p>
    `,
    sources: [
      { name: 'Kela: new dispatch numbers for Kela taxis from January 2027', url: 'https://www.kela.fi/news/new-dispatch-numbers-for-kela-taxis-as-of-january-2027' },
      { name: 'Kela: booking a taxi', url: 'https://www.kela.fi/taxi-how-to-book-a-taxi' },
    ],
  },
]
