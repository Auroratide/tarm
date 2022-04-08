export type ResourceInfo = {
	title: string,
    author: string,
    resourceUrl: string,
    topic: string,
    tags: string[],
}

export type Resource = {
    url: string,
    frontmatter: ResourceInfo,
}
