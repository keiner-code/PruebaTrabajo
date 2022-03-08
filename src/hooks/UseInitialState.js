import React from "react";
import {collection, addDoc, getDocs, updateDoc, doc, query, where, deleteDoc} from 'firebase/firestore';

import db from '../firebase';


    const initialstate ={ 
        register: []
    }

const UseInitialState = () =>{

    const [state, setProcess] = React.useState([]);
    const [register, setRegister] = React.useState(initialstate);
    const [statequery,setQuery] = React.useState({});

    React.useEffect(() => {
        getData();
    },[]);

    const getData = async () =>{

        const datos = await getDocs(collection(db,'crudregistro'));
            setRegister({ register: [datos]});
    }

    const itemData = async (name) => {
        const q = query(collection(db,'crudregistro'), where('Nombre', '==',name));
        const data = await getDocs(q);
        setQuery({name: data.docs[0].data().Nombre,secondName: data.docs[0].data().Apellido});
    }
    

    const create = async (register) => {
        try{
             await addDoc(collection(db,'crudregistro'),register);
             alert('Registro Agregado');
            getData();
        }catch(e){
            console.log('Error',e);
        }
    }

    const update = async (data) =>{
        try{
            await updateDoc(doc(db,'crudregistro',data),{ Procesado: true});
            getData();
        }
        catch(e){
            console.error(e);
        }
    }

    const deleteRegister = async(id) =>{
        console.log(id);
        await deleteDoc(doc(db, "crudregistro", id));
        alert('Registro Eliminado Con Exito');
    }

    const processArray = (arrayid) =>{
         setProcess(arrayid); 
    }

    return{
        create,
        register,
        update,
        processArray,
        state,
        itemData,
        statequery,
        deleteRegister
    }
}

export default UseInitialState;