# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Deployed project: https://resolutionstodo.vercel.app/

# React MVP Front-end overview

This document provides an overview of the React MVP Application, which uses React components and a ChakraUI CSS Toolkit.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Chakra UI**: A simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Framer Motion**: A library that powers animations in React projects.
- **Emotion**: A library designed for writing css styles with JavaScript.

# Server Application Overview

This document provides an overview of the server application, which uses Express for server-side logic and PostgreSQL for database interactions.

## Features

- **Express**: Utilized for handling server requests and middleware.
- **PostgreSQL**: Used for database management.
- **CORS**: Enabled to allow cross-origin requests.
- **Environment Variables**: Managed through `dotenv` for better configuration practices.
- **Logging**: Implemented using `morgan` for HTTP request logging.

## Setup of Project:

### Creating a React project with Vite:
Run the following in the terminal: `npm create vite@latest FILENAME --template react`.  Add Chakra UI in the React-Vite project to implement a simple, modular, and accessible component library for building components by running `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`.

Then import the module in the 'main.jsx' file,
```javascript
import { ChakraProvider } from '@chakra-ui/react'
```

And wrap the existing App component in the ChakraProvider component like such,
```HTML
<ChakraProvider>
    <App />
</ChakraProvider>
```

### Creating an Express server

Add Express to the project: `npm install express`.  Then add Nodemon to keep the server running after every update: `npm install nodemon`.

In the package.json within "scripts" add the following,
```javascript
"server": "nodemon server.js"
```
Install Dotenv `npm install dotenv`.  Then create an .env file to place your environment variables which will look something like this:
```javascript
PORT=8000
DATABASE_URL=postgres://user:password@host:5432/database
```
Add the following to your server.js file:
```javascript
import dotenv from 'dotenv'

dotenv.config()

const sql = postgres(process.env.DATABASE_URL)
```
For the server port, reference PORT variable to `process.env.PORT`.

To pool requests to your database install pg: `npm install pg`.  Then add the following to server.js:
```javascript
import pg from 'pg'

const { Pool } = pg;

const pool = new Pool({XXXXX})
```
Finally, install cors to allow resource sharing across multiple domains. `npm install cors`.  Then add to server.js:
```javascript
import cors from 'cors'
```
