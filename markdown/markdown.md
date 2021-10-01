# Markdown Previewer

## FreeCodeCamp.org - Front End Development Libraries Project

This is a solution to the [Build a Markdown Previewer project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](/portfolio/markdown.png)

### Links

- Live Site URL: https://kingwell47.github.io/markdown-previewer/

## My process

### Built with

- Semantic HTML
- React.js
- Scss

### What I learned

I learned that I should read documentation better, instead of trying and searching for a lot of different solutions:

```js
marked.setOptions({
  gfm: true,
  breaks: true,
});
```

Conditional rendering is pretty good:

```js
{
  !maxed && (
    <Previewer convert={content} handler={toggleHide} clickValue={click} />
  );
}
```

### Continued development

It probably should have better animations for maximizing, but I'm not sure how to implement that.

Seems like it needs an aditional react specific way as I'm not sure how CSS handles conditional rendering.

### Useful resources

- [Markdown Previewer Example](https://codepen.io/freeCodeCamp/full/GrZVVO) - Example from the project page. I mostly just reverse-engineered how it was done and had my own solutions to problems I encountered.
- [Understanding Markdown](https://forum.freecodecamp.org/t/understanding-markdown/271965/3)

## Author

- Website - [Joel P. Doctor](https://www.kingwell47.com) - Currently made using SquareSpace, I will migrate it once I make my own site.
- Frontend Mentor - [@kingwell47](https://www.frontendmentor.io/profile/kingwell47)
- Twitter - [@kingwell47](https://www.twitter.com/kingwell47)
- LinkedIn - [Joel P. Doctor](https://www.linkedin.com/in/joel-d-05854919/)

## Acknowledgments

Thanks to Ms. Jessica Chan (Coder Coder) and all the other YouTube creators making their knowledge available!
