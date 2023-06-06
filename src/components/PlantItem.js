import CareScale from "./CareScale";
import '../styles/PlantItem.css';




function PlantItem({name, isBestSale, isSpecialOffer, cover, id, light, water}){

    function handleClick(e, name) {
        console.log(`✨ Bravo pour le choix de ce ${name} ✨`);
        console.log(e);
    }

    return(

        <li key={id} className='lmj-plant-item' onClick={(e) => handleClick(e,name)}>
            <h3>
                {/* nom */}
                {name} 
                {/* best sale */}
                {isBestSale && <span> 🔥</span>}
            </h3>
            {/* special offer */}
            {isSpecialOffer 
            && <div className='lmj-sales'>Soldes</div>}

            {/* thumbnail */}
            <p>
            <img src={cover} alt={name} className="lmj-plant-item-cover"/>
            </p>
            
            <div>
            {/* light */}
            <CareScale careType = "light" scaleValue = {light} />
            {/* Water */}
            <CareScale careType = "water" scaleValue = {water} />
            </div>
                   

        </li>
    );
}

export default PlantItem;