import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import { ThemeProvider } from './context/ThemeContext'; 

// Imports dos Layouts e Páginas
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import LivroDetalhe from './pages/LivroDetalhe';


function App() {
    return (
        <BookProvider> 
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="catalogo" element={<Catalogo />} />
                        <Route path="catalogo/:id" element={<LivroDetalhe />} />
                        <Route path="*" element={<div>Página não encontrada.</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </BookProvider>
    );
}
export default App;