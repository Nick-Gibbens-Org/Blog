---
categories: [Quick reads]
excerpt_separator: <!--end_excerpt-->
post_title: nth-child Pseudo-class
tags: [CSS]
---

Using :nth-child() pseudo-class to style alternating rows in tables.

<!--end_excerpt-->

I was making some slight styling changes to a table element recently. There is a common trend to offset the colours between alternating rows in a table. I wanted to follow this norm. It's an easy way for readers to differentiate between the rows in a table. I wanted an easy solution for this trivial matter. A quick search lead me to `:nth-child()` which is one of many CSS pseudo-classes.

## What is a pseudo-class?

It is a keyword that is added to a selector to define a style for a special state of an element. The selector is essentially the HTML element that you want this pseudo-class to apply to.

There are quite a few pseudo-classes out there. w3schools has a nice reference table of them all [here](https://www.w3schools.com/cssref/css_ref_pseudo_classes.php).

## The syntax

Pseudo-classes follow the HTML selector. A single colon (:) separates the selector from the pseudo-class:

```
selector:pseudo-class-name {
  CSS properties
}
```

## My table use case

In my case I used `:nth-child(n)` to style the alternating rows in a table. 

*n* can be a number/index, a keyword (odd or even), or a formula such as ( 2n + 1):

```
:nth-child(index | odd | even | an+b) {
  css declarations;
}
```

In my case I only wanted to style every second row in the table. Therefore I didn't need to bother with a number/index or a formula. I could simply use the *even* keyword. The following CSS produces the styling for the table at the end of this post:

```
tr:nth-child(even) {
    background-color: var(--your-chosen-color);
}
```

| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |
| April    | $170    |

