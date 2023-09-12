import React from "react";
import './payment.css';
import { useState } from "react";
import Credit from "./credit/Credit";
import Pix from "./pix/Pix";

const Payment = () => {

    const [isCredit, setIsCredit] = useState(false);
    const [isPix, setIsPix] = useState(false);

    const isCreditHandle = () => {
        setIsPix(false);
        setIsCredit(true);
    }

    const isPixHandle = () => {
        setIsCredit(false);
        setIsPix(true);
    }


    return (
        <div className="payment_credit_box">
            <h2 className="payment_credit_title">Escolha a forma de pagamento</h2>
            <div className="payment_button_box">
                <button className="credit_button" onClick={isCreditHandle}>Cartão de Crédito</button>
                <button className="pix_button" onClick={isPixHandle}>Pix</button>
            </div>
            

            {isCredit === true ?
                <Credit />
                : false}
            {
                isPix === true ?
                    
                  <Pix />  : false
            }
        </div>
    )
}

export default Payment;

