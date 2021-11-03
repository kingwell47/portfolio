## E-commerce Product Page

## Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

### Links

- Solution URL: https://www.frontendmentor.io/solutions/product-page-using-typescript-and-react--4n3Q7pI0
- Live Site URL: https://kingwell47.github.io/fem-product-page/

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- TypeScript
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This is my first time using TypeScript and the autocomplete was really nice to have:

```ts
export type ItemContent = {
  itemName: string;
  amount: number;
  price: number;
  discount: number;
  ogPrice: number;
  image: string;
};

const handleAddItem = (): void => {
  if (!amount) return;
  let inCart: ItemContent[] | null = cartItems.filter(
    (item): boolean => item.itemName === itemName
  );
  if (inCart.length >= 1) return;

  const newItem: ItemContent = {
    itemName,
    amount,
    price,
    discount,
    ogPrice,
    image,
  };
  setCartItems((prev: ItemContent[]) => [...prev, newItem]);
};
```

The useContext hook was also really good to use for global states:

```ts
export const CartContext = createContext<ProviderContext>({
  cartItems: [],
  setCartItems: () => {},
});

type Props = {
  children: JSX.Element;
};

export const CartProvider = ({ children }: Props): JSX.Element => {
  const [cartItems, setCartItems] = useState<ItemContent[]>([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
```

### Continued development

The lightbox slider becomes not synced to the page slider when it's clicked after being closed, syncing it would probably the next step.

Components don't have animations when exiting, mostly because making Framer Motion or React-Spring work with TypeScript requires more research that I'm not sure if worth it for this project.

### Useful resources

- [Build a React Image Slider Carousel from Scratch Tutorial by Brian Design](https://www.youtube.com/watch?v=l1MYfu5YWHc) - This helped me figure out the image slider component.
- [React Hooks useContext Tutorial (Storing a User) by Ben Awad](https://youtu.be/lhMKvyLRWo0) - This helped me implement the Cart Context for storing the Cart State.
- [Build a Shopping Cart with React and TypeScript - Tutorial by freeCodeCamp.org](https://youtu.be/sfmL6bGbiN8) - Seeing TypeScript being used for a similar project helped me immensely.
- [Passing props in React using Typescript by Mike Conner](https://dev.to/mconner89/passing-props-in-react-using-typescript-20lm) - Helped me figure out how to pass props to components.

## Author

- Website - [Joel P. Doctor](https://joeldoctor.com/)
- Frontend Mentor - [@kingwell47](https://www.frontendmentor.io/profile/kingwell47)
- Twitter - [@kingwell47](https://www.twitter.com/kingwell47)
- LinkedIn - [Joel P. Doctor](https://www.linkedin.com/in/joel-d-05854919/)

## Acknowledgments

Thanks to Ms. Jessica Chan (Coder Coder) and all the other YouTube creators making their knowledge available!
