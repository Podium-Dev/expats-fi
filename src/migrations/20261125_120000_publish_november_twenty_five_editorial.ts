import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { convertHTMLToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { JSDOM } from 'jsdom'

import { novemberTwentyFiveStories } from '../data/news-november-twenty-five'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const editorConfig = await editorConfigFactory.default({ config: payload.config })

  for (const { html, ...story } of novemberTwentyFiveStories) {
    const existing = await payload.find({
      collection: 'news-stories',
      limit: 1,
      overrideAccess: true,
      req,
      where: { slug: { equals: story.slug } },
    })
    if (existing.docs.length) throw new Error(`News slug already exists: ${story.slug}`)

    await payload.create({
      collection: 'news-stories',
      data: {
        ...story,
        content: convertHTMLToLexical({ editorConfig, html, JSDOM }),
        sourceCheckedAt: '2026-11-25T09:00:00.000Z',
        status: 'published',
      },
      overrideAccess: true,
      req,
    })
  }
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'news-stories',
    overrideAccess: true,
    req,
    where: { slug: { in: novemberTwentyFiveStories.map(({ slug }) => slug) } },
  })
}
