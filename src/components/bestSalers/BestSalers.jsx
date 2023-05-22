import './bestSalers.css';
import products from '../products/dataProducts';

const productFilter = products.map((el)=>{
    const price = String(el.price).replace('.', ',');
    return (
        <li key={el.id} className='salers-list'>
            <h3 className='categories-title' >{el.title}</h3>
            <img src={el.img} alt="image" />
            <p className='price'>{`R$ ${price}`}</p>
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