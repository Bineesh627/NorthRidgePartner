import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Fonts (self-hosted via @fontsource, no CDN needed)
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/caveat/500.css';
import '@fontsource/caveat/600.css';
import '@fontsource/source-serif-4/600.css';
import '@fontsource/source-serif-4/500-italic.css';
import '@fontsource/source-serif-4/600-italic.css';

// Bootstrap + icons, then the site's own styles (order matters)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/main.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
