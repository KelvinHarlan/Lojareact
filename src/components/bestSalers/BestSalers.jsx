import './bestSalers.css';
import products from '../products/dataProducts';

const productFilter = products.map((el) => {

    const price = el.price;
    const title = el.title;
    const img = el.img;

    return (
        <li key={el.id} className='salers-list'>
            <h3 className='categories-title' >{title}</h3>
            <img src={img} alt="image" />
            <p className='price'>R$ {price}</p>
        </li>
    )
})

function BestSalers() {

    return (
        <>
            {productFilter}
        </>
    )


}

export default BestSalers;