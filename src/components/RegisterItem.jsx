import React from "react";
import AppContext from '../context/AppContext'

const array = [];

const RegisterItem = ({data}) =>{
    const {processArray} = React.useContext(AppContext);
    const componentStyle ={
        border: '1px solid rgb(250, 122, 122)'
    }
    const [style,setStyle] = React.useState({});

    const handlerClick = (id) =>{
        setStyle(componentStyle);

        const valor = array.find(e => e === id);
        if(valor === undefined){ 
             array.push(id)
        }else{
            array.splice(id,1);
            setStyle({});
        }
        processArray(array);
    }
    return(
        <div style={style} className="registerItem" onClick={()=>handlerClick(data.id)}>
            <div className="registerData">
                <p><strong>Nombre: </strong>{data.data.Nombre}</p>
                <p><strong>Apellido: </strong>{data.data.Apellido}</p>
            </div>
            <div className="registerStatus">
                <strong>Estado</strong>
                <p>{data.data.Procesado === false ? 'Sin Procesar': 'Procesado'}</p>
            </div>
        </div>
    )
}
export default RegisterItem;