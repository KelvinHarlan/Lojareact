import React from "react";
import './pix.css';
import pixImg from '../../../imagens/qrcode.png';
const Pix = ()=>{
    return (
        <div className="pix_box">
            <img className="pix_img" src={pixImg} alt="Pix" />
            <h4>Leia o QrCode e finalize seu pagamento</h4>
        </div>
    )
}


export default Pix;