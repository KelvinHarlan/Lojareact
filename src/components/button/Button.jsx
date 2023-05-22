import './button.css'

function Button({text, classElement}) {
    return (
        <button className={classElement}>{text}</button>
    )
}

export default Button;
