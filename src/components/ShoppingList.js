import '../styles/ShoppingList.css';
import plantList from '../datas/PlantList';
import PlantItem from './PlantItem';
import Categories from './Categories';
import { useState } from 'react';


function ShoppingList({cart, updateCart}) {

    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) 
            ? acc 
            : acc.concat(plant.category),
        []
    )

    function addToCart(name, price){
        const currentPlantAdded = cart.find((plant) => plant.name === name);
        if (currentPlantAdded){
            const cartFilteredCurrentPlant = cart.filter((plant)=>plant.name !==name);
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantAdded.amount+1}
            ])
            
        } else{
            updateCart([
                ...cart,
                {name, price, amount:1}
            ])
        }
    }

    const [activeCategory, setActiveCategory] = useState('all');
    
    return (
        <div className="lmj-shopping-list">
            {/* categories */}
            <Categories
                activeCategory = {activeCategory}
                setActiveCategory = {setActiveCategory}
                categories = {categories} />
            
            {/* plant List */}
            <section >
                {/* <h2>Liste des plantes</h2> */}
                <ul className='lmj-plant-list'>
                
                {
                categories.includes(activeCategory) ?
                plantList.filter(plant => plant.category === activeCategory).map(({id,name , isBestSale, isSpecialOffer, cover, light, water, price, category}) => (
                    <div key={id}>
                        <PlantItem 
                            name={name} 
                            isBestSale={isBestSale}
                            isSpecialOffer= {isSpecialOffer}
                            cover = {cover} 
                            id= {id}
                            light={light}
                            water={water}
                            price= {price}
                            category= {category} />
                            <button onClick={()=>addToCart(name, price)}>Ajouter</button>  
                    </div>
                      
                ))
                : plantList.map(({id,name , isBestSale, isSpecialOffer, cover, light, water, price, category}) => (
                    <div key={id}>
                        <PlantItem 
                            name={name} 
                            isBestSale={isBestSale}
                            isSpecialOffer= {isSpecialOffer}
                            cover = {cover} 
                            id= {id}
                            light={light}
                            water={water}
                            price= {price}
                            category= {category} />
                            <button onClick={()=>addToCart(name, price)}>Ajouter</button>  
                    </div>
                      
                ))
            }
                </ul>
            </section>
            

        </div>
        
    )
}

export default ShoppingList



