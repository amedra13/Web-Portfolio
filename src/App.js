import './styles/App.scss';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Work from './pages/Work';
import BgAnimation from './components/BgAnimation';
import Project from './pages/Project';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BurgerMenu from './components/BurgerMenu';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

function App() {
	let location = useLocation();
	const matches = useMediaQuery('(max-width:900px)');

	return (
		<div className={`app ${matches && 'shrink'}`}>
			<BgAnimation />
			<Sidebar shrink={matches} />
			{matches && <BurgerMenu />}
			<div className="app__rightSide">
				<TransitionGroup component={null}>
					<CSSTransition
						key={location.key}
						unmountOnExit
						classNames="fade"
						timeout={1500}
					>
						<Switch location={location}>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
							<Route exact path="/contact" component={Contact} />
							<Route exact path="/skills" component={Skills} />
							<Route exact path="/work" component={Work} />
							<Route exact path="/work/:project" component={Project} />
							<Redirect to="/" />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</div>
		</div>
	);
}

export default App;
