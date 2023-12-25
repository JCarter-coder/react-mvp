import * as React from 'react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

//TODO: adjust color palette 
const colors = {
  primary: '#42BFDD', //aeroBlue
  secondary: '#BBE6E4', //mintGreen
  white: '#F0F6F6', //antiFlashWhite
  highlight: '#254E70', // indigoDye
  dark: '#493B2A' // taupe
}

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
