import React from "react";


const Navbar = ({onSwitchView}) => {
    return(
        <div className="navbar">
            <button className="navbar-button" onClick={()=>onSwitchView('create')}>
                Crear Libro
            </button>
            <button className="navbar-button" onClick={()=>onSwitchView('list')}>
                Lista de Libros
            </button>
        </div>
    )
}

export default Navbar;