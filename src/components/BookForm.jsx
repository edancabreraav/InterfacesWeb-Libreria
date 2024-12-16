import React, {useState} from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    width:100%;
    max-width:500px;
    margin:30px auto;
    background-color: #fff;
    padding:20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    text-align: center;
    box-sizing: border-box;
`;

const InputGroup = styled.div`
    margin-bottom: 20px;
    text-align: left;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    color: #333;
    transition: border 0.3s, box-shadow: 0.3s;
    box-sizing: border-box

    &:focus {
        border-color: #3498db;
        box-shadow: 0 0 8ox rgba(52,152,219,0.3)
    }
`;

const Label = styled.label`
    font-weight: bold;
    color: #333;
    font-size: 14px;
`

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor:pointer;
    transition: background-color 0.3s, transform 0.3s;
    box-sizing: border-box;

    &:hover {
        background-color: #2980b9;
        transform: translateY(-2px);
    }
`;

const BookForm = ({onAddBook}) => {
    const [book, setBook] = useState({
        title:'',
        author:'',
        image:''
    });

    const handleChange = (e) => {
        console.log(e.target);
        const {name, value} = e.target;
        setBook({
            ...book,
            [name]: value
        }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (book.title && book.author && book.image) {
            onAddBook(book);
            setBook({ title: '', author: '', image: '' });
        }
    };

    return(
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <h2>Crear Nuevo Libro</h2>
                <InputGroup>
                    <Label >Título</Label>
                    <Input 
                    type='text'
                    name='title'
                    value={book.title}
                    onChange={handleChange} 
                    placeholder='Ingresa el título del libro'>
                    </Input>
                    <Label >Autor</Label>
                    <Input 
                    type='text' 
                    name = 'author'
                    value={book.author}
                    onChange={handleChange}
                    placeholder='Ingresa el autor del libro'>
                    </Input>
                    <Label >URL de la imagen</Label>
                    <Input 
                    type='text'
                    name='image'
                    value={book.image}
                    onChange={handleChange} 
                    placeholder='Ingresa la URL de la portada'> 
                    </Input>
                </InputGroup>
                <Button type="submit">Agregar Libro</Button>
            </form>
        </FormContainer>
    )
}

export default BookForm;