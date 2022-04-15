---
layout: ../../layouts/resource.astro
title: Image Alt Text, the Way the Spec Intended It
author: Timothy Foster
resourceUrl: https://auroratide.com/posts/image-alt-text
publishedAt: 2021-07-16
addedAt: 2022-04-15
topic: frontend
tags: [ html, accessibility, images, specification ]
---

<p>In HTML, you can give a text description to images, called the <dfn>alt text</dfn>. For the sake of accessibility (i.e. people who cannot see the image or for whom it takes a long time to download), you should _always_:</p>

* Provide alt text
* Or explicitly declare no alt text (for purely decorative images)

What makes for good alt text?

**Treat alt text as a _replacement_ in the page's context.**

A good way to think about it is this: if you were describing the page to somebody on the phone, what would you say when you reached the image?
