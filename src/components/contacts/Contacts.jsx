import './contacts.css';
import Label from './label/Label';
import Input from './input/Input';
import { FaUserAlt } from "react-icons/fa";
import Button from '../button/Button.jsx'
import { useState } from 'react';

function Contacts() {

    const [nameUser, setNameUser] = useState('Não definido');
    
    const handleChangeName =(value) =>{
        setNameUser(value);
    } 

    console.log(nameUser);

    return (
       
        <>
            <div className='contact-container'>
            <form className='form-contact'>
                <h1 className='title-form'><FaUserAlt/> Contato</h1>
                <Label forName='name' text='Nome:'/>
                <Input onChangeFunction={handleChangeName} type='text' name='name' id='name' place='Digite seu nome'/>
                <Label forName='email' text='Email:'/>
                <Input type='email' name='email' id='email' place='Digite seu Email'/>
                <Label forName='telefone' text='Telefone:'/>
                <Input type='tel' name='telefone' id='telefone' place='Digite seu telefone'/>
                <Label forName='maisInfo' text='Mais Informaçoes:'/>
                <textarea name="maisInfo" id="maisInfo" cols="30" rows="10" placeholder='Digite aqui informações que deseja...'></textarea>
                <Button text='Enviar'/>
               
            </form>
        </div>
        </>
    )
}

export default Contacts;