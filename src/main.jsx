import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Authentication/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <AuthProvider>
  <HelmetProvider>
   <RouterProvider router={router} />
   </HelmetProvider>
  </AuthProvider>
 
  
  </React.StrictMode>,
)
