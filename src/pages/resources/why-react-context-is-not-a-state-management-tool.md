---
layout: ../../layouts/resource.astro
title: Why React Context is Not a "State Management" Tool
author: mark-erikson
type: article
resourceUrl: https://blog.isquaredsoftware.com/2021/01/context-redux-differences/
publishedAt: 2021-01-18
addedAt: 2022-04-29
topic: frontend
tags: [ react, redux, state management ]
---

When React its Context API and Hooks, a lot of buzz spawned regarding whether their combination made Redux obsolete. The answer is "not really, it just depends on what you need."

## Context vs Redux

<p><strong>Context</strong> is a way to avoid prop-drilling. It acts as a <q>wormhole</q>, portalling a value down the component tree without having to specify it as a prop in each intermediate component.</p>

**Redux** is a global state management tool that uses "actions" as the sole way of updating state. Components can subscribe to parts of the state in order to know when to rerender.

The key difference here is that Context is _not_ a state management tool. All it does is provide values to components; state is managed with hooks instead. In fact, Redux _uses_ Context to avoid prop-drilling itself.

The comparison of the two tools only makes sense if we think of Context _in combination with_ the `useReducer` hook.

## Context + useReducer vs Redux

Like Redux, `useReducer` also uses "actions" as the sole way of updating its state. When used with Context, it starts to look a lot like Redux, but there are still some differences:

* The value passed down via Context from `useReducer` is the entire state. This means _every_ component that uses that state (even if it is a tiny subset) will rerender if the state changes at all. Redux, on the other hand, allows subscribing to subsets of the state.
* Redux is independent of React, meaning it can be used with any UI framework. Context + `useReducer`, on the other hand, is React-specific. Redux may be essential in an ecosystem where multiple frameworks are used, or React is only used in a subset of the app.
* Redux offers an ecosystem of tools for tracing and replaying actions for debugging and handling side-effects like API calls.

So while the action-based paradigm is the same, Redux can be thought of as having a bit more firepower in order to handle either larger/more complicated state or provide opportunity for observability.

## When to use Context or Redux?

Here is the author's opinion:

> My personal opinion is that if you get past 2-3 state-related contexts in an application, you're re-inventing a weaker version of React-Redux and should just switch to using Redux.

In other words, when state becomes large enough, it's better to use Redux.

In my own opinion, it depends on what constitutes "global state" and whether it makes sense to keep the state in the same management model. In other words, I'd first question what state on a project is truly global, and then whether it is desired to put otherwise disparate kinds of state under the umbrella of a Redux store.

In any case, for small React applications or components, Context + `useReducer` works fine. Context + `useState` might be even simpler.
