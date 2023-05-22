import './cardCategories.css'

function CardCategories({text, color}) {
    return (
        <li>
            <a className={color} href="#">{text}</a>
        </li>
    )
}

export default CardCategories;