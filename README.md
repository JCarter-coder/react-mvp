# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Setup of Project:

### Creating a React project with Vite:

```
npm create vite@latest FILENAME --template react
```
### Adding Chakra UI in the React-Vite project to implement a simple, modular, and accessible component library for building components.

```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

#### Then import the module in the 'main.jsx' file,

```javascript
import { ChakraProvider } from '@chakra-ui/react'
```
#### And wrap the existing App component in the ChakraProvider component like such,


```HTML
<ChakraProvider>
    <App />
</ChakraProvider>
```

### Create an Express server

Add Express to the project: `npm install express`
Add Nodemon to keep the server running after every update: `npm install nodemon`
In the package.json within "scripts" add the following,
```javascript
"server": "nodemon server.js"
```
Install Dotenv `npm install dotenv`
