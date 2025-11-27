import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
// Você pode reutilizar seu componente Header antigo ou colocar o código aqui.
// Vou integrar aqui para ficar conforme o requisito do Layout controlar o menu.

const MainLayout = () => {
  const { theme, toggleTheme } = useTheme();

  // Estilo para link ativo (Requisito: NavLink)
  const getLinkStyle = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    color: theme === 'light' ? '#007bff' : '#4dabf7',
    marginRight: '15px'
  });

  return (
    <div className={`app-container ${theme}`}>
      <header style={{ padding: '20px', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>📚 Sistema de Livros</h1>
          <nav>
            {/* Requisito: Navegação Declarativa com NavLink */}
            <NavLink to="/" style={getLinkStyle}>Home</NavLink>
            <NavLink to="/catalogo" style={getLinkStyle}>Catálogo</NavLink>
          </nav>
        </div>
        
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Tema Escuro 🌙' : 'Tema Claro ☀️'}
        </button>
      </header>

      {/* Requisito: Outlet para carregar as páginas filhas */}
      <main style={{ padding: '20px', minHeight: '80vh' }}>
        <Outlet />
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #ccc' }}>
        <p>&copy; 2025 - Atividade React Router</p>
      </footer>
    </div>
  );
};

export default MainLayout;