import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Components/Mainpage/Router/Router.jsx';

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Components/Mainpage/AuthProvider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider,} from 'react-query'
const queryClient = new QueryClient()

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <HelmetProvider context={helmetContext}>
            <RouterProvider router={router} />
          </HelmetProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
