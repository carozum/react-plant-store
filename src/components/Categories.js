import plantList from "../datas/PlantList";

function CatList(){
    // const categories = plantList.map(plant => (plant.category));
    // const singleCategories = [];
    // categories.forEach (cat => {
    //     if (! singleCategories.includes(cat)){
    //         singleCategories.push(cat);
    //     }});

    const singleCategories = plantList.reduce(
        // acc is the accumulated result and is initialized to an empty array
        // reduce() is a method on arrays that take as first parameter a function to update the acc result (here acc) with the current value (here plant) and optional an initial value for the acc result
        (acc, plant) =>
            // on utilise un ternaire
            acc.includes(plant.category) 
            ? acc 
            : acc.concat(plant.category),
        []
    )
    // the concat method is used to merge 2 or more arrays. 

    return (
        <section >
            {/* <h2>Liste des catégories</h2> */}
            <ul>
                {singleCategories.map((cat) =>
                    <li key={cat}>
                        {cat}
                    </li>)}
            </ul>
        </section>
        
    );
}

export default CatList;