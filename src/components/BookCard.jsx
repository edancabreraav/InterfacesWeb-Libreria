import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin: 20px;
  width: 280px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 8px 18px;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
  }
`;

const CancelButton = styled(Button)`
  background-color: #bdc3c7;
  &:hover {
    background-color: #95a5a6;
  }
`;

const Input = styled.input`
  margin: 5px;
  padding: 12px;
  width: 200px;
  border-radius: 8px;
  border: 1px solid #ddd;
  transition: border 0.3s;

  &:focus {
    border-color: #3498db;
  }
`;

const SaveButton = styled(Button)`
  background-color: #2ecc71;
  &:hover {
    background-color: #27ae60;
  }
`;

const BookCard = ({ book, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState(book);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({
      ...editedBook,
      [name]: value,
    });
  };

  const handleSaveEdit = () => {
    onEdit(editedBook);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedBook(book);
    setIsEditing(false);
  };

  return (
    <Card>
      {isEditing ? (
        <div>
          <Input
            type="text"
            name="title"
            value={editedBook.title}
            onChange={handleEditChange}
            placeholder="Título"
          />
          <Input
            type="text"
            name="author"
            value={editedBook.author}
            onChange={handleEditChange}
            placeholder="Autor"
          />
          <Input
            type="text"
            name="image"
            value={editedBook.image}
            onChange={handleEditChange}
            placeholder="URL Imagen"
          />
          <SaveButton onClick={handleSaveEdit}>Guardar</SaveButton>
          <CancelButton onClick={handleCancelEdit}>Cancelar</CancelButton>
        </div>
      ) : (
        <div>
          <BookImage src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Button onClick={() => onDelete(book.id)}>Eliminar</Button>
          <Button onClick={() => setIsEditing(true)}>Editar</Button>
        </div>
      )}
    </Card>
  );
};

export default BookCard;
