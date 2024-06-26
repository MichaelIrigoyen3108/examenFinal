
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FeaturedProvider } from './Components/utils/FeaturedContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <FeaturedProvider>
        <App />
      </FeaturedProvider>
    </React.StrictMode>
  </BrowserRouter>
);
