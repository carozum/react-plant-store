import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList';
import logo from '../assets/leaf.png' ;
import QuestionForm from './QuestionForm';
import QuestionForm2 from './QuestionForm2';
import Footer from './Footer';

function App() {
	const title = 'La maison jungle';
	return (
		<div>
			<Banner>
				<img src={logo} alt={title} className="lmj-logo"/>
				<h1>{title}</h1>
			</Banner>

			<Cart />
			<ShoppingList />
			<QuestionForm />
			<QuestionForm2 />
			<Footer />
		</div>
	)
}

export default App
