# PH News App

## Top News and Topic Search

This is a news app using the newsapi.org api service focused on the Philippines.

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

- Select categories of news to focus on with a pop-up menu.
- Search for a topic that will display news from that topic.
- Switch to dark mode/light mode with a button press. The app will also detect their system preferences on first load.

### Links

- Live Site URL: https://ph-news-app.herokuapp.com/

## My process

### Built with

- Express JS
- [Material UI](https://mui.com/) - React UI library
- [React](https://reactjs.org/) - JS library
- [Heroku](heroku.com) - Cloud application platform
- [News API](https://newsapi.org/)

### What I learned

Setting up a simple server to get the data from the API:

```js
app.get("/api/articles/:modifier", async (req, res) => {
  await axios
    .get(`${process.env.NEWS_BASE_URL}${req.params.modifier}`, {
      params: { ...req.query, apiKey: process.env.NEWS_API_KEY },
    })
    .then(({ data }) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
```

Material UI was a quick way of setting up UI components and themes:

```jsx
<ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="xl" sx={{ paddingTop: 15, paddingBottom: 5 }}>
      <Navbar
        category={category}
        setCategory={setCategory}
        setTopic={setTopic}
        topic={topic}
        modeToggle={colorMode.toggleColorMode}
      />
      <ContentGrid category={category} topic={topic} />
    </Container>
  </ThemeProvider>
</ColorModeContext.Provider>
```

### Continued development

This was just a small app to help me learn Material UI so further customization of the UI will need to be done.

### Useful resources

- [Material UI Tutorial by The Net Ninja](https://www.youtube.com/watch?v=0KEpWHtG10M&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58) - This helped me understand what to do with the Material UI components.
- [Axios Crash Course by Traversy Media](https://www.youtube.com/watch?v=6LyagkoRWYA) - Using Axios for both back-end and front-end application.

## Author

- Website - [Joel P. Doctor](https://joeldoctor.com/)
- Frontend Mentor - [@kingwell47](https://www.frontendmentor.io/profile/kingwell47)
- Twitter - [@kingwell47](https://www.twitter.com/kingwell47)
- LinkedIn - [Joel P. Doctor](https://www.linkedin.com/in/joel-d-05854919/)

## Acknowledgments

Thanks to Ms. Jessica Chan (Coder Coder) and all the other YouTube creators making their knowledge available!
