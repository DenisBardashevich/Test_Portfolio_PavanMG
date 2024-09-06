import './Footer.css'
import Footer_logo from './img/logo.svg'
import Footer_GitHub from './img/GitHub.svg'
import Footer_Linkedin from './img/linkedin.svg'
import Footer_Twitter from './img/Twitter.svg'

const Footer = () => {
    return ( 
        <>
        <div className="Footer_up">
            <div className="Footer_logo"><img src={Footer_logo} alt="Logo" /></div>
            <div className="Footer_contacts">
                <span Footer_contacts_number>+91 12345 09876</span>
                <span Footer_contacts_email>info@example.com</span>
                <div className="Footer_contacts_socials">
                    <a href="#"><img src={Footer_GitHub} alt="GitHub" /></a>
                    <a href="#"><img src={Footer_Twitter} alt="Twitter" /></a>
                    <a href="#"><img src={Footer_Linkedin} alt="Linkedin" /></a>
                    
                </div>
                
            </div>
        </div>
        <div className="arrow"></div>
        <div className="Footer_down">
            <div className="Footer_nav">
                <p>Home</p>
                <p>About</p>
                <p>Technologies</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            <div className="Footer_designed">Designed and built by <a href="#">Pavan MG</a> with <a href="#">Love</a> & <a href="#">Coffee</a></div>
        </div>
        
        
        </>
     );
}
 
export default Footer;