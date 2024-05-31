import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import BlogContextProvider from './context/blogContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BlogContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </BlogContextProvider>,
)
