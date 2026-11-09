import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

import { businessDrafts } from '../data/business-drafts'

const slug = 'loaf-sourdough-bakery'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const business = businessDrafts.find((candidate) => candidate.slug === slug)
  if (!business) throw new Error('LOAF Sourdough Bakery business profile is missing')

  const existing = await payload.find({
    collection: 'businesses',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })

  const data = {
    ...business,
    categories: business.categories.map((label) => ({ label })),
    featured: false,
    locations: business.locations.map((label) => ({ label })),
    verificationStatus: 'owner-verified' as const,
    verifiedAt: '2026-11-09T09:30:00.000Z',
    verificationNotes: 'Anna approved the Expats.fi profile wording and supplied the published logo and photography directly on 9 November 2026.',
  }

  if (existing.docs[0]) {
    await payload.update({
      collection: 'businesses',
      id: existing.docs[0].id,
      data,
      overrideAccess: true,
      req,
    })
    return
  }

  await payload.create({
    collection: 'businesses',
    data,
    overrideAccess: true,
    req,
  })
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'businesses',
    overrideAccess: true,
    req,
    where: { slug: { equals: slug } },
  })
}
