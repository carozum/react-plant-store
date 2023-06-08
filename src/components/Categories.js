
import '../styles/Categories.css';

function Categories({activeCategory, setActiveCategory, categories}){

    return (
        <section  className="lmj-categories">
            <h2>Choisissez une catégorie</h2> 
            <select 
                value={activeCategory}
                onChange={(e)=>setActiveCategory(e.target.value)}
                className="lmj-categories-select"
            >
                <option value="all">Toutes les catégories</option>
                {categories.map((cat) =>
                    <option 
                        key={cat}
                        value ={cat}>
                        {cat}
                    </option>)}
            </select>
            <div className="lmj-categories-button">
                <button onClick={()=> setActiveCategory('All')}>Réinitialiser les catégories</button>
            </div>
            
        </section>
        
    );
}

export default Categories;