# Sound Machine

## FreeCodeCamp.org - Front End Development Libraries Project

This is a solution to the [Build a Drum Machine project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine).

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

![](./Screenshot.png)

### Links

- Live Site URL: https://kingwell47.github.io/drum-machine/

## My process

### Built with

- Semantic HTML
- React.js
- Scss

### What I learned

Importing multiple sounds is tricky. I think there is an easier way but I will need to find it:

```js
const soundList = {
  sound01:
    require("../audio/270304__littlerobotsoundfactory__collect-point-00.wav")
      .default,
  sound02: require("../audio/270307__littlerobotsoundfactory__explosion-01.wav")
    .default,
  sound03: require("../audio/270317__littlerobotsoundfactory__jump-01.wav")
    .default,
  sound04: require("../audio/270326__littlerobotsoundfactory__hit-01.wav")
    .default,
  sound05: require("../audio/270336__littlerobotsoundfactory__shoot-02.wav")
    .default,
  sound06: require("../audio/270337__littlerobotsoundfactory__pickup-00.wav")
    .default,
  sound07: require("../audio/270340__littlerobotsoundfactory__pickup-01.wav")
    .default,
  sound08: require("../audio/270341__littlerobotsoundfactory__pickup-04.wav")
    .default,
  sound09: require("../audio/270342__littlerobotsoundfactory__pickup-03.wav")
    .default,
};

export default soundList;
```

I probably could have it be in line though 🤔

Making an array for items and them mapping them makes things a lot easier:

```js
return (
  <section className='button-grid'>
    {soundsArray.map((item) => (
      <Button
        key={item.id}
        id={item.id}
        src={item.src}
        desc={item.desc}
        btnId={item.btnId}
        handler={props.handler}
      />
    ))}
  </section>
);
```

### Continued development

This does not have the "on/off" or "set" toggle that the example had. I will look into implementing it in the future.

### Useful resources

- [Snake game using React.js [2/2]](https://www.youtube.com/watch?v=lgK7OTdT-eo) - Gave me an idea on how to do the button input.
- [Keyboard input with React Hooks](https://dev.to/spaciecat/keyboard-input-with-react-hooks-3dkm) - Helped me figure out how actually add the event listener.

## Author

- Website - [Joel P. Doctor](https://www.kingwell47.com) - Currently made using SquareSpace, I will migrate it once I make my own site.
- Frontend Mentor - [@kingwell47](https://www.frontendmentor.io/profile/kingwell47)
- Twitter - [@kingwell47](https://www.twitter.com/kingwell47)
- LinkedIn - [Joel P. Doctor](https://www.linkedin.com/in/joel-d-05854919/)

## Acknowledgments

Thanks to Ms. Jessica Chan (Coder Coder) and all the other YouTube creators making their knowledge available!
