import React from "react";
import './modal.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Modal = ({ onClose, productTitle, productImg, productPrice }) => {

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close-button" onClick={onClose}>
                    Fechar
                </button>
                <div className="product-modal">
                    <h3>{productTitle}</h3>
                    <img className="img_modal" src={productImg} alt="" />

                    <label>Descrição:</label>
                    <p className="modal_descrition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam officia cumque earum ab, suscipit illum aperiam temporibus necessitatibus fugiat modi tempora? Illum sit maxime dicta repudiandae eius, odio aliquam.</p>
                </div>
                <div className="modal_finish">
                    <label>Preço:</label>
                    <h3 className="modal_price">{productPrice}</h3>
                    <label>Desconto:</label>
                    <h3 className="modal_price">0.00</h3>
                    <label>Frete:</label>
                    <h3 className="modal_price">0.00</h3>

                </div>
                <div className="button_finish_modal_box">

                    <Link to={'/payment'}>
                        <button className="button_finish_modal">Finalizar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Modal;
