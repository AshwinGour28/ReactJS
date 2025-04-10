import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const ReactElement = React.createElement(
  'a',
  {href: "https://google.com",
    target:'_blank'
  },
  "Visit google"
)
createRoot(document.getElementById('root')).render(
  // <App />
  ReactElement
  
)
