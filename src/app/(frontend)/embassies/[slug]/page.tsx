import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { JsonLd } from '@/components/JsonLd'
import { representationLabels, representationSummary } from '@/lib/embassies'
import { getEmbassy } from '@/lib/content'
import { absoluteUrl, breadcrumbJsonLd, socialMetadata } from '@/lib/seo'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const embassy = await getEmbassy(slug)
  if (!embassy) return {}
  return socialMetadata({
    title: `${embassy.country} embassy or official representation for Finland`,
    description: representationSummary(embassy),
    path: `/embassies/${slug}/`,
    image: '/images/heroes/embassies-international-flags.webp',
  })
}

export default async function EmbassyPage({ params }: { params: Promise<{ slug: string }> }) {
  const embassy = await getEmbassy((await params).slug)
  if (!embassy) notFound()

  const outsideFinland = embassy.hostCountry !== 'Finland'
  const hasAccreditedMission = embassy.representationType !== 'foreign-ministry'

  return (
    <main id="main" className="shell detail-shell embassy-profile">
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'GovernmentOrganization',
          name: embassy.missionName,
          description: representationSummary(embassy),
          url: absoluteUrl(`/embassies/${embassy.slug}/`),
          areaServed: {
            '@type': 'Country',
            name: embassy.country,
          },
          address: embassy.address ? {
            '@type': 'PostalAddress',
            streetAddress: embassy.address,
            addressLocality: embassy.city,
            addressCountry: embassy.hostCountry,
          } : undefined,
          telephone: embassy.phone || undefined,
          email: embassy.email || undefined,
          sameAs: embassy.website ? [embassy.website] : undefined,
        },
        breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Embassies and consulates', path: '/embassies/' },
          { name: embassy.country, path: `/embassies/${embassy.slug}/` },
        ]),
      ]} />
      <Link className="back-link" href="/embassies/">← All embassies and missions</Link>
      <header className="embassy-profile__header">
        <div>
          <p className="eyebrow">{embassy.region} · {embassy.countryCode}</p>
          <h1>{embassy.country}</h1>
          <p className="embassy-profile__summary">{representationSummary(embassy)}</p>
        </div>
        <span className={`fi fi-${embassy.countryCode.toLowerCase()} country-flag country-flag--large`} aria-hidden="true" />
      </header>
      <div className="embassy-profile__body">
        <section>
          <span className={`representation-badge representation-badge--${embassy.representationType}`}>{representationLabels[embassy.representationType]}</span>
          <h2>{embassy.missionName}</h2>
          <p>{embassy.notes}</p>
          <div className="embassy-profile__guidance">
            <section aria-labelledby="mission-help-heading">
              <p className="eyebrow">A sensible first check</p>
              <h2 id="mission-help-heading">What this contact may help with</h2>
              <p>If you are a citizen of {embassy.country} living in Finland, this is the official starting point for questions about your home country’s passports, identity documents, citizenship records, document legalisation and consular help.</p>
              <p>Exact services vary between missions. Some matters must be handled in person, some can begin online and honorary consulates usually offer fewer services than an embassy.</p>
              <ul>
                <li>Check whether an appointment is required before visiting.</li>
                <li>Ask which original documents, translations, photographs and fees are needed.</li>
                <li>Confirm whether the mission serves people throughout Finland or only certain cases.</li>
                <li>For urgent help, use the mission’s published emergency instructions rather than an ordinary appointment form.</li>
              </ul>
            </section>

            {outsideFinland && hasAccreditedMission && (
              <section aria-labelledby="mission-abroad-heading">
                <p className="eyebrow">The mission is outside Finland</p>
                <h2 id="mission-abroad-heading">Do not book the journey first.</h2>
                <p>{embassy.country}’s accredited mission is listed in {embassy.city}, {embassy.hostCountry}. Contact it before travelling or posting original documents. Ask whether the matter can be handled remotely, through an honorary consulate in Finland or during a visiting consular session.</p>
              </section>
            )}

            <section aria-labelledby="finland-authority-heading">
              <p className="eyebrow">Who handles what</p>
              <h2 id="finland-authority-heading">Your embassy does not run Finland’s immigration system.</h2>
              <p>For Finnish residence permits, asylum, Finnish citizenship and most right-of-residence questions, start with the Finnish Immigration Service. Finnish passports and identity cards are handled by the Police of Finland.</p>
              <div className="embassy-profile__official-links">
                <a href="https://migri.fi/en/home" target="_blank" rel="noreferrer">Finnish Immigration Service ↗</a>
                <a href="https://poliisi.fi/en/passports-identity-cards-and-permits" target="_blank" rel="noreferrer">Police passports and identity cards ↗</a>
                <Link href="/help/">Find the right help on Expats.fi →</Link>
              </div>
            </section>
          </div>
          <div className="verification-callout"><strong>Check before you visit or send documents</strong><p>Opening hours, appointment rules, addresses and consular responsibilities change. Confirm the current details with the mission or the Finnish diplomatic directory first.</p></div>
        </section>
        <aside className="facts embassy-facts">
          <div><strong>Based in</strong><span>{embassy.city}, {embassy.hostCountry}</span></div>
          <div><strong>Representation</strong><span>{representationLabels[embassy.representationType]}</span></div>
          <div><strong>Last checked</strong><span>{new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(new Date(embassy.lastVerifiedAt))}</span></div>
          {embassy.website && <div><strong>Mission website</strong><a href={embassy.website} target="_blank" rel="noreferrer">Open official website ↗</a></div>}
          {embassy.phone && <div><strong>Phone</strong><a href={`tel:${embassy.phone}`}>{embassy.phone}</a></div>}
          {embassy.email && <div><strong>Email</strong><a href={`mailto:${embassy.email}`}>{embassy.email}</a></div>}
          {embassy.address && <div><strong>Address</strong><span>{embassy.address}</span></div>}
          <a className="button" href={embassy.sourceUrl} target="_blank" rel="noreferrer">Verify in official directory</a>
        </aside>
      </div>
    </main>
  )
}
