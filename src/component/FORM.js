import React,{useState, useEffect}from 'react';

function Form({addOrUpdateitem, itemToEdit}){
    const [inputValue, setinputValue]=useState('');

    useEffect(()=>{
        if(itemToEdit){
            setinputValue(itemToEdit.value);
        }else{
            setinputValue('');
        }

    },[itemToEdit]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim()){
            addOrUpdateitem(inputValue);
            setinputValue('');
}
};
return(
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value ={inputValue}
        onChange={(e)=>
        setinputValue(e.target.value)}
        />
        <button type="submit"> {itemToEdit ? 'Actualizar':'agregar'}</button>
    </form>
);
}
export default Form;