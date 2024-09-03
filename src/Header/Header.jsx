import './Header.css'
import Logo from './../../public/Logo.svg'
import GitHub from './img/GitHub.svg'
import Linkedin from './img/linkedin.svg'
import Twitter from './img/Twitter.svg'

const Header = () => {
    return (
        <>
            <div className="Header">
                <div className="Header_logo"><img src={Logo} alt="Logo" /></div>
                <div className="Header_nav">
                    <ul>
                        <li> <a className='Home' href="#">Home</a></li>
                        <li> <a className='About' href="#">About</a></li>
                        <li> <a className='Tech_Stack' href="#">Tech Stack</a></li>
                        <li> <a className='Projects' href="#">Projets</a></li>
                        <li> <a className='Contact' href="#">Contact</a></li>
                        <li className='Header_socials'> <a href="#"><img src={GitHub} alt="GitHub" /></a>

                            <a href="#"><img src={Twitter} alt="Twitter" /></a>
                            <a href="#"><img src={Linkedin} alt="Linkedin" /></a>


                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Header;