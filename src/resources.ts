import type { MarkdownInstance } from 'astro'

export type ResourceType = 'article' | 'video' | 'image'

export type ResourceInfo<DateType> = {
    title: string,
    author: string,
    type: ResourceType,
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

export const byAddedDate = (l: Resource, r: Resource) =>
    r.frontmatter.addedAt.getTime() - l.frontmatter.addedAt.getTime()