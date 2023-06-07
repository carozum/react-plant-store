import '../styles/ShoppingList.css';
import plantList from '../datas/PlantList';
import PlantItem from './PlantItem';
import CatList from './Categories';


function ShoppingList({cart, updateCart}) {

    function addToCart(name, price){
        // on regarde si la plante est déja présente dans le panier
        const currentPlantAdded = cart.find((plant) => plant.name === name);
        // si la plante existe déjà dans le panier, on crée un nouveau tableau sans elle avec filter(), on le met dans updateCart(), on ajoute le nouveau tableau sans elle et on ajoute le nouvel objet dans ce tableau avec l'amount +1
        if (currentPlantAdded){
            const cartFilteredCurrentPlant = cart.filter((plant)=>plant.name !==name);
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantAdded.amount+1}
            ])
            
        } else{
            // sinon on récupère le cart dejà existant et on lui ajouter le nouvel objet
            updateCart([
                ...cart,
                {name, price, amount:1}
            ])
        }
    }
    
    return (
        <div className="lmj-shopping-list">
            {/* categories */}
            <CatList />
            

            {/* plant List */}
            <section >
                {/* <h2>Liste des plantes</h2> */}
                <ul className='lmj-plant-list'>
                
                {plantList.map(({id,name, isBestSale, isSpecialOffer, cover, light, water, price  }) => (
                    <div key={id}>
                        <PlantItem 
                            name={name} 
                            isBestSale={isBestSale}
                            isSpecialOffer= {isSpecialOffer}
                            cover = {cover} 
                            id= {id}
                            light={light}
                            water={water}
                            price = {price}
                        /> 
                        <button onClick={()=>addToCart(name, price)}>Ajouter</button>  
                    </div>
                      
                ))}
                </ul>
            </section>
            

        </div>
        
    )
}

export default ShoppingList



