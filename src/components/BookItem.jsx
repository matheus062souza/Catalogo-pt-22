import React from 'react';
import { Link } from 'react-router-dom';

function BookItem({ book, onRemove }) {
    if (!book) return null;

    return (
        <li className="book-item">
            <div className="book-info">
                {/* CORREÇÃO 1: A rota deve ser /catalogo/ para bater com o App.jsx */}
                {/* CORREÇÃO 2: Usar 'book.id' em vez de 'catalogo.id' */}
                <Link 
                    to={`/catalogo/${book.id}`} 
                    style={{ fontWeight: 'bold', marginRight: '5px' }}
                >
                    {book.title}
                </Link> 
                por {book.author} ({book.year})
            </div>
            <button onClick={() => onRemove(book.id)}>Remover</button>
        </li>
    );
}

export default BookItem;