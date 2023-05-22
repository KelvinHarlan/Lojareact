import './home.css';
import Button from '../button/Button';
import logo from '../../imagens/logo.png';
import CardCategories from '../categories/CardCategories';

function Home() {
    return (
        <main className='main-container'>
            <div className='container'>
                <section className='sales'>
                    <h1 className='textSales'>SALES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur eum, est modi facilis iusto veritatis iste quis!</p>
                    <div className='button-box'>
                        <Button classElement='button-solid' text='Mais' />
                        <Button classElement='button-transparent' text='more' />
                    </div>
                </section>
                <section className='logo'>
                    <img src={logo} alt="logo" />
                </section>
            </div>
            <section className='categories'>
                <ul>
                    <CardCategories text='Smart Watch' color='card-green' />
                    <CardCategories text='Smartphones' color='card-blue' />
                    <CardCategories text='Acessórios' color='card-purple' />
                    <CardCategories text='Notebooks' color='card-orange' />
                </ul>
            </section>
        </main>

    )
}

export default Home;