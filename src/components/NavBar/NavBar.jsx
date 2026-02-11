import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Inicio from '../Inicio/Inicio.jsx'
import AcoesDaConnect from '../AcoesDaConnect/AcoesDaConnect.jsx'
import QuemSomos from '../QuemSomos/QuemSomos.jsx'
import Perfil from '../Perfil/Perfil.jsx'

import styles from './NavBar.module.scss'

import Logo from '../../assets/logo.png'
import ImgPerfil from '../../assets/imgperfil.jpeg'

function NavBar() {
    return (
        <BrowserRouter>
        <nav className={styles.navBar} >
            <Link to='/'>
            <img src={Logo} alt="Logo da Connect" />
            </Link>
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/acoesDaConnect'>Ações da Connect</Link></li>
                <li><Link to='/quemSomos'>Quem Somos</Link></li>

            </ul>
            <Link to='/perfil'>
            <img className={styles.imgPerfil} src={ImgPerfil} alt="Imagem do perfil" />
            </Link>
        </nav>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/acoesDaConnect' element={<AcoesDaConnect/>}/>
            <Route path='/quemSomos' element={<QuemSomos/>}/>
            <Route path='/perfil' element={<Perfil/>}/>

        </Routes>
        </BrowserRouter>)
}

export default NavBar