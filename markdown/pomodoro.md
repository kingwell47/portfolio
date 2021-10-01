# 25 + 5 Clock

## FreeCodeCamp.org - Front End Development Libraries Project

This is a solution to the [Build a 25 + 5 Clock project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock).

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

- Live Site URL: https://kingwell47.github.io/25-5-clock/

## My process

### Built with

- Semantic HTML
- React.js
- Scss

### What I learned

Figuring out accurate timing is hard!

The order of the functions and methods called matter very much to the time based tests in this one.

Also, there is more than one way to make a countdown timer.

```js
const doIntervalChange = () => {
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds; //Formatting the seconds and minutes
  minutes = minutes < 10 ? "0" + minutes : minutes;
  timerMinutes.current = minutes;
  timerSeconds.current = seconds;
  setTotalTime(totalTime - 1);
};
```

UseEffect is pretty USEful! (Get it?)

```js
useEffect(() => {
  let interval = setInterval(() => {
    if (timerMinutes.current === "00") {
      alert.current = true;
    } else {
      alert.current = false;
    }
    if (!countingDown) {
      return; // If the timer is not active, do nothing
    }
    if (totalTime <= 0) {
      playAudio(); // Play Audio when time is up
    }
    if (countingDown && totalTime >= 0) {
      //Countdown only until zero
      doIntervalChange();
    } else {
      switching.current = true;
      props.switchOver(); //Switchover to the other timer
      refresh(); // update the timer again
      setInterval(() => {
        switching.current = false;
      }, 4500);
    }
  }, 1000); // 1 second intervals
  return () => clearInterval(interval);
});
```

### Continued development

The timer is probably not as accurate as I want it to be.

Some transitions are late by a few seconds or stop abruptly.

I also don't think this is the most efficient code ever, it probably needs a lot of optimization.

### Useful resources

- [Florin Pop's Countdown Timer](https://www.youtube.com/watch?v=x7WJEmxNlEs) - The first tutorial I watched.
- [Uzoanya Dominic's Countdown Timer](https://www.youtube.com/watch?v=ZVOGPvo08zM) - Another tutorial that gave me some ideas on what to do.
- [Coding Entrepreneurs' Timer Tutorial](https://www.youtube.com/watch?v=NAx76xx40jM) - This one finally got me going on how to pause and start the countdown.
- [Uberduck.ai](https://uberduck.ai) - Great resource for synthesized voices.

## Author

- Website - [Joel P. Doctor](https://www.kingwell47.com) - Currently made using SquareSpace, I will migrate it once I make my own site.
- Frontend Mentor - [@kingwell47](https://www.frontendmentor.io/profile/kingwell47)
- Twitter - [@kingwell47](https://www.twitter.com/kingwell47)
- LinkedIn - [Joel P. Doctor](https://www.linkedin.com/in/joel-d-05854919/)

## Acknowledgments

Thanks to Ms. Jessica Chan (Coder Coder) and all the other YouTube creators making their knowledge available!
