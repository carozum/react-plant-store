import {useState} from 'react';
import  '../styles/Footer.css';

function Footer(){
    const [userInput, setUserInput] = useState("Votre email");

    function checkValue(input){
        if (!input.includes("@")){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
        }
    }

    return(
        <div className='container-footer'>
            <form className='footer-form'>
                <input 
                    value={userInput}
                    onChange={(e)=>(setUserInput(e.target.value))}
                    onBlur={()=>(checkValue(userInput))} />
                <button 
                      onClick={()=> alert(`Vous êtes abonné avec l'adresse: ${userInput}`)}
                >Je m'abonne à la newsletter</button>
            </form>
        </div>
    );
}
export default Footer;