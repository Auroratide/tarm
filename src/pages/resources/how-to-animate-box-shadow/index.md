---
layout: ../../../layouts/resource.astro
title: How to animate box-shadow
author: tobias-bjerrome
type: article
resourceUrl: https://tobiasahlin.com/blog/how-to-animate-box-shadow/
publishedAt: 2015-11-18
addedAt: 2022-05-17
topic: frontend
tags: [ css, performance, shadow, box-shadow, pseudo-element, opacity ]
---

Using CSS to animate a box shadow can be very taxing on performance. Even macbooks may have trouble rendering them, causing the page to lag when scrolling; it's notably far worse on less capable devices, most notoriously any phone.

Instead, a similar effect can usually be achieved by varying the opacity of an element with a static box-shadow, namely a pseudo element at the same location.

```css
.box {
    position: relative;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.15);
}

.box::after {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    opacity: 0;
    /* A Larger Shadow */
    box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.3);
    transition: opacity 0.3s ease-in-out;
}

.box:hover::after {
    opacity: 1;
}
```

The big difference according to [CSS Triggers](https://csstriggers.com) is that `opacity` does not change element geometry, whereas `box-shadow` does. This means opacity does not need to recalculate layout, and in some engines does not even require repainting. It is therefore more performant.
