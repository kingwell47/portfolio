# Room Homepage

## Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Navigate the slider using either their mouse/trackpad or keyboard.

Additional things I did:

- The slider automatically slides forward after a set interval.

### Links

- Solution URL: https://www.frontendmentor.io/solutions/responsive-landing-page-with-sliding-imagestext-using-scss-js-kSg2mrbbS
- Live Site URL: https://kingwell47.github.io/room-homepage/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SCSS
- Flexbox
- JavaScript
- Mobile-first workflow

### What I learned

I should use Flex-basis a lot more:

```css
.header {
  flex: 1 0.75 fnc.rem(840);
  min-height: fnc.rem(360);
  position: relative;
  padding-top: fnc.rem(48);
}
```

Sliding based on the margin:

```js
function navigateSlides() {
  slides.classList.remove("animated");
  textSlides.classList.remove("animated");

  if (count <= 2) {
    slides.style.marginLeft = count * -100 + "%";
    textSlides.style.marginLeft = count * -100 + "%";
  } else if (count <= 0) {
    slides.style.marginLeft = "";
    textSlides.style.marginLeft = "";
  }
}
```

### Continued development

It's possible that there is a better way of implementing sliding images as I've seen a lot of different ways to do it in the course of figuring out this solution.

### Useful resources

- [Responsive CSS Image Slider by DudleyStorey](https://codepen.io/dudleystorey/pen/ehKpi) - For the automated sliding animation.
- [Pure CSS Responsive Image Slider by w3newbie](https://youtu.be/pGHOaY4dhAA) - Got the basic idea for the slider.

## Author

- Website - [Joel P. Doctor](https://www.joeldoctor.com)
- Frontend Mentor - [@kingwell47](https://www.frontendmentor.io/profile/kingwell47)
- Twitter - [@kingwell47](https://www.twitter.com/kingwell47)
- LinkedIn - [Joel P. Doctor](https://www.linkedin.com/in/joel-d-05854919/)

## Acknowledgments

Thanks to Ms. Jessica Chan (Coder Coder) and all the other YouTube creators making their knowledge available!
