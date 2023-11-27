import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Authentication/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <QueryClientProvider client={queryClient}>
  <AuthProvider>
  <HelmetProvider>
   <RouterProvider router={router} />
   <Toaster />
   </HelmetProvider>
 
  </AuthProvider>
  </QueryClientProvider>
  
  </React.StrictMode>,
)
