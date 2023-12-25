import * as React from 'react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

//TODO: adjust color palette 
const colors = {
  primary: '#254E70', //indigoDye
  secondary: '#C3D9EB', //lighterIndigo
  white: '#F0F6F6', //antiFlashWhite
  highlight: '#CD4631', // jasper
  dark: '#230C0F' // licorice
}

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
