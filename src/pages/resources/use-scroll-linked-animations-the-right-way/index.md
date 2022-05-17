---
layout: ../../../layouts/resource.astro
title: How to use scroll-linked animations the right way
author: alvin-wan
type: article
resourceUrl: https://blog.logrocket.com/use-scroll-linked-animations-right-way/
publishedAt: 2021-06-13
addedAt: 2022-05-09
topic: frontend
tags: [ scrolling, animation, javascript, css, parallax ]
---

A naive implementation of a parallax effect using Javascript will result in the following [warning on Firefox](https://firefox-source-docs.mozilla.org/performance/scroll-linked_effects.html):

> This site appears to use a scroll-linked positioning effect. This may not work well with asynchronous panning.

Essentially, using Javascript to accomplish **scroll-linked effects** can have major performance issues, as well as accessibility issues deriving from such problems. The result is jittery or lagging animations, which is no good for anyone.

## Why this is a problem

Browsers do a lot of work in the background to deliver a web page. This work is divided among **threads** with different responsibilities. To provide a better experience for the reader, scrolling is sometimes put on a so-called **compositor thread**. Meanwhile, scroll events are triggered and run on the **main thread**.

As these two threads are not guaranteed to be synchronized, lagging can occur.

## Use CSS Instead

The best way to solve scroll-based issues is to use CSS instead of Javascript. This puts all of the work onto the compositor thread gives the browser all of the responsibility of optimization.

The most popular techniques can be done with CSS:

* **[Sticky Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky)** - just use `position: sticky`
* **[Scroll Snapping](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap)** - some properties can force the scroll to move to an element
* **[Parallax](https://keithclark.co.uk/articles/pure-css-parallax-websites/)** - utilizes a combination of `perspective` and `translateZ` to, in a sense, literally implement parallax

## Javascript Observer Pattern

Instead of relying on the `scroll` event to detect when an animation should happen, observers should be used to trigger an action when a specific scroll position is reached (observing vs polling). The **[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)** is build to do just that.
