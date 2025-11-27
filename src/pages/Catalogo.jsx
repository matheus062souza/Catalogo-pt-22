import React from 'react';
import { useBooks } from '../context/BookContext';
import SearchBar from '../components/SearchBar';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import Counters from '../components/Counters';

const Catalogo = () => {
    const { 
        books, filteredBooks, addBook, removeBook, 
        searchTerm, setSearchTerm, isLoading, error 
    } = useBooks();

    if (isLoading) return <div>Carregando livros...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div className="catalogo-page">
            <h2>Lista de Livros</h2>
            {/*  foco automático */}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            
            <hr />
            
            {/* Formulário de adição */}
            <BookForm onAddBook={addBook} />
            
            <hr />
            
            {/* Contadores */}
            <Counters total={books.length} filtered={filteredBooks.length} />
            
            {/* Lista de Livros */}
            <BookList books={filteredBooks} onRemoveBook={removeBook} />

            {books.length > 0 && filteredBooks.length === 0 && (
                <p>Nenhum livro encontrado.</p>
            )}
        </div>
    );
};

export default Catalogo;