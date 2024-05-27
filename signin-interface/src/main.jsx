import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignIn } from './screens/SignIn'
import { ThemeProvider } from "@/components/themeProvider"

import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="default" storageKey="vite-ui-theme">
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
