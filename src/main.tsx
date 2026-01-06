import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.tsx';
import Projects from './Projects.tsx';
import Bacheloroppgave from './Bacheloroppgave.tsx'; 
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/bacheloroppgave" element={<Bacheloroppgave />} /> 
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
