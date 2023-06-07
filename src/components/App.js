import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList';
import logo from '../assets/leaf.png' ;
// import QuestionForm from './QuestionForm';
// import QuestionForm2 from './QuestionForm2';
import Footer from './Footer';
import '../styles/Layout.css';
import { useState } from 'react';

function App() {
	const title = 'La maison jungle';
	const [cart, updateCart] = useState([]);
	return (
		<div>
			<Banner>
				<img src={logo} alt={title} className="lmj-logo"/>
				<h1 className='lmj-title'>{title}</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart 
					cart={cart} 
					updateCart={updateCart} 
				/>
				<ShoppingList
					cart={cart}
					updateCart = {updateCart}
				/>
				{/* <QuestionForm />
				<QuestionForm2 /> */}
			</div>
			<Footer />
		</div>
	)
}

export default App




