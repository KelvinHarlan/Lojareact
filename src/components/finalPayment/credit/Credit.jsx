import React from "react";
import './credit.css';
import LogoCredit from '../../../imagens/photoCredit.png'

const Credit = () => {
    return (
        <div className="form_box">
            <div className="logo_credit_box">
                <img className="logo_credit" src={LogoCredit} alt="sadasd" />
            </div>
            <form>
                <div className="input_name_box">
                    <input type="text" name="name" id="name" placeholder="Nome Completo" />
                </div>
                <div className="input_name_box">
                    <input type="number" name="card_name" id="card_name" placeholder="Número do cartçao" />
                </div>
                <div className="data_card">
                    <input type="number" placeholder="12" />
                    <input type="number" placeholder="2028" />
                    <input type="number" placeholder="CVV" />
                </div>
                <div className="button_payment_box">
                    <button onClick={() => { console.log('') }}>Confirmar</button>
                    <button>Cancelar</button>

                </div>

            </form>
        </div>
    )
}

export default Credit;