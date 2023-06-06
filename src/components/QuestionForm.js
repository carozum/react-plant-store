function handleSubmit(e) {
    // prevent default pour éviter que le submit ne rafraichisse la page.
    e.preventDefault()
    alert(e.target['my_input'].value)
}

function QuestionForm(){
    return( 
        <form onSubmit={handleSubmit}>
            {/* Rq : React permet de préciser une default value au champ input */}
            <input type='text' name='my_input' defaultValue='Tapez votre texte' />
            <button type='submit'>Entrer</button>
        </form>
    );
}

export default QuestionForm;