import './styles/App.scss';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Work from './pages/Work';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

function App() {
	let location = useLocation();
	return (
		<div className="app">
			<Sidebar />
			<div className="app__rightSide">
				<div className="app__rightContainer">
					<TransitionGroup component={null}>
						<CSSTransition
							key={location.key}
							unmountOnExit
							classNames="fade"
							timeout={2000}
						>
							<Switch location={location}>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/contact" component={Contact} />
								<Route exact path="/skills" component={Skills} />
								<Route exact path="/work" component={Work} />
								<Redirect to="/" />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				</div>
			</div>
		</div>
	);
}

export default App;
