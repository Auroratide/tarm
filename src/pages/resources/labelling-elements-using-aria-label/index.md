---
layout: ../../../layouts/resource.astro
title: Labelling Elements using aria-label
author: accessibility-developer-guide
type: article
resourceUrl: https://www.accessibility-developer-guide.com/examples/sensible-aria-usage/label-labelledby/
publishedAt: 2018-05-14
addedAt: 2022-05-23
topic: frontend
tags: [ wai-aria, accessibility, html ]
---

The `aria-label` element should be used judiciously. When defined on an HTML element, it's supposed to set that element's accessibility name which is read by screen readers. While useful, there are some things to be aware of:

* `aria-label` is not allowed to be used by every element (see [specification](https://w3c.github.io/html-aria/#docconformance))
* Behaviour between browsers and assistive tools differ
* Text in `aria-label` cannot be searched the same way visible text can

Generally speaking, HTML provides better ways to set an element's accessible name:

* The element's text content (as with `<button>`)
* An image's `alt` text
* Table `caption` content
* Form `label`s

Therefore, use of `aria-label` should be an exception only when there is no other reasonable way to make something accessible.