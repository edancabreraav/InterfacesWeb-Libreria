import React, { useState } from 'react';
import './App.css';
import BookCard from './components/BookCard';
import Navbar from './components/Navbar';
import BookForm from './components/BookForm';

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "El Señor de los Anillos",
      author: "J.R.R. Tolkien",
      image: "https://m.media-amazon.com/images/I/91ddMPYKaYL.AC_UF1000,1000_QL80.jpg"
    },
    {
      id: 2,
      title: "Cien Años de Soledad",
      author: "Gabriel García Márquez",
      image: "https://m.media-amazon.com/images/I/91m51NXjg6L.AC_UF1000,1000_QL80.jpg"
    }
  ]);

  const [activeView, setActiveView] = useState('list');
  const switchView = (view) => setActiveView(view);

  const addBook = (newBook) => 
    setBooks([...books, { ...newBook, id: books.length+1 }]);

  const deleteBook = (id) => 
    setBooks(books.filter((book) => book.id !== id));

  const editBook = (updatedBook) => 
    setBooks(books.map((book) => 
      (book.id === updatedBook.id ? updatedBook : book)));

  return (
    <div className="App">
      <Navbar onSwitchView={switchView} />
      <h1>Librería</h1>
      {activeView === 'create' ? (
        <BookForm onAddBook={addBook} onEditBook={editBook} />
      ) : (
        <div className="book-list">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onDelete={deleteBook} onEdit={editBook}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;