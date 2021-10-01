# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./images/Screenshot.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/responsive-tip-calculator-using-javascript-css-flexbox-and-css-grid-etAObyJPh
- Live Site URL: https://kingwell47.github.io/tip-calculator/

## My process

### Built with

- Semantic HTML5 markup
- JavaScript
- SCSS
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned

I learned some CSS Grid and how to use JavaScript on a web page!

Adding the error message span inside the label seemed like a good idea:
```html
<div class="selector__people-number">
  <label for="number-of-people">Number of People <span class="error_message" id="invalid-people"></span></label>
  <span id="person-icon"><img src="images/icon-person.svg" alt="Person"></span>
  <input id="number-of-people" type="number" min="1" placeholder="0" step="1">
</div>
```
Using radio input instead of buttons was also inspiring:
```scss
 > label {
            border-radius: fnc.rem(5);
            padding-top: fnc.rem(6);
            font-family: var(--font);
            font-size: fnc.rem(24);
            font-weight: 700;
            color: var(--white);
            background-color: var(--veryDarkCyan);
            text-align: center;
            cursor: pointer;
            transition: all 250ms ease-in-out;

            &:hover {
                background-color: var(--hoverCyan);
                color: var(--veryDarkCyan);
            }            
        }
}
```
This error handler was fun to find:
```js
function errorHandler(input, message) {
    let parentElem = input.parentElement;
    let errorSpan = parentElem.querySelector('.error_message');

    errorSpan.innerText = message;
}
```
This querySelectorAll was also very useful:
```js
document.querySelectorAll('.selector__value').forEach(item => {
    item.addEventListener('change', event => {
        enableResetBtn();        
        tipObj.tipPercent = item.value / 100;
        customTip.value = "";
        errorHandler(customTip, "");
        calculateTip(tipObj);
    })
  })
```


### Continued development

I'm not sure about the error checking or handling of this calculator, as well as the reset function I used. I will look into how to do these things better.


### Useful resources

- [Coder Coder](https://www.youtube.com/channel/UCzNf0liwUzMN6_pixbQlMhQ) - Got me started in general. Great tutorials and live coding!
- [Florin Pop video](https://www.youtube.com/watch?v=rsd4FNGTRBw&t=1047s) - I found how to make the error handling function here!

## Author

- Website - [Joel P. Doctor](https://www.kingwell47.com) - Currently made using SquareSpace, I will migrate it once I make my own site.
- Frontend Mentor - [@kingwell47](https://www.frontendmentor.io/profile/kingwell47)
- Twitter - [@kingwell47](https://www.twitter.com/kingwell47)
- LinkedIn - [Joel P. Doctor](https://www.linkedin.com/in/joel-d-05854919/)

## Acknowledgments

Thanks to Ms. Jessica Chan (Coder Coder) and all the other YouTube creators making their knowledge available!


