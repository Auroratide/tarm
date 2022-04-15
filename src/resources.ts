import type { MarkdownInstance } from 'astro'

export type ResourceInfo<DateType> = {
    title: string,
    author: string,
    resourceUrl: string,
    publishedAt: DateType,
    addedAt: DateType,
    topic: string,
    tags: string[],
}

export type ResourceInstance = MarkdownInstance<ResourceInfo<string>>

export type Resource = {
    url: string,
    frontmatter: ResourceInfo<Date>,
}

export const withDates = (it: ResourceInstance): Resource => ({
    ...it,
    frontmatter: {
        ...it.frontmatter,
        publishedAt: new Date(it.frontmatter.publishedAt),
        addedAt: new Date(it.frontmatter.addedAt),
    },
})

export const byPublishDate = (l: Resource, r: Resource) =>
    r.frontmatter.publishedAt.getTime() - l.frontmatter.publishedAt.getTime()
