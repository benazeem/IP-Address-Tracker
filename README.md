# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![Desktop](/IP_Address_App.png)

### Links

- Solution URL: [Frontend Solution](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0/hub?share=true)
- Live Site URL: [Domain Ip Tracker](https://domainiptracker.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://react.dev/) - JS library
- [Vite](https://vitejs.dev/) - Frontend tooling
- [Leaflet](https://leafletjs.com/) - Map integration
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript

### What I learned

I learned how to manage state efficiently using the useReducer hook in React, which helped streamline the handling of various app states.

One of the key lessons was the importance of ensuring that external APIs are secure (supporting HTTPS), as the browser blocked an insecure API that I initially used. Switching to a secure API resolved this issue.

### Continued development

In future projects, I want to:
Improve how I handle API requests, like adding caching for better performance
Get more comfortable with advanced state management in React, especially in complex scenarios

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Great resource for HTML, CSS, and JavaScript documentation
- [React Docs](https://react.dev/reference/react) - The official documentation for React, which was extremely helpful in understanding hooks.
- [React Leaflet Documentation](https://react-leaflet.js.org/docs/next/start-introduction/) - This library was essential for integrating maps into my project. It provides an easy way to use Leaflet in React, allowing me to display IP locations on an interactive map with minimal setup.

## Author

- GitHub - [benazeem](https://github.com/benazeem)
- Linkedin - [devazeem](https://www.linkedin.com/in/devazeem/)
- Frontend Mentor - [@benazeem](https://www.frontendmentor.io/profile/benazeem)

## Acknowledgments

I would like to thank the Frontend Mentor community for their valuable feedback and support throughout the project. Special thanks to the creators of the React and Leaflet libraries, which made building the map feature seamless. The online documentation and examples were incredibly helpful in understanding how to integrate maps into a React application.
