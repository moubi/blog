---
title: The Current State of HoC, Hooks, and Render Props
date: "2021-02-19"
description: "Did React hooks took over or there is still room for the HoC and render prop patterns?"
hackerNewsId: ""
---

In 2021 React hooks are everywhere and many serious OSS projects are using functional components already.

During ReactEurope [Erik Rasmussen](https://twitter.com/erikras) did a good round-up of how things started with **HoCs**, went through their replacement — **render props** — and ended up today with **hooks**. It also compares several use cases.

<iframe width="100%" height="355" src="https://www.youtube-nocookie.com/embed/pn0pIgdQvhU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

If I have to make my own conclusion it would sound like that:

> HoC, hooks and render props have their own use cases and non of them is a full replacement of the others. In some cases HoCs and components with a render prop my even make more sense.

A good example of the above is the [connect()](https://react-redux.js.org/api/connect) function from React Redux used to connect your component to the store. It does return a HoC.

```javascript
// This will return a HoC wrapper around MyComponent
connect()(MyComponent);
```

With the modern Redux you can get data and dispatch actions to the store directly using the `useSelector` and `useDispatch` hooks, so `connect()` is no longer required. **While it's true, this is one of these moments where I find the HoC pattern more useful for production apps**. The main reason is... testing. It's very easy to test a component that gets all its data via props.

```javascript{4,5}
function MyComponent({
  name,           // own prop
  size,           // own prop
  count,          // redux store selector
  activateAction  // redux action
});
```
With the hooks your tests won't be that straightforward as [per some tradeoffs](https://blog.isquaredsoftware.com/2019/07/blogged-answers-thoughts-on-hooks/).

**To wrap up:** Functional components and react hooks are our preferred way of working with React these days but [hooks are not always your silver bullet](/render-props-vs-hooks). Collaboration, testing, reusability, and logic explicitness, should determine what would be a better fit and not the mainstream.
