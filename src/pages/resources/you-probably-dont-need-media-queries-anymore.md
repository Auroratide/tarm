---
layout: ../../layouts/resource.astro
title: You Probably Don't Need Media Queries Anymore
author: Kathryn Grayson Nanz
resource: https://dev.to/kathryngrayson/you-probably-dont-need-media-queries-anymore-a4j
category: frontend
tags: [ css, responsive design ]
---

**Responsive design** is the art of making a web page beautiful on all devices, regardless of size. That is, the same website should look good on mobile _and_ on desktop.

CSS offers tools to achieve this; among the most prominent of those tools is [@media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@media). These let developers specify breakpoints so that different CSS gets applied depending on the screen size.

## Features

However, CSS has evolved to offer other tools that support responsive design just as well, if not better. There is:

* **[Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)** - With features like `auto-fit` and the `fr` unit, grids can be made to automatically adjust to the device's size. A good example is [my website's art page](https://auroratide.com/art).
* **[Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)** - The `flex-wrap` attribute in particular means elements can wrap to new rows on overflow.
* **[aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)** - Allows images to keep a specific aspect ratio.
* **[clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)** - Allows an element's size to adjust flexibly with its container's size, but be bounded on both ends to accomodate very small or very large screens.
* **[vw and vh](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units)** - CSS units that are a percentage of the screen's width and height. Very useful for fullscreen concepts and ensuring content stays above the fold.
* **[em and rem](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#ems_and_rems)** - CSS units that scale relative to its parent element or document respectively. These work well with `clamp()` and the `vw` features to create a fluid typography system.

## Benefits

**Cognitive Simplicity**: Avoiding media queries pushes us into a **fluid design** model, which is a subtle evolution to responsive design. Instead of thinking about specific breakpoints (which may or not be tied to specific kinds of devices), we just design for _everything_ and let the web page adapt.

**Code Simplicity**: Rather than maintaining multiple mini-stylesheets for each important breakpoint, fluid design encourages a single set of rules that work universally.

## When to use @media

There are still plenty of reasons to use @media:

* When the fundamental design of an element changes (e.g. on small screens a nav becomes a hamburger menu)
* Accessibility preferences like resuced motion or color scheme
* Targetting specific mediums, like for printing a document
