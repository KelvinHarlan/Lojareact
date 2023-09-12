
import './App.css';
import NavBar from './components/navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';


function App() {


  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
