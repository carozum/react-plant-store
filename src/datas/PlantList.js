import cover from "../assets/monstera.jpg";

const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        isBestSale: true,
        light:2,
        water:3,
		cover: cover
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        isBestSale: false,
        light:3,
        water:1,
		cover: cover
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        isBestSale: false,
        isSpecialOffer: true,
        light:1,
        water:2,
		cover: cover
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
        isBestSale: true,
        light:3,
        water:1,
		cover: cover
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        isBestSale: false,
        light:3,
        water:1,
		cover: cover
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
        isBestSale: true,
        light: 2,
        water: 2,
		cover: cover
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        isBestSale: false,
        isSpecialOffer: true,
        light:2,
        water:2,
		cover: cover
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
        isBestSale: false,
        isSpecialOffer: true,
        light:2,
        water:1,
		cover: cover
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        isBestSale: false,
        light:2,
        water:1,
		cover: cover
	}
]

export default plantList;