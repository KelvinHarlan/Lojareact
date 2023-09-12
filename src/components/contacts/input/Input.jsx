import { useState } from 'react';
import './input.css';


function Input({type, name, id, place, onChangeFunction}) {
    
    
    return (
        <>
    
            <input 
            onChange={({target})=>{onChangeFunction(target.value)}}
            className='input-contact'
            type={type}
            name={name}
            id={id}
            placeholder={place}
             />
        </>
    )
}

export default Input;