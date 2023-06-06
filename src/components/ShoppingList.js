import '../styles/ShoppingList.css';
import plantList from '../datas/PlantList';
import PlantItem from './PlantItem';
import CatList from './CatList';


function ShoppingList() {
    

    return (
        <div>
            {/* categories */}
            <CatList />


            {/* plant List */}
            <section className="container">
                <h2>Liste des plantes</h2>
                <ul className='lmj-plant-list'>
                
                {plantList.map((plant) => (
                    <PlantItem 
                        key={plant.id}
                        name={plant.name} 
                        isBestSale={plant.isBestSale}
                        isSpecialOffer= {plant.isSpecialOffer}
                        cover = {plant.cover} 
                        id= {plant.id}
                        light={plant.light}
                        water={plant.water}
                    />     
                ))}
                </ul>
            </section>
            

        </div>
        
    )
}

export default ShoppingList