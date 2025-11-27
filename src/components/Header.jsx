import React from 'react';
import { NavLink } from 'react-router-dom'; // Import 
import { useTheme } from '../context/ThemeContext';

function Header() {
    const { theme, toggleTheme } = useTheme();

    // Estilo para destacar o link ativo
    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: theme === 'light' ? '#007bff' : '#4dabf7'
    };

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
            <h1 style={{ margin: 0 }}>📚 Catálogo</h1>
            
           
            <nav style={{ display: 'flex', gap: '20px' }}>
                <NavLink 
                    to="/" 
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                >
                    Início
                </NavLink>
                <NavLink 
                    to="/catalogo" 
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                >
                    Catálogo
                </NavLink>
            </nav>

            <button onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </header>
    );
}

export default Header;