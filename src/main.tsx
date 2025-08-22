import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import './index.css'

createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
);
