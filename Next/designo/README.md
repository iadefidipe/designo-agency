# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Designo agency website solution](#frontend-mentor---designo-agency-website-solution)
  - [Table of contents](#table-of-contents)
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
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the locations page maps (we recommend [Leaflet JS](https://leafletjs.com/) for this)

### Screenshot

![](./Screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/iadefidipe/designo-agency)
- Live Site URL: [Add live site URL here](https://designo-agency-psi.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles



### What I learned

- The first challenge for me on this project was working with images, especially styling next images. But it all became clear when I read the [documentation](https://nextjs.org/docs/api-reference/next/image). Rendering images in Next js is one of its super power as it renders optimised images.
- Pre-rendering portfolio pages dynamically:
```js
export const getStaticPaths = async () => {
  const paths = portfolioData.map((portfolio) => {
    return {
      params: { portfolioId: portfolio.id },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.portfolioId
  const data = portfolioData.find((port) => {
    return port.id === id
  })

  return {
    props: {
      portfolio: data,
    },
  }
}
```

- Created a custom hook for validation of forms:
```js
const useForm = () => {
  // ? form values are updated to state on change events
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    nessage: "",
  })

  // ? erros updates after passing validations test
  const [errors, setErrors] = useState({})
  const [sucess, setSucess] = useState(false)
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateForm(values))
    setDataIsCorrect(true)
    
  }
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      setSucess(true)
      setValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }, [errors])

  return { handleChange, handleSubmit, values, errors, sucess}
}

export default useForm
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.



### Continued development
- I will be working more on getting a good grasp of Next Js Static and server-side rendering and when to apply them in future projects
- Better state management in react: redux and context api

### Useful resources

- [Next Js Documentation](https://www.example.comhttps://nextjs.org/docs/getting-started) - The best way to understand any technology well, is by reading through the documentation.
- [Net Ninja Next js for beginners playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw) - Helped me get start with the basics of the Next
- [Code Evolution Next js for beginners playlist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH) - More indepth course on Next js
- [React form using custom hooks](https://www.youtube.com/watch?v=WvRwiE9IkFg) 


## Author

- Website - [Israel Adefidipe](https://iadefidipe.netlify.app/)
- Frontend Mentor - [@iadefidipe](https://www.frontendmentor.io/profile/iadefidipe)
- Twitter - [@iadefidipe](https://www.twitter.com/iadefidipe)
- LinkedIn - [@iadefidipe](https://www.linkedin.com/in/iadefidipe/)


## Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects. These premium challenges are perfect portfolio pieces, so please feel free to use what you create in your portfolio to show others
