import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Offering from './components/Offering';
import Description from './components/Description';
import Services from './components/Services';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import './App.css';
function App() {
	return (
		<div className='App'>
			{/* Navigation */}
			<Navigation />
			{/* Hero */}
			<Hero />

			<Offering />

			<Description />

			<Services />

			<Analytics />

			<Footer />
		</div>
	);
}

export default App;
