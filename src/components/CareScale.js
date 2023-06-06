import lightSymbol from '../assets/sun.svg';
import waterSymbol from '../assets/water.svg';

function CareScale({careType, scaleValue}){

    const range = [1, 2, 3];

    const symbols = {
        light : `${lightSymbol}`,
        water: `${waterSymbol}`
    }
    const messages = ["peu", "modéremment", "beaucoup"];
        
   
    return(
        <div onClick={() => (
            careType ==='light' ?
            alert(`Cette plante requiert ${messages[scaleValue-1]} de lumière `):alert(`Cette plante requiert ${messages[scaleValue-1]} d'arrosage `) )}
            >
            {range.map((rangeElem) =>
                scaleValue >= rangeElem 
                ? <span key={rangeElem.toString()}><img src={symbols[careType]} alt={careType}/></span> : null
            )}
        </div>
        
    )

}
export default CareScale;