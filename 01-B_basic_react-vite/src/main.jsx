import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'

const reactElement = React.createElement(
    'a',
    {
        href : 'https://google.com',
        target : '_blank'
    },
    'Go to Google!'
)

createRoot(document.getElementById('root')).render(
    <App />
    // reactElement
);