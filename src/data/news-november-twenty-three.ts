import type { SeedNewsStory } from './news-stories'

export const novemberTwentyThreeStories: SeedNewsStory[] = [
  {
    slug: 'finland-fi-alert-phone-warning-test-2026',
    title: "Finland's new FI-Alert can warn your phone without an app. Here is what to expect",
    standfirst: 'A nationwide test on 24 November may make your phone sound unexpectedly. Here is how the new warning works, what a real alert means and why international residents should pay attention.',
    category: 'Life admin',
    publishedAt: '2026-11-23T09:00:00.000Z',
    readingMinutes: 7,
    featured: true,
    practicalSummary: 'FI-Alert sends official warnings to compatible 4G and 5G phones in a chosen area without an app or registration. A second nationwide test is scheduled for 24 November. Read the message before reacting, and do not call 112 simply to ask whether an alert is real.',
    html: `
      <p>There is a new kind of emergency alert arriving on phones in Finland, and you do not need to download anything to receive it.</p>
      <p>FI-Alert uses the mobile network to send an official warning directly to phones in a particular geographical area. It is designed for situations where life, health or major property could be in danger, such as a serious fire producing toxic smoke, a chemical accident or another fast-moving emergency.</p>
      <p>The system is being introduced nationally in November. Tests were announced for 17 and 24 November, so your phone may display a test message or make an unfamiliar warning sound without there being a real emergency.</p>
      <p>For international residents, the useful part is simple: FI-Alert does not depend on knowing which Finnish app to install before something happens.</p>

      <h2>How FI-Alert works</h2>
      <p>The system uses the 4G and 5G mobile networks to send a warning to compatible phones in a chosen area.</p>
      <p>It does not use your phone number in the way an ordinary text message does. You do not need to create an account, share your location with an app or register for a service. Your phone receives the message because it is connected to a mobile network inside the affected area.</p>
      <p>That also means the warning can reach visitors, commuters and newly arrived residents, not only people whose permanent address is nearby.</p>
      <p>The message may arrive with a siren-like sound lasting about ten seconds, even when the phone is set to silent. That is intentional. An emergency warning is meant to interrupt what you are doing.</p>

      <h2>What should you do when one arrives?</h2>
      <p>First, read the message rather than assuming it is another test.</p>
      <p>A real warning will explain what has happened and tell people in the affected area what to do. Follow those instructions. The correct action may be to move indoors, close doors and windows, turn off ventilation, avoid a particular area or follow updates from the authorities.</p>
      <p>Do not call 112 merely to ask whether the warning is real. Finland's emergency number is for situations where urgent help is needed. Calling for confirmation can make it harder for people in immediate danger to get through.</p>
      <p>If the message is clearly marked as a test, you normally do not need to do anything.</p>

      <h2>Does this replace the 112 Suomi app?</h2>
      <p>No. FI-Alert adds another warning route rather than replacing the systems already in use.</p>
      <p>Emergency warnings can also appear through:</p>
      <ul>
        <li>radio</li>
        <li>television when the authority considers it necessary</li>
        <li>teletext page 112</li>
        <li>the 112 Suomi app</li>
        <li>official websites such as 112.fi and pelastustoimi.fi</li>
        <li>official social-media channels</li>
      </ul>
      <p>The 112 Suomi app remains useful because it can deliver alerts for your location and provides other emergency information. Make sure it has permission to use your location and send notifications if you rely on it.</p>
      <p>Radio and official websites also matter. A phone network can be congested, a battery can be flat and a translated explanation may appear through a different official channel after the first urgent message.</p>

      <h2>What language will the warning use?</h2>
      <p>Authorities' statutory emergency-warning languages are Finnish and Swedish. Helsinki says it publishes important city instructions in Finnish, Swedish and English, with other languages used when needed.</p>
      <p>That does not guarantee that the first alert on your phone will include English.</p>
      <p>If you receive a warning you do not understand, do not ignore it. Open an official source such as 112.fi, pelastustoimi.fi, the City of Helsinki website or Yle and look for the same incident. Use a translation tool if necessary, but base your actions on the official message rather than an unverified social-media post.</p>
      <p>It is worth learning a few pieces of warning vocabulary too. “Vaaratiedote” means emergency warning. “Siirry sisälle” means go indoors. “Sulje ilmanvaihto” means switch off or close ventilation.</p>

      <h2>What about the outdoor warning siren?</h2>
      <p>FI-Alert does not replace Finland's public warning signal.</p>
      <p>A real public warning signal is a rising and falling outdoor siren lasting one minute. If you hear it, go indoors immediately and follow official instructions.</p>
      <p>The regular test signal is different. It is a steady sound lasting seven seconds, normally tested at noon on the first Monday of the month unless that day is a public holiday. You do not need to act when you hear the short test.</p>
      <p>The phone alert and the outdoor siren are two parts of the same safety system. One may reach you more clearly than the other depending on where you are.</p>

      <h2>A sensible two-minute check</h2>
      <p>You do not need to become a preparedness enthusiast overnight. A few small checks are enough:</p>
      <ol>
        <li>Keep your phone's operating system reasonably current.</li>
        <li>Install or update 112 Suomi and allow notifications and location access if you want its alerts.</li>
        <li>Save 112.fi and your municipality's English-language safety page.</li>
        <li>Know how to turn off ventilation in your home.</li>
        <li>Keep a charger or power bank available during longer outages.</li>
      </ol>
      <p>If you live with children, housemates or relatives who do not understand Finnish or Swedish, talk about how you will translate and share an urgent instruction.</p>

      <h2>What happens next</h2>
      <p>The announced November tests help authorities check how the new warning channel works across phones and networks. Another test is scheduled for 24 November.</p>
      <p>If your phone makes an alarming noise that day, read the message before panicking. If it says it is a test, no action is needed. If a future warning is real, follow the instructions and check official channels for updates.</p>
      <p>The best thing about FI-Alert is that it removes one barrier. You do not need to know the Finnish system in advance for the first warning to find you. You only need to recognise that the message matters.</p>
    `,
    sources: [
      { name: 'City of Helsinki: New system to warn citizens to launch in November', url: 'https://www.hel.fi/en/news/new-system-to-warn-citizens-to-launch-in-november' },
      { name: 'Suomi.fi: Emergency warnings, the public warning signal and early warnings', url: 'https://www.suomi.fi/citizen/safety-and-security/emergencies-and-security/guide/what-to-do-in-an-emergency/emergency-warnings-the-public-warning-signal-and-early-warnings' },
      { name: 'Suomi.fi: Guidance on preparedness and acting in crises', url: 'https://www.suomi.fi/guides/preparedness/how-to-prepare-for-incidents-and-crises/general-instructions-on-preparedness-home-emergency-supplies-and-on-what-to-do-in-different-situations' },
    ],
  },
  {
    slug: 'hsl-distance-based-fare-pilot-2026',
    title: 'HSL is testing fares based on how far you travel',
    standfirst: 'HSL Flex will charge selected passengers by distance for seven months. Invitations start on 24 November, but this is a trial rather than the end of the ABCD zones.',
    category: 'Helsinki',
    publishedAt: '2026-11-23T09:20:00.000Z',
    readingMinutes: 6,
    featured: true,
    practicalSummary: 'The pilot fare starts at €1.95 for the first kilometre and adds €0.20 per extra kilometre, with a €5 maximum per journey and a €120 monthly cap. Only invited adults can apply, and applications close on 6 December.',
    html: `
      <p>Helsinki's familiar ABCD fare zones are not disappearing. HSL is, however, about to test a very different way of paying for public transport.</p>
      <p>The seven-month experiment will charge participating passengers according to the distance between the start and end of a journey. It will run through a separate mobile application called HSL Flex, with between 5,000 and 7,000 adults expected to take part.</p>
      <p>If you regularly make short local journeys, the idea may immediately sound appealing. Before downloading anything, though, there are a few important details to understand. Participation is limited, invitations are being sent to a selected group and the trial does not mean HSL has decided to abandon the current zone system.</p>

      <h2>How the pilot fare works</h2>
      <p>The standard pilot fare begins at €1.95. That covers the first kilometre of a journey. After that, the fare rises by €0.20 for every additional kilometre.</p>
      <p>Distance is calculated in a straight line between the boarding stop and the final stop, rather than by measuring every turn made by the vehicle. A single journey cannot cost more than €5.</p>
      <p>HSL also says regular users will receive increasing monthly discounts of up to 80 per cent. Total monthly spending is capped at €120.</p>
      <p>That protection matters. Without it, a distance-based system could become difficult to budget for, especially for somebody travelling different routes every week. The cap gives trial users a clear maximum, although it is still higher than some current season-ticket prices.</p>
      <p>The exact value will depend on where you live, where you work and how often you travel. Somebody making frequent short journeys within one neighbourhood may have a very different experience from somebody commuting across the region every weekday.</p>

      <h2>Who can join</h2>
      <p>Participants must be at least 18 years old and live in one of HSL's member municipalities. The pilot is available in Finnish and English.</p>
      <p>HSL will begin sending invitations on Tuesday 24 November to selected customers who have allowed survey invitations in their HSL account. Receiving an invitation does not automatically place somebody in the experiment. Invited customers need to apply by 6 December, and HSL will then select the final group.</p>
      <p>If you are interested, it is worth checking the communication and survey settings in your HSL account. An invitation will only go to people who have given HSL permission to contact them for surveys.</p>
      <p>People whose discounted travel entitlement is available only through an HSL card cannot participate. That restriction may affect some pensioners and other passengers in discount groups, so do not assume that every existing HSL customer is eligible.</p>

      <h2>Why HSL is running the test</h2>
      <p>The present fare system divides the region into zones. That is fairly easy to understand once you are used to it, but the boundary can sometimes make two similar journeys cost very different amounts.</p>
      <p>A distance-based model aims to make the price correspond more closely to the journey itself. HSL wants real-world information on how passengers respond, whether the system feels fair and how it affects travel choices.</p>
      <p>This trial is research. HSL has not announced a decision to replace ABCD tickets, and the prices used in HSL Flex should not be read as a preview of an approved future fare table.</p>
      <p>That distinction is important because experiments often attract headlines that make a possible change sound settled. For now, ordinary HSL tickets and travel cards continue as normal.</p>

      <h2>What participants will need to do</h2>
      <p>Selected users will purchase journeys in the HSL Flex application rather than the standard HSL app. They should read the pilot instructions carefully, particularly the rules for starting and finishing a journey, transfers and ticket inspection.</p>
      <p>It is also sensible to keep an eye on spending during the first month. A passenger who currently uses a season ticket should compare the trial cost with what they would normally pay, rather than judging each individual fare in isolation.</p>
      <p>The pilot gives HSL useful data, but it can also give participants a clearer picture of their own travel. Short journeys that feel expensive under the zone system may become cheaper, while longer or more complicated travel patterns may not.</p>

      <h2>What happens next</h2>
      <p>Applications from invited customers close on 6 December. HSL will select 5,000 to 7,000 participants, and the experiment will run for seven months.</p>
      <p>After that, HSL will have to assess the results alongside questions about accessibility, discounts, privacy, ease of use and how any distance system would work for people without a suitable smartphone.</p>
      <p>For most passengers, nothing changes today. If an invitation lands in your inbox and you are curious, the pilot is a chance to try a different system before any wider decision is made.</p>
    `,
    sources: [
      { name: 'HSL: HSL to study distance-based pricing', url: 'https://www.hsl.fi/en/hsl/news/news/2026/11/hsl-to-study-distance-based-pricing' },
    ],
  },
  {
    slug: 'eu-social-security-rules-2028-finland',
    title: 'EU social-security rules are changing, but most changes will wait until 2028',
    standfirst: 'The revised rules affect people moving and working across borders, from A1 certificates to unemployment and family benefits. Most of the practical changes begin after a two-year transition.',
    category: 'Life admin',
    publishedAt: '2026-11-23T09:40:00.000Z',
    readingMinutes: 7,
    featured: true,
    practicalSummary: 'Most people do not need to file anything now. From November 2028, A1 certificates will generally need to be requested before work abroad begins, and posted workers will usually need three months of prior coverage in the sending country.',
    html: `
      <p>If you live in Finland and work in another European country, move between countries or receive benefits connected to more than one country, the rules that decide which social-security system covers you are getting an update.</p>
      <p>The revised EU regulations entered into force on 1 November 2026. Most of the practical changes will not start to apply until 2 November 2028, following a two-year transition period.</p>
      <p>That means there is no sudden change to everybody's benefits this week. It does mean employers, posted workers, self-employed people and anyone regularly working across borders should know that new rules are on the way.</p>

      <h2>What these EU rules actually do</h2>
      <p>The EU does not replace every member country's social-security system with one common system. Instead, coordination rules decide which country's legislation applies when somebody's life or work crosses a border.</p>
      <p>They are designed to stop people from losing their rights simply because they move within Europe. They also help prevent somebody from being insured twice or falling between two national systems.</p>
      <p>The rules apply within the EU and also cover the European Economic Area and Switzerland. Kela says they can apply in certain situations involving movement between Finland and the United Kingdom as well, although changes concerning the EEA, Switzerland and the UK require their own approval processes.</p>

      <h2>Which benefits are affected</h2>
      <p>Kela says the amendments cover several areas, including unemployment benefits, healthcare, long-term care and family benefits.</p>
      <p>There will also be changes concerning people who work outside the country where they live. This includes posted workers sent abroad temporarily by an employer, self-employed people taking work abroad and people who regularly work in more than one country.</p>
      <p>The detailed effect will depend on the person's circumstances. Someone moving permanently, a consultant working in two countries and an employee sent on a six-month assignment will not necessarily follow the same rules.</p>
      <p>Kela has said it will update its benefit guidance as implementation progresses. That is important because not all the practical details are settled yet. The European Commission is still preparing implementing rules, and Finland will need to make some changes to national benefit legislation.</p>

      <h2>A1 certificates will generally need to be requested in advance</h2>
      <p>One of the clearest changes concerns the A1 certificate. The certificate shows which country's social-security legislation covers a person while they work across borders.</p>
      <p>Under the revised rules, posted employees and self-employed people will generally need to apply for the certificate before the work abroad begins. If the final certificate cannot be issued immediately, the applicant must be given confirmation that the application is being processed.</p>
      <p>This places more responsibility on employers and workers to plan ahead. Leaving the question until after the trip or assignment begins may become riskier.</p>
      <p>There will be an exception for some very short periods of work. According to the Finnish Centre for Pensions, advance notification or an A1 certificate will generally not be required for an ordinary business trip or work lasting no more than three consecutive working days within a 30-day period.</p>
      <p>That exception will not apply to construction. Anyone working in construction should therefore be particularly careful not to assume that a short trip is automatically exempt.</p>

      <h2>The three-month prior-coverage rule</h2>
      <p>The standard maximum posting period of 24 months will remain in place. However, the usual prior-coverage requirement is set to become stricter.</p>
      <p>The Finnish Centre for Pensions says posted workers and self-employed people will generally need to have been covered by the sending country's social-security legislation for at least three months before working abroad. The present practice normally uses a one-month period.</p>
      <p>For employers recruiting somebody specifically for an overseas assignment, that difference could matter. It may affect whether the person can remain covered by Finnish social security during the posting.</p>

      <h2>More information will move between authorities</h2>
      <p>The revised regulations also allow wider electronic information exchange between social-security institutions.</p>
      <p>The aim is to pay benefits correctly, resolve disputes more efficiently and prevent errors and fraud. Electronic processing of A1 certificates will expand, and the rules will add more detailed procedures for correcting or withdrawing a certificate.</p>
      <p>There is also a change to incorrectly paid social-insurance contributions. If authorities later decide that another country's legislation should have applied, contributions may be transferred between the relevant institutions rather than first being refunded to the employer or worker.</p>
      <p>For individuals, smoother official communication could reduce the number of times the same information has to be proved. It also means people should be especially careful to keep their address, work and family details accurate in every country involved.</p>

      <h2>What should expats in Finland do now?</h2>
      <p>Most people do not need to file anything today purely because the regulations have changed.</p>
      <p>If you expect to work abroad from Finland, send an employee abroad, work remotely in more than one country or return to Finland while keeping employment elsewhere, put the 2028 changes on your planning list.</p>
      <p>Before any cross-border work begins, check the current guidance from the Finnish Centre for Pensions and Kela. Do not rely on an old arrangement or advice given for somebody else's situation.</p>
      <p>It is also worth keeping employment contracts, travel dates, remote-work agreements and records showing where work was physically performed. Those details can affect which country's system applies.</p>

      <h2>What happens next</h2>
      <p>Most of the new rules are due to apply from 2 November 2028. Finland and other countries will use the transition period to update legislation, electronic systems and official guidance.</p>
      <p>The practical advice will become more detailed as that work continues. Expats.fi will revisit the changes before they take effect, particularly the final A1 procedure and the rules for unemployment, healthcare and family benefits.</p>
      <p>For now, the useful message is simple: the system is changing, but not overnight. Anyone whose work or benefits cross a national border should start planning earlier and check the official rules again before the 2028 implementation date.</p>
    `,
    sources: [
      { name: 'Kela: EU social security rules about to change', url: 'https://www.kela.fi/news/eu-social-security-rules-about-to-change-most-amendments-will-start-to-apply-in-late-2028' },
      { name: 'Finnish Centre for Pensions: Changes to EU social-security regulations in 2028', url: 'https://www.etk.fi/en/international-affairs/working-abroad/changes-to-eus-social-security-regulations-in-2028/' },
    ],
  },
]
