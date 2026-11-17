import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

import { businessImage } from '@/components/BusinessCard'
import { HelsinkiNow } from '@/components/HelsinkiNow'
import { JsonLd } from '@/components/JsonLd'
import { eventDateParts } from '@/data/events'
import { articleSeoTitle } from '@/lib/article-journeys'
import { getArticles, getBusinesses, getEvents, getNewsStories, labels } from '@/lib/content'
import { getNewsImage } from '@/lib/news-images'
import { defaultSocialImage, publisher, siteUrl } from '@/lib/seo'
import { getHelsinkiWeather } from '@/lib/weather'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Expats.fi | Living in Finland, made clearer',
    description: 'Friendly, practical help for moving to Finland, building a life here and making the most of Helsinki.',
    url: '/',
    images: [{ url: defaultSocialImage, width: 1600, height: 1067, alt: 'Helsinki Cathedral beneath a blue Finnish sky' }],
  },
}

const practicalHubs = [
  { number: '01', label: 'Start here', detail: 'The first 90 days, official systems and what to do in what order', href: '/start-here/', icon: 'flag' },
  { number: '02', label: 'Housing', detail: 'Finding a home, reading the lease and sorting problems early', href: '/housing/', icon: 'home' },
  { number: '03', label: 'Family', detail: 'Healthcare, daycare, schools, support and the admin nobody explains', href: '/family/', icon: 'people' },
  { number: '04', label: 'Learn Finnish', detail: 'Free resources, courses, apps, podcasts and places to practise', href: '/learn-finnish/', icon: 'speech' },
  { number: '05', label: 'Study in Finland', detail: 'Degrees, vocational routes, integration training and flexible ways to learn', href: '/study/', icon: 'book' },
  { number: '06', label: 'Work and money', detail: 'Jobs, tax, banking, benefits and getting your footing', href: '/resources/?category=Work%20%26%20money#resource-library', icon: 'case' },
  { number: '07', label: 'How Finland works', detail: 'Directness, punctuality, friendship and the cultural bits between the rules', href: '/culture/', icon: 'spark' },
  { number: '08', label: 'When things go wrong', detail: 'Urgent health, housing trouble, scams, work problems and the right place to ask for help', href: '/help/', icon: 'lifebuoy' },
] as const

const helsinkiHubs = [
  { label: 'Events', detail: 'What is actually happening around Helsinki', href: '/events/', image: '/images/heroes/events-evening-gathering.webp' },
  { label: 'Food & Drink', detail: 'Finnish dishes and recipes, plus cafés and places worth planning dinner around', href: '/eats/', image: '/images/heroes/eats-cafe.webp' },
  { label: 'Neighbourhoods', detail: 'Eleven local guides with walks, food and honest area notes', href: '/areas/', image: '/images/heroes/areas-helsinki-street.webp' },
  { label: 'Things to do', detail: 'Museums, islands, saunas, libraries and family days out', href: '/explore/', image: '/images/heroes/explore-suomenlinna.webp' },
  { label: 'Sports and activities', detail: 'Teams, beginner sessions and places to get moving', href: '/sports/', image: null },
  { label: 'Meet people', detail: 'Language cafés, groups, volunteering and routes into community', href: '/community/', image: '/images/heroes/community-city-friends.webp' },
] as const

const needRoutes = [
  { label: 'I’ve just arrived', detail: 'Start with the first 90 days', href: '/start-here/first-90-days-in-finland/' },
  { label: 'I need work', detail: 'Jobs, tax and money', href: '/resources/?category=Work%20%26%20money#resource-library' },
  { label: 'I have kids', detail: 'Family life and services', href: '/family/' },
  { label: 'I need help', detail: 'Find the right support', href: '/help/' },
  { label: 'I want to get out', detail: 'Events and things to do', href: '/events/' },
] as const

const arrivalSteps = [
  { title: 'Before you arrive', detail: 'Legal route, documents and a sensible buffer' },
  { title: 'The first two weeks', detail: 'Registration, address, tax and daily basics' },
  { title: 'By day 90', detail: 'Banking, healthcare, language and a routine' },
] as const

const twoDigits = (index: number) => String(index + 1).padStart(2, '0')

function QuickIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    flag: <><path d="M5 21V4M5 5h12l-2 4 2 4H5" /></>,
    home: <><path d="m3 11 9-7 9 7v9H3Z" /><path d="M9 20v-6h6v6" /></>,
    people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2" /><path d="M3 20c0-4 2-6 6-6s6 2 6 6M15 15c4 0 6 2 6 5" /></>,
    speech: <><path d="M4 5h16v11H9l-5 4Z" /><path d="M8 9h8M8 12h5" /></>,
    book: <><path d="M4 4h6c2 0 3 1 3 3v13c0-2-1-3-3-3H4Z" /><path d="M20 4h-6c-1 0-1 .3-1 1v15c0-2 1-3 3-3h4Z" /></>,
    case: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 12h18" /></>,
    spark: <><path d="M12 2c0 6-3 9-9 10 6 1 9 4 9 10 0-6 3-9 9-10-6-1-9-4-9-10Z" /></>,
    lifebuoy: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="m5.6 5.6 4.3 4.3M14.1 14.1l4.3 4.3M18.4 5.6l-4.3 4.3M9.9 14.1l-4.3 4.3" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

export default async function HomePage() {
  const hasDatabase = Boolean(process.env.DATABASE_URL)
  const [articles, businesses, upcoming, newsStories, weather] = await Promise.all([
    hasDatabase ? getArticles({ limit: 3 }) : Promise.resolve([]),
    getBusinesses({ limit: 3 }),
    hasDatabase ? getEvents({ upcoming: true }) : Promise.resolve([]),
    hasDatabase ? getNewsStories({ limit: 1 }) : Promise.resolve([]),
    getHelsinkiWeather(),
  ])
  const upcomingEvents = upcoming.slice(0, 3)
  const latestStory = newsStories[0]
  const latestStoryImage = latestStory ? getNewsImage(latestStory.slug) : null

  return (
    <main id="main">
      <JsonLd data={[
        { '@context': 'https://schema.org', ...publisher, description: 'Friendly, practical help for moving to Finland, building a life here and making the most of Helsinki.' },
        { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Expats.fi', url: siteUrl, publisher, inLanguage: 'en', potentialAction: { '@type': 'SearchAction', target: `${siteUrl}/search?q={search_term_string}`, 'query-input': 'required name=search_term_string' } },
      ]} />
      <section className="home-hero">
        <div className="shell home-hero__inner">
          <div className="home-hero__copy">
            <p className="home-hero__kicker"><span aria-hidden="true" />Welcome to Expats.fi<small>60.17° N · 24.94° E</small></p>
            <h1>Finland is easier when someone shows you <em>where to start.</em></h1>
            <p className="home-hero__lede">We are building the useful, friendly guide we wish we had when we arrived: clear help with the serious stuff, good reasons to get out of the house and a place to find the people making life here better.</p>
            <form className="search-box" action="/search/" method="get" role="search" data-analytics-event="search_submitted" data-analytics-section="home">
              <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 4 4" /></svg>
              <label className="sr-only" htmlFor="home-search">Search Expats.fi</label>
              <input id="home-search" name="q" placeholder="What are you trying to sort out?" />
              <button type="submit">Search</button>
            </form>
            <div className="popular-links"><span>Good places to begin</span><Link href="/start-here/first-90-days-in-finland/">your first 90 days</Link><Link href="/community/">meet people</Link><Link href="/learn-finnish/">learn Finnish</Link><Link href="/study/">study in Finland</Link><Link href="/events/">what’s on</Link><Link href="/areas/">explore an area</Link></div>
          </div>
          <div className="home-hero__media">
            <Image
              src="/images/heroes/home-helsinki-cathedral-v2.webp"
              alt="Helsinki Cathedral beneath a blue Finnish sky"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span className="home-hero__wash" aria-hidden="true" />
            <svg className="home-hero__ring" viewBox="0 0 120 120" aria-hidden="true">
              <defs><path id="home-hero-ring" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs>
              <text><textPath href="#home-hero-ring" textLength="286">INDEPENDENT · FREE TO USE · SOURCE CHECKED · </textPath></text>
            </svg>
            <HelsinkiNow initialNow={new Date().toISOString()} weather={weather} />
          </div>
        </div>
        <ul className="shell home-trust-points" aria-label="About Expats.fi">
          <li><strong>Independent</strong> <span>Built by two Kiwi expats</span></li>
          <li><strong>Free to use</strong> <span>No account needed for our guides</span></li>
          <li><strong>Source checked</strong> <span>Official links where they matter</span></li>
        </ul>
      </section>

      <section className="home-band home-needs" aria-labelledby="pathways-heading">
        <div className="shell section">
          <div className="section-heading">
            <div><p className="eyebrow">Living in Finland</p><h2 id="pathways-heading">What do you need help with <em>today?</em></h2></div>
            <p>Pick the sentence that sounds most like today. We will take you to the sensible first stop.</p>
          </div>
          <div className="home-need-routes">
            {needRoutes.map((route, index) => (
              <Link href={route.href} key={route.label}>
                <span className="home-need-routes__number">{twoDigits(index)}</span>
                <strong>{route.label}</strong>
                <span className="home-need-routes__detail">{route.detail}</span>
                <i aria-hidden="true">→</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-arrival" aria-labelledby="arrival-heading">
        <div className="home-arrival__numeral" aria-hidden="true">90</div>
        <div className="shell home-arrival__inner">
          <p className="eyebrow">New to Finland?</p>
          <h2 id="arrival-heading">Your first 90 days, <em>in the right order.</em></h2>
          <p>One calm route through Migri, DVV, tax, banking, Kela, healthcare and the ordinary jobs that turn arriving into actually living here.</p>
          <Link className="button" href="/start-here/first-90-days-in-finland/">Open the 90-day guide <span aria-hidden="true">→</span></Link>
          <ol className="home-arrival__steps">
            {arrivalSteps.map((step, index) => (
              <li key={step.title}><span>{twoDigits(index)}</span><strong>{step.title}</strong><small>{step.detail}</small></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell section home-topics" aria-labelledby="topics-heading">
        <div className="section-heading">
          <h2 id="topics-heading">Or browse everything <em>by topic</em></h2>
        </div>
        <div className="home-hub-grid">
          {practicalHubs.map((hub) => (
            <Link href={hub.href} key={hub.label}>
              <div><QuickIcon name={hub.icon} /><span>{hub.number}</span></div>
              <strong>{hub.label}</strong><small>{hub.detail}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-helsinki" aria-labelledby="helsinki-heading">
        <div className="shell section">
          <div className="section-heading">
            <div><p className="eyebrow">Make a life here</p><h2 id="helsinki-heading">Go somewhere.<br />Eat something.<br /><em>Meet somebody.</em></h2></div>
            <p>Life in Finland should not be one endless admin queue. These are the doors into Helsinki we keep opening.</p>
          </div>
          <div className="home-helsinki-grid">
            {helsinkiHubs.map((hub, index) => (
              <Link href={hub.href} key={hub.label}>
                {hub.image ? (
                  <>
                    <Image src={hub.image} alt="" fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                    <span className="home-helsinki-grid__wash" aria-hidden="true" />
                  </>
                ) : <span className="home-helsinki-grid__rings" aria-hidden="true" />}
                <span className="home-helsinki-grid__number">{twoDigits(index)}</span>
                <strong>{hub.label}</strong>
                <small>{hub.detail}</small>
                <span className="home-helsinki-grid__cta">Open the hub →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section home-this-week" aria-labelledby="home-events-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Helsinki, right now</p><h2 id="home-events-heading">A reason to <em>leave the apartment.</em></h2></div>
          <Link className="text-link" href="/events/">Explore all events <span aria-hidden="true">→</span></Link>
        </div>
        <div className="home-week">
          <Link className="home-lead" href={latestStory ? `/news/${latestStory.slug}/` : '/news/'}>
            <span className="home-lead__image">
              <Image src={latestStoryImage?.src || '/images/heroes/news-phone-coffee.webp'} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
              {latestStory && <span className="home-lead__badge">New</span>}
            </span>
            <span className="home-lead__meta">Fresh from the news desk{latestStory ? ` · ${latestStory.readingMinutes} min read` : ''}</span>
            <strong>{latestStory?.title || 'The Finland stories that actually affect life here.'}</strong>
            <span className="home-lead__cta">{latestStory ? 'Read the story' : 'Read the news'} →</span>
          </Link>
          <div className="home-event-list">
            {upcomingEvents.map((event) => {
              const date = eventDateParts(event)
              return (
                <Link href={`/events/${event.slug}/`} key={event.slug} data-analytics-event="event_opened" data-analytics-label={event.slug} data-analytics-position="home_list">
                  <span className="home-event-list__date" aria-hidden="true"><strong>{date.day}</strong><span>{date.month}</span></span>
                  <span className="home-event-list__body">
                    <span className="home-event-list__meta">{event.category} · {event.district}</span>
                    <strong>{event.title}</strong>
                    <span className="home-event-list__blurb">{event.blurb}</span>
                    <span className="home-event-list__cta">{event.dateLabel} · Plan your visit →</span>
                  </span>
                </Link>
              )
            })}
            {upcomingEvents.length === 0 && (
              <Link href="/events/">
                <span className="home-event-list__date" aria-hidden="true"><strong>→</strong></span>
                <span className="home-event-list__body">
                  <span className="home-event-list__meta">What’s on</span>
                  <strong>Find something worth leaving the apartment for.</strong>
                  <span className="home-event-list__blurb">Music, markets, sport and free days out around Helsinki, updated every week.</span>
                  <span className="home-event-list__cta">Open the events guide →</span>
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="home-band home-businesses" aria-labelledby="home-businesses-heading">
        <div className="shell section">
          <div className="section-heading">
            <div><p className="eyebrow">Expat-owned in Finland</p><h2 id="home-businesses-heading">Spend local. Meet the people <em>building here.</em></h2></div>
            <Link className="text-link" href="/businesses/">Open the directory <span aria-hidden="true">→</span></Link>
          </div>
          <div className="home-business-grid">
            {businesses.map((business) => {
              const image = businessImage(business)
              const categories = labels(business.categories)
              const locations = labels(business.locations)
              return (
                <Link className="home-business" href={`/businesses/${business.slug}/`} key={business.id} data-analytics-event="business_profile_opened" data-analytics-label={business.slug} data-analytics-position="home_card">
                  <span className="home-business__image" data-logo={!image && business.logoPath ? true : undefined}>
                    {image ? (
                      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 860px) 100vw, 33vw" unoptimized={image.unoptimized} />
                    ) : business.logoPath ? (
                      <Image src={business.logoPath} alt={business.logoAlt || `${business.name} logo`} fill sizes="(max-width: 860px) 100vw, 33vw" />
                    ) : <span aria-hidden="true">{business.name.slice(0, 1)}</span>}
                  </span>
                  <span className="home-business__meta">{[categories[0], locations.join(' · ')].filter(Boolean).join(' · ')}</span>
                  <strong>{business.name}</strong>
                  <span className="home-business__summary">{business.summary}</span>
                  <span className="home-business__cta">View business →</span>
                </Link>
              )
            })}
          </div>
          <div className="directory-callout"><div><strong>Know a business we should include?</strong><p>Help us grow the directory beyond the capital region.</p></div><Link className="button" href="/submit-business/" data-analytics-event="business_submission_started" data-analytics-section="home">List a business for free</Link></div>
        </div>
      </section>

      {articles.length > 0 && <section className="section shell home-reading" aria-labelledby="latest-heading">
        <div className="section-heading"><div><p className="eyebrow">Useful when you need it</p><h2 id="latest-heading">Practical reading, without taking over <em>the front door.</em></h2></div><div className="home-reading__links"><Link className="text-link" href="/news/">Read the news <span aria-hidden="true">→</span></Link><Link className="text-link" href="/resources/">Browse every guide <span aria-hidden="true">→</span></Link></div></div>
        <div className="home-reading-list">
          {articles.map((article) => (
            <Link href={`/resources/${article.slug}/`} key={article.id} data-analytics-event="guide_opened" data-analytics-label={article.slug} data-analytics-position="home_list">
              <span className="home-reading-list__category">{article.category}</span>
              <strong>{articleSeoTitle(article.slug, article.title)}</strong>
              <span className="home-reading-list__minutes">{article.readingMinutes} min read →</span>
            </Link>
          ))}
        </div>
      </section>}
    </main>
  )
}
