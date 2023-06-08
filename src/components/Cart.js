import '../styles/Cart.css';
import { useState, useEffect } from 'react';

function Cart({cart, updateCart}) {
	
	const [isOpen, setIsOpen] = useState(false);

	const total = cart.reduce(
		(acc, plant) => acc + plant.amount * plant.price,
		0
	);

	useEffect(() => {
		document.title = `${total}€ à payer 💸`},
		[total])


	return isOpen 
		? (
			<section className="lmj-cart">
				{/* bouton fermer le panier */}
				<button
					className='lmj-cart-toggle-button'
					onClick={() => setIsOpen(false)}
					>
					Fermer
				</button>

				{/* affichage du panier */}
				{cart.length > 0 
					? (<div>
						<h2>Panier</h2>
						{/* // cart est un tableau d'objets ayant les propriétés name, price, amount  */}
						{cart.map(({name, price, amount}, index)=>(
						<div key={index}>
							{name} : {price}€ x {amount}
						</div>
						))}
						<h3>Total : {total}€</h3>
						<button 
							className='lmj-button'
							onClick={()=>updateCart([])}
						>Vider le panier</button>
					</div>)
					: (<div>Votre panier est vide</div>)
				}
			
			</section>)
		: (
			<div className='lmj-cart-closed'>
				<button 
					className='lmj-cart-toggle-button'
					onClick={()=>setIsOpen(true)}
				>Voir le panier</button>
			</div>
		)
	
}

export default Cart;
