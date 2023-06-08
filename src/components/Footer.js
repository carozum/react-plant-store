import {useState, useEffect} from 'react';
import  '../styles/Footer.css';

function Footer({cart}){
    const [userInput, setUserInput] = useState("Votre email");
    
    useEffect(()=>{
        return () => 
            console.log("un composant a disparu")
    })

    function checkValue(input){
        if (!input.includes("@")){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
        }
    }

    return(
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input 
                    value={userInput}
                    onChange={(e)=>(setUserInput(e.target.value))}
                    onBlur={()=>(checkValue(userInput))} />
                <button 
                      onClick={()=> alert(`Vous êtes abonné avec l'adresse: ${userInput}`)}
                >Je m'abonne à la newsletter</button>
                
        </footer>
    );
}
export default Footer;