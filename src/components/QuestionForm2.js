import {useState} from 'react';



function QuestionForm2(){
    // je vais créer ma variable inputValue et la fonction qui va permettre de changer sa valeur dans le state local.
    //pour cela j'utilise  useState() auquel je passe en paramètre la valeur initiale de la variable inputValue

    const [inputValue, setInputValue] = useState("Posez votre question ici");

    const isInputError = inputValue.includes('f');

    function checkValue(value) {
        if (!value.includes('k')) {
            setInputValue(value)
        }
    }
    
    return (
        <div>
            <textarea
                value={inputValue}
                // onChange={(e) => setInputValue(e.target.value)}
                onChange={(e) => checkValue(e.target.value)}
            />
            
            {/* <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button> */}

            {isInputError && ( <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>)}
            
            <button onClick={() => checkValue(inputValue)}>Vérifier la valeur</button>
        </div>
    );
}

export default QuestionForm2;