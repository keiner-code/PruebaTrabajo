import React from "react";
import AppContext from "../context/AppContext";

const CrudRegisterItem = () =>{
    const {statequery,itemData,create,deleteRegister} = React.useContext(AppContext);
    const [content,setContent] = React.useState('');
    const [contentName,setContentName] = React.useState('');
    const [contentsecondName,setContentSecondName] = React.useState('');

    const handlerClick = () =>{
        itemData(content);
    }
    const handleCreate = () =>{
        create({
            Nombre: contentName, 
            Apellido: contentsecondName, 
            Procesado: false});
    }
    const handleDelete = () =>{
        deleteRegister(content);
    }
    return(
        <div className="crudRegister">

            <div className="crudRegisterTitle">
                <h1>Crud De Registro</h1>
            </div>

            <div className="searchRegister">
                <input type="text" onChange={event => setContent(event.target.value)} placeholder="Ingrese El Nombre Del Registro"/>
                <button onClick={handlerClick}>Buscar</button>
            </div>

            <div className="infoSearchRegister">
                <div className="infoRegister">
                    <span>Nombre <input type="text" onChange={e => setContentName(e.target.value)} defaultValue={statequery.name}/></span>
                    <span>Apellido <input type="text" onChange={e => setContentSecondName(e.target.value)} defaultValue={statequery.secondName}/></span>
                    <button onClick={handleDelete}>Eliminar</button>
                    <button onClick={handleCreate}>Crear</button>
                </div>
            </div>

        </div>
    )
}
export default CrudRegisterItem;