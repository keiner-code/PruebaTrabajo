import React from "react";
import AppContext from "../context/AppContext";

const FormRegister = () =>{
    const {create} = React.useContext(AppContext);
    const handleSubmit = e => {
        e.preventDefault();
        create(
            {
                Nombre: e.target.name.value, 
                Apellido: e.target.lastName.value, 
                Procesado: false});
      };

    return (
        <>
        <h1>Registrarse</h1>
            <div className="registerImage">
                <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-businessman-vector-icon-png-image_3710727.jpg" alt="image" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="registerInput">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" placeholder="Ingrese Su Nombre"/>
                </div>
                <div className="registerInput">
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" name="lastName" placeholder="Ingrese Su Apellido"/>
                </div>
                <div className="registerButton">
                    <button type="submit">Registrarse</button>
                </div>
                </form>
        </>
    )
}

export default FormRegister;