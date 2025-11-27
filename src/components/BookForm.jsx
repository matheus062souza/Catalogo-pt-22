import React, { useState } from 'react';

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
 
  const [cover, setCover] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      alert('Preencha pelo menos título e autor!');
      return;
    }
    
  
    onAddBook({ 
        title, 
        author, 
        year, 
        cover: cover || 'https://via.placeholder.com/150', // Imagem padrão,se não preencher
        synopsis 
    });

    // limpar campos
    setTitle('');
    setAuthor('');
    setYear('');
    setCover('');
    setSynopsis('');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
        <h3>Novo Livro</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input 
                type="text" 
                placeholder="Título" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Autor" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Ano" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
                style={{ width: '80px' }}
            />
        </div>
        
        {/* Inputs */}
        <div style={{ marginTop: '10px' }}>
            <input 
                type="url" 
                placeholder="URL da Imagem (Capa)" 
                value={cover} 
                onChange={(e) => setCover(e.target.value)} 
                style={{ width: '100%', marginBottom: '5px' }}
            />
            <textarea 
                placeholder="Sinopse do livro..." 
                value={synopsis} 
                onChange={(e) => setSynopsis(e.target.value)}
                style={{ width: '100%', height: '60px', padding: '5px' }}
            />
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>Adicionar Livro</button>
    </form>
  );
}

export default BookForm;