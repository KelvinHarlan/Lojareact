import './label.css';

function Label({forName,text}) {
    return (
        <>
            <label htmlFor={forName}>{text}</label>
        </>
    )
}

export default Label;