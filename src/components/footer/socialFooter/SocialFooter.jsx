import './socialFooter.css';
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function socialFooter() {
    return (
        <div className='social-footer'>
            <ul>
                <li>
                    <a href="#"><FaInstagram /></a>
                </li>
                <li>
                    <a href="#"><FaFacebookF /></a>
                </li>
                <li>
                    <a href="#"><FaTwitter /></a>
                </li>
            </ul>
        </div>
    )
}

export default socialFooter;