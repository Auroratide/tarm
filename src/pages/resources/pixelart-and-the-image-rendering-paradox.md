---
layout: ../../layouts/resource.astro
title: Pixelart and the image-rendering Paradox
author: Timothy Foster
resourceUrl: https://auroratide.com/posts/pixelart-and-the-image-rendering-paradox
topic: frontend
tags: [ css, pixelart, browser compatibility ]
---

By default, upscaling a tiny image on a browser makes it blurry. This is devastating for pixelart.

CSS provides a property called `image-rendering` which effectively determines what algorithm is used to upscale an image. In the case of pixelart, we want the Nearest Neighbor algorithm, as it preserves the pixely nature of the image.

The problem? At least as of the time of the article's writing, Chrome and Firefox supported the `pixelated` and `crisp-edges` values respective, but not the other. So, which do you use?

To maximize support, use:

```css
.pixelart {
    image-rendering: crisp-edges;
    image-rendering: pixelated;
}
```

The article goes into why (semantics) and the history behind this paradox.
