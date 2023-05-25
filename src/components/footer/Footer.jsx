import './footer.css';
import Inicio from './inicio/Inicio.jsx';
import Sobre from './sobre/Sobre.jsx';
import Suporte from './suporte/Suporte.jsx';
import Informacoes from './informacoes/Informacoes';
import SocialFooter from './socialFooter/SocialFooter';

function footer() {
  return (
    <>
      <div className='footer'>
        <Inicio />
        <Sobre />
        <Suporte />
        <Informacoes />
      </div>
      <SocialFooter />
    </>

  )
}

export default footer;