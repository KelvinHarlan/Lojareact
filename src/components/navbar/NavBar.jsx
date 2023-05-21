import './navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';





function NavBar() {


    const [isTrue, setIsTrue] = useState(false);

   useEffect(()=>{

   },[isTrue])



    return (
        <nav className='navBar'>
            <ul>
                <li>
                    <Link to={"/"}>Início</Link>
                </li>
                <li>
                    <Link to={"/contacts"}>Contato</Link>
                </li>
                <li>
                    <Link>Categoria</Link>
                </li>
            </ul>
            <div className="iconBoxNav">
                <ul>
                    <li className='search'>
                       {isTrue &&(
                         <input type="search" />
                       )}
                    </li>
                    <li>
                        <a onClick={()=>{setIsTrue(!isTrue)}} type='button'><FaSearch /></a>
                    </li>
                    <li>
                        <a href="#"><FaShoppingCart /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;