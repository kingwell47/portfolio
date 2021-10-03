# Sunnyside Agency Landing Page

## Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

Additional things I did:

- Added hover states to the navbar links (these were not specified in the original challenge files).
- Added a fade-in/out effect on the mobile menu expansion.

### Links

- Solution URL: https://www.frontendmentor.io/solutions/responsive-site-using-css-flexbox-epHjUnk1K
- Live Site URL: https://kingwell47.github.io/sunnyside/

## My process

### Built with

- Semantic HTML5 markup
- JavaScript
- SCSS
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

My first project, learned a lot about how to structure workflow and test changes on the browser. As well as using VS Code, Git and other tools.

Learned about using multiple classes for css changes:

```html
<div id="transform-text" class="features__element container text">
  <div class="text-wrapper">
    <div class="features__title1">
      <h2>Transform your brand</h2>
    </div>
    <div class="features__text1">
      <p>
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </p>
    </div>
    <a href="#" class="features__link"> Learn more </a>
  </div>
</div>
```

Using flex-grow to fix some overflow problems before the links were hidden:

```scss
&__links {
  flex-grow: 0.25;
  text-align: center;

  ul {
      list-style: none;

      li {
          display: inline;

          &:not(:last-child){
              margin-right: 50px;
          }
      }
}
```

### Continued development

This solution isn't 100% accurate to the design image given so I'm not very psyched about that. I've found Padding and Margins are tough to finesse for a beginner, so I will work on that.

### Useful resources

- [Coder Coder](https://www.youtube.com/channel/UCzNf0liwUzMN6_pixbQlMhQ) - Got me started in general. Great tutorials and live coding!.

## Author

- Website - [Joel P. Doctor](https://joeldoctor.com/)
- Frontend Mentor - [@kingwell47](https://www.frontendmentor.io/profile/kingwell47)
- Twitter - [@kingwell47](https://www.twitter.com/kingwell47)
- LinkedIn - [Joel P. Doctor](https://www.linkedin.com/in/joel-d-05854919/)

## Acknowledgments

Thanks to Ms. Jessica Chan (Coder Coder) and all the other YouTube creators making their knowledge available!
