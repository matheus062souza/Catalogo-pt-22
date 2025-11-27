import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; // Adicionado Link
import { useBooks } from '../context/BookContext';

const LivroDetalhe = () => {
    // Ler parâmetro da URL
    const { id } = useParams();
    const { books } = useBooks();
    
    // Navegação programática para voltar
    const navigate = useNavigate();

    // encontrar livro pelo ID
    const book = books.find(b => b.id.toString() === id);

    // erro = liivro não existe
    if (!book) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Livro não encontrado</h2>
                <p>O livro com ID {id} não existe no nosso catálogo.</p>
                {/* Melhor prática: Link explícito para voltar ao catálogo */}
                <Link to="/catalogo" style={{ color: '#007bff', textDecoration: 'underline' }}>
                    Voltar para o Catálogo
                </Link>
            </div>
        );
    }

    // sucesso= mostrar os detalhes
    return (
        <div className="book-details" style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h1>{book.title}</h1>
            
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
                <img 
                    src={book.cover || 'https://via.placeholder.com/150'} 
                    alt={book.title} 
                    style={{ maxWidth: '200px', height: 'auto', borderRadius: '4px' }}
                />
                <div>
                    <p><strong>Autor:</strong> {book.author}</p>
                    <p><strong>Ano:</strong> {book.year}</p>
                    <p><strong>ID:</strong> {book.id}</p>
                    <p style={{ marginTop: '10px', lineHeight: '1.5' }}>
                        <strong>Sinopse:</strong><br/>
                        {book.synopsis || 'Sem sinopse definida.'}
                    </p>
                </div>
            </div>

            <hr style={{ margin: '20px 0' }} />
            
            
            <button 
                onClick={() => navigate(-1)} 
                style={{ 
                    padding: '10px 15px', 
                    cursor: 'pointer', 
                    backgroundColor: '#6c757d', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px' 
                }}
            >
                &larr; Voltar
            </button>
        </div>
    );
};

export default LivroDetalhe;