import './input.css';

function Input({type, name, id, place}) {
    return (
        <input className='input-contact' type={type} name={name} id={id} placeholder={place} />
    )
}

export default Input;