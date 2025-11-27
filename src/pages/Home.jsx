import React from 'react';
import { useNavigate } from 'react-router-dom'; //hook para navegação programática

const Home = () => {
  const navigate = useNavigate();

  const handleEntrar = () => {
    // Navegação programática para /catalogo
    navigate('/catalogo');
  };

  return (
    <div className="home-page" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bem-vindo ao Catálogo Digital</h1>
      <p>Gerencie sua coleção de livros de forma simples e eficiente.</p>
      <p>Utilize o menu acima ou o botão abaixo para começar.</p>
      
      <button 
        onClick={handleEntrar} 
        style={{ padding: '10px 20px', fontSize: '1.2rem', marginTop: '20px', cursor: 'pointer' }}
      >
        Acessar Catálogo
      </button>
    </div>
  );
};

export default Home;