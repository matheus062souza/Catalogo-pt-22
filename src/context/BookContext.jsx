import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const BookContext = createContext();

export function BookProvider({ children }) {
    
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [searchTerm, setSearchTerm] = useLocalStorage('bookSearchTerm', '');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('/books.json');
                if (!response.ok) throw new Error('Falha ao carregar os dados.');
                const data = await response.json();
                setBooks(data.map(book => ({ ...book, id: book.id || Date.now() + Math.random() }))); 
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBooks();
    }, []); 

    const addBook = (newBook) => {
        const bookWithId = { ...newBook, id: Date.now() }; 
        setBooks(prevBooks => [...prevBooks, bookWithId]);
    };

    const removeBook = (id) => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
    };
    
    const filteredBooks = useMemo(() => {
        if (!searchTerm) return books;
        const lowerCaseSearch = searchTerm.toLowerCase();
        return books.filter(book => 
            book.title.toLowerCase().includes(lowerCaseSearch) ||
            book.author.toLowerCase().includes(lowerCaseSearch)
        );
    }, [books, searchTerm]);

    return (
        <BookContext.Provider value={{ 
            books, filteredBooks, addBook, removeBook, 
            searchTerm, setSearchTerm, isLoading, error 
        }}>
            {children}
        </BookContext.Provider>
    );
}

export const useBooks = () => useContext(BookContext);