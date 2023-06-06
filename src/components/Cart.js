import '../styles/Cart.css';

function Cart() {
	const monsteraPrice = 8;
	const ivyPrice = 10;
	const flowerPrice = 15;
	return (
		<section className="lmj-cart">
			<div className="cart-container">
				<h2>Panier</h2>
				<ul>
					<li>Monstera : {monsteraPrice}€</li>
					<li>Lierre : {ivyPrice}€</li>
					<li>Fleurs : {flowerPrice}€</li>
				</ul>
				Total : {monsteraPrice + ivyPrice + flowerPrice}€
			</div>
		</section>
	);
}

export default Cart;
