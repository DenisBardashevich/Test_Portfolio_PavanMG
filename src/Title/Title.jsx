import './Title.css'
import Avatar from './img/Avatar.png'

const Title = () => {
    return (
        <>
            <div className="Title">
                <p>Hi <span>👋,</span><br />
                    My name is<br />
                    Pavan MG<br />
                    I build things for web</p>
                <img src={Avatar} alt="Avatar" />
            </div>


        </>
    );
}

export default Title;