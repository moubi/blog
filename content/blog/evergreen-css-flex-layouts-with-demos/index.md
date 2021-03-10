---
title: "Evergreen CSS Flex Layouts With Live Demos"
date: "2021-03-09"
description: "A dumb component renders any text passed while its visual appearance remains static. It is also unknown how many new content variations are about to come. What would be a useful React pattern in this scenario?"
featuredImage: "css-flex-layout-grid-social.png"
---
<p>
  <img alt="CSS Flex Grid Layout" src="css-flex-grid-layout.png" />
</p>

**Does the following ring a bell?** You have to build this non-trivial UI layout over and over again and Google brings in the usual CSS flex (flexbox) guides to help with. But you still need to do it yourself and nothing that can be copy-pasted for a good start.

**The collection here is not ambitious but does include some common CSS flex layouts with live demos and example code you can simply reuse. Filling the gaps with more content is then up to you.**
___

## Table of Contents
_Click to jump to each example._

<div class="table-of-contents">
  <a href="#flex-cards-on-a-touch-device">
    <span>Flex cards on a touch device</span>
    <div class="parent1 box">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </a>

  <a href="#flex-cards-with-equal-height">
    <span>Flex cards with equal height</span>
    <div class="parent2 box">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </a>

  <a href="#flex-cards-with-content-based-height">
    <span>Flex Cards with content-based height</span>
    <div class="parent3 box">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </a>

  <a href="#a-flex-card-with-content-controlled-width">
    <span>A flex card with content-controlled width</span>
    <div class="parent4 box">
      <div></div>
      <div></div>
    </div>
  </a>

  <a href="#centered-flex-cards">
    <span>Centered flex cards</span>
    <div class="parent9 box">
      <div></div>
      <div></div>
    </div>
  </a>

  <a href="#plans-and-prices-flex-cards">
    <span>Plans and prices flex cards</span>
    <div class="parent5 box">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </a>

  <a href="#three-column-flex-layout-with-two-sidebars">
    <span>Three-column flex layout with two sidebars</span>
    <div class="parent6 box">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </a>

  <a href="#webpage-flex-layout-with-a-header-content-and-footer">
    <span>Webpage flex layout with a Header, Content, and Footer</span>
    <div class="parent7 box">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </a>

  <a href="#webpage-flex-layout-with-a-header-footer-and-sidebar">
    <span>Webpage flex layout with a Header, Footer, and Sidebar</span>
    <div class="parent8 box">
      <div class="child"></div>
      <div class="main">
        <div class="child"></div>
        <div class="child content"></div>
      </div>
      <div class="child"></div>
    </div>
  </a>
</div>

Display flex or flexbox is still the [preferred way for building web grids and layouts in 2021](https://almanac.httparchive.org/en/2020/css#flexbox-and-grid-adoption) and is about to stay on top for quite some time. For that reason don't feel doubtful about the evergreen demos and code samples below as they still serve very well when it comes to alignment and templating.

## Basic HTML structure

All examples share a similar HTML structure—one parent element (`.parent`) and several children (`.child`).

```html
<div class="parent">
  <div class="child">...</div>
  <div class="child">...</div>
  <div class="child">...</div>
  ...
</div>
```
_The HTML markup is also present for each flex demo for convenience._

## Flex Cards on a Touch Device

<iframe height="485" style="width: 100%;" scrolling="no" title="Drop Last Item Full Width" src="https://codepen.io/moubi/embed/YzpZpVM?height=485&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/moubi/pen/YzpZpVM'>Drop Last Item Full Width</a> by Miroslav Nikolov
  (<a href='https://codepen.io/moubi'>@moubi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<details open>
<summary>CSS Code</summary>

```css{3,11}
.parent {
  display: flex;
  flex-wrap: wrap;
}

.child {
  flex-grow: 1;
}

.child:last-child {
  width: 100%;
}
```
</details>

<details>
<summary>HTML structure (<i>click to open</i>)</summary>

```html
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
```
</details>

This use case is derived from a common flex layout where three items are displayed on a single row. Then the last card can drop on the second one full-width (responsive) when using a mobile device or narrow screens. The central point in the code is around `flex-wrap: wrap` set to the parent and `width: 100%` set on the last child.


## Flex Cards with Equal Height

<iframe height="435" style="width: 100%;" scrolling="no" title="Same Height, Same Width" src="https://codepen.io/moubi/embed/dyOvWgE?height=435&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/moubi/pen/dyOvWgE'>Same Height, Same Width</a> by Miroslav Nikolov
  (<a href='https://codepen.io/moubi'>@moubi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<details open>
<summary>CSS Code</summary>

```css
.parent {
  display: flex;
  justify-content: space-between;
}

.child {
  flex-grow: 1;
  flex-basis: 0;
}
```
</details>

<details>
<summary>HTML structure (<i>click to open</i>)</summary>

```html
<div class="parent">
  <div class="child">
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
  </div>
  <div class="child">Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
  <div class="child">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </div>
</div>
```
</details>

Similar to the previous flex demo you often need to display several cards on a single row with the same width and stretching their height to the tallest one. Just adding `display: flex` to the parent is enough to bring the stretch functionality in by default. For the flex items' equal width you will need `flex-grow` and `flex-basis` too.

## Flex Cards with Content-based Height

<iframe height="435" style="width: 100%;" scrolling="no" title="Flexbox Children with Auto Height" src="https://codepen.io/moubi/embed/poNPKpE?height=435&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/moubi/pen/poNPKpE'>Flexbox Children with Auto Height</a> by Miroslav Nikolov
  (<a href='https://codepen.io/moubi'>@moubi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<details open>
<summary>CSS Code</summary>

```css{3}
.parent {
  display: flex;
  align-items: flex-start;
}

.child {
  flex-grow: 1;
  flex-basis: 0;
}
```
</details>

<details>
<summary>HTML structure (<i>click to open</i>)</summary>

```html
<div class="parent">
  <div class="child">
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
  </div>
  <div class="child">Contrary to popular belief, Lorem Ipsum is not simply random text.</div>
  <div class="child">Lorem Ipsum is simply dummy text.</div>
</div>
```
</details>

The cards are forced to have their height automatically adjusted based on their content. Explicitly specifying `align-items: flex-start` ensures that. The equal width is achieved the same way as with the previous demo.

## A Flex Card with Content-controlled Width

<iframe height="295" style="width: 100%;" scrolling="no" title="Flexbox Child with No Shrink" src="https://codepen.io/moubi/embed/OJbpgpg?height=295&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/moubi/pen/OJbpgpg'>Flexbox Child with No Shrink</a> by Miroslav Nikolov
  (<a href='https://codepen.io/moubi'>@moubi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<details open>
<summary>CSS Code</summary>

```css{6}
.parent {
  display: flex;
}

.child:last-child {
  flex-shrink: 0;
}
```
</details>

<details>
<summary>HTML structure (<i>click to open</i>)</summary>

```html
<div class="parent">
  <div class="child">1</div>
  <div class="child">Lorem Ipsum is simply dummy print text.</div>
</div>
```
</details>

Often you need a flex card to have a fluid width but also another one aside with size that respects its content. Go to [this CSS flex demo example](https://codepen.io/moubi/pen/OJbpgpg) on CodePen and try to update the text and resize the screen. You will notice how the flex item on the right grows together with the text inside and doesn't shrink even when the parent container goes too narrow. To apply the effect give `flex-shrink: 0` to that child—it is like saying _"Don't shrink no matter what"_. By default, its value is `1`.

## Centered Flex Cards

<iframe height="500" style="width: 100%;" scrolling="no" title="Flexbox Centered Items" src="https://codepen.io/moubi/embed/bGBvZmj?height=500&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/moubi/pen/bGBvZmj'>Flexbox Centered Items</a> by Miroslav Nikolov
  (<a href='https://codepen.io/moubi'>@moubi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<details open>
<summary>CSS Code</summary>

```css
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
```
</details>

<details>
<summary>HTML structure (<i>click to open</i>)</summary>

```html
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
</div>
```
</details>

Having a centered image and text within a container both vertically and horizontally can be done by just applying some rules to the `.parent` alone. For this particular case, two cards are displayed in a column visually positioned in the middle of its wrapper. Don't set `flex-direction: column` and you will have the same result with a row instead.

## Plans and Prices Flex Cards

<iframe height="500" style="width: 100%;" scrolling="no" title="Flexbox Item Full Height" src="https://codepen.io/moubi/embed/yLVvXPm?height=500&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/moubi/pen/yLVvXPm'>Flexbox Item Full Height</a> by Miroslav Nikolov
  (<a href='https://codepen.io/moubi'>@moubi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<details open>
<summary>CSS Code</summary>

```css{12}
.parent {
  display: flex;
  align-items: center;
  height: 300px;  /* or whatever make sense */
}

.child {
  flex-grow: 1;
}

.child:nth-child(2) {
  align-self: stretch;
}
```
</details>

<details>
<summary>HTML structure (<i>click to open</i>)</summary>

```html
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
```
</details>

A trivial flex grid for plans and prices section where the middle card is somehow bold. In the demo, all cards are vertically centered within their parent container and the middle one **expands to 100% height**. **Three steps to note for this flex example:** the parent needs a height set directly or indirectly together with vertically aligned items; `flex-grow: 1` for the `.child` elements so that they fill the horizontal space; and `align-self: stretch` for the middle card to fill the remaining vertical space.

## Three-column Flex Layout with Two Sidebars

<iframe height="400" style="width: 100%;" scrolling="no" title="Flexbox Middle Item Stretch" src="https://codepen.io/moubi/embed/dyOmaow?height=400&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/moubi/pen/dyOmaow'>Flexbox Middle Item Stretch</a> by Miroslav Nikolov
  (<a href='https://codepen.io/moubi'>@moubi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<details open>
<summary>CSS Code</summary>

```css
.parent {
  display: flex;
}

.child:nth-child(2) {
  flex-grow: 1;
}
```
</details>

<details>
<summary>HTML structure (<i>click to open</i>)</summary>

```html
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
```
</details>

CSS flex comes in very handy for webpage layouts. The current pen represents a grid with a content area and two sidebars on each side. The middle item (the content) should be wider so you can set `flex-grow: 1`. **In the production code, you may need to set an explicit width for the sidebars**.

## Webpage Flex Layout with a Header, Content, and Footer

<iframe height="600" style="width: 100%;" scrolling="no" title="Flexbox Header, Body, Footer" src="https://codepen.io/moubi/embed/oNYEGGv?height=600&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/moubi/pen/oNYEGGv'>Flexbox Header, Body, Footer</a> by Miroslav Nikolov
  (<a href='https://codepen.io/moubi'>@moubi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<details open>
<summary>CSS Code</summary>

```css
.parent {
  display: flex;
  flex-direction: column;
  height: 100vh;  /* or whatever make sense */
}

.child:nth-child(2) {
  flex-grow: 1;
}
```
</details>

<details>
<summary>HTML structure (<i>click to open</i>)</summary>

```html
<div class="parent">
  <div class="child">Header</div>
  <div class="child">Content</div>
  <div class="child">Footer</div>
</div>
```
</details>

A page layout with header, content, and footer sections is evergreen. You may look at it as the previous sidebars demo but on the flip side. The difference? Columns are now rows and the direction is changed to `flex-direction: column`. **Explicitly adding heights to the flex header and footer is OK**.


## Webpage Flex Layout with a Header, Footer, and Sidebar

<iframe height="600" style="width: 100%;" scrolling="no" title="Flexbox Header, Sidebar, Content, Footer" src="https://codepen.io/moubi/embed/OJbQxGx?height=600&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/moubi/pen/OJbQxGx'>Flexbox Header, Sidebar, Content, Footer</a> by Miroslav Nikolov
  (<a href='https://codepen.io/moubi'>@moubi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<details open>
<summary>CSS Code</summary>

```css
.parent {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main {
  display: flex;
  flex-grow: 1;
}

.content {
  flex-grow: 1;
}
```
</details>

<details open>
<summary>HTML structure</summary>

```html
<div class="parent">
  <div class="child">Header</div>
  <div class="main">
    <div class="child">Sidebar</div>
    <div class="child content">Content</div>
  </div>
  <div class="child">Footer</div>
</div>
```
</details>

This page layout is a bit more complex and requires nested flexbox items. It can be built on top of the previous flex demo. The middle section (`.main`) is split into sidebar and content columns and represents a separate "parent" with `display: flex`. The `.content` area takes most of the space thanks to `flex-grow: 1`. **Setting an explicit width and height to those elements in the real use case is up to you**.

## Final Words
Most of these CSS flex layout demos are very straightforward. Something relatively easy to achieve with the rules you can find listed and explained in any [flexbox cheat-sheet](https://yoksel.github.io/flex-cheatsheet/) on the Internet. But flexbox can build more complex grids. Usually, grids like the Mosaic view (aka Masonry) is done with some JavaScript help while [flex alone can do that too](https://tobiasahlin.com/blog/common-flexbox-patterns/#masonry-or-mosaic).

**PS: This list will grow over time so keep an eye on it. The best way is by joining the mail list below. I will then make sure you are updated.**

<style loading="lazy">
  .table-of-contents {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .table-of-contents a {
    position: relative;
    width: 138px;
    height: 138px;
    padding: 5px;
    margin-bottom: 20px;
    text-align: center;
    text-decoration: none;
    box-shadow: none;
    background-color: #21242a;
    border-radius: 7px;
    transform: translateY(0);
    transition: transform 0.3s;
  }

  .table-of-contents a:hover {
    transform: translateY(-7px);
    transition: transform 0.3s;
  }

  .table-of-contents a:hover span {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s;
  }

  .table-of-contents a span {
    display: flex;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    background-color: #282c35aa;
    color: #fff;
    border-radius: 5px;
    opacity: 0;
    font-family: var(--secondaryFontFamily);
    font-size: 16px;
    z-index: 1;
  }

  .box {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .box > div,
  .box .child {
    margin: 5px;
    background-color: #eab768;
    border-radius: 5px;
  }

  .parent1 {
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .parent1 > div {
    flex-grow: 1;
  }

  .parent1 > div:last-child {
    width: 100%;
  }

  .parent2 {
    justify-content: space-between;
  }
  .parent2 > div {
    flex-grow: 1;
    flex-basis: 0;
  }

  .parent3 {
    align-items: flex-start;
  }
  .parent3 > div {
    flex-grow: 1;
  }
  .parent3 > div:nth-child(1) {
    height: 80%;
  }
  .parent3 > div:nth-child(2) {
    height: 60%;
  }
  .parent3 > div:nth-child(3) {
    height: 30%;
  }

  .parent4 > div {
    height: 30%;
    flex-grow: 1;
  }
  .parent4 > div:last-child {
    flex-grow: 2;
  }

  .parent5 {
    align-items: center;
  }
  .parent5 > div {
    flex-grow: 1;
    height: 40%;
  }
  .parent5 > div:nth-child(2) {
    height: 70%;
  }

  .parent6 > div {
    flex-basis: 0;
    flex-grow: 1;
  }
  .parent6 > div:nth-child(2) {
    flex-grow: 4;
  }

  .parent7 {
    flex-direction: column;
  }
  .parent7 > div {
    flex-basis: 0;
    flex-grow: 1;
  }
  .parent7 > div:nth-child(2) {
    flex-grow: 4;
  }

  .parent8 {
    flex-direction: column;
  }
  .parent8 > div {
    flex-grow: 1;
  }
  .parent8 .main {
    display: flex;
    flex-grow: 4;
    margin: 0;
    background-color: transparent;
    border-radius: 0;
  }
  .parent8 .main .child:first-child {
    flex-grow: 1;
  }
  .parent8 .content {
    flex-grow: 4;
  }

  .parent9 {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .parent9 > div {
    height: 25%;
    width: 40%;
  }
</style>
