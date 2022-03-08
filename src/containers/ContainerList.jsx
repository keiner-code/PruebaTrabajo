import React from "react";
import RegisterItem from "../components/RegisterItem";
import AppContext from '../context/AppContext';

const ContainerList =() =>{

    const {register,state,update} = React.useContext(AppContext);

    const handlerClick = () => {
        state.map(value => update(value));
        alert('Registro Procesado');
    }
    
    return (
        <div className="containerList">
            <div className="registerList">
                <div className="registerTitle">
                    <h1>Consulta De Registro</h1>
                </div>
                <div className="registerListItem">
                 {register.register[0].docs.map(item =><RegisterItem data={{data: item.data(), id: item.id}} key={item.id}/>)} 
                </div>
                <div className="registerProcess">
                    <button onClick={handlerClick}>Procesar</button>
                </div>
            </div>
        </div>
    )
}
export default ContainerList;