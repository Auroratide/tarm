import ogs from 'open-graph-scraper'

type OgImage = {
    url: string,
    width: string,
    height: string,
    type: string,
}

const extractImage = ({ ogImage, requestUrl }: {
    ogImage?: OgImage | OgImage[],
    requestUrl: string,
}) => {
    if (ogImage == null)
        return undefined

    const website = new URL(requestUrl).origin
    const image = Array.isArray(ogImage) ? ogImage[0] : ogImage

    return {
        url: new URL(image.url, website), // second param ignored if first is absolute
        width: image.width != null ? parseFloat(image.width) : undefined,
        height: image.height != null ? parseFloat(image.height) : undefined,
    }
}

export const extractOpengraph = async (url: string) => {
    const { error, result } = await ogs({
        url,
        downloadLimit: 10000000, // 10 MB
    })
    if (error)
        throw new Error(`Could not fetch OpenGraph information from ${url}`)

    return {
        title: result.ogTitle,
        author: result.author,
        image: extractImage(result),
    }
}
