import './bestSalers.css';
import products from '../products/dataProducts';
import Modal from '../modal/Modal';
import { useState } from 'react';




const BestSalers = ({ product }) => {

    const onClose = () => {
        setShowDescrition(!showDescrition)
    }
    const [showDescrition, setShowDescrition] = useState(false);
    const [finish, setFinish] = useState(false);


    return (

        <>

            <li className='salers-list'>
                <h3 className='categories-title' >{product['title']}</h3>
                <img src={product['img']} alt="image" />
                <p className='price'>R$ {product['price']}</p>
                <button onClick={onClose} className='buy'>Comprar</button>


            </li>

            

            {

                showDescrition &&
                <Modal
                    productTitle={product['title']}
                    productImg={product['img']}
                    productPrice={product['price']}
                    onClose={onClose}

                />


            }

            
           

        </>
        
    )


}


export default BestSalers;