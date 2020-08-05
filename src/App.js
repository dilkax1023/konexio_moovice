import React from 'react';
import './bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Jumbotron from './components/layout/Jumbotron';
import Discover from './components/pages/Discover';
import DiscoverBattle from './components/pages/DiscoverBattle';
import PopularBattle from './components/pages/PopularBattle';
import MyList from './components/pages/MyList';
import Popular from './components/pages/Popular';

const App = () => {
	return (
		<Router>
			<div className='header'>
				<Navbar />
				<Jumbotron />
			</div>

			<div className='container'>
				<Switch>
					<Route path='/battle'>
						<DiscoverBattle />
					</Route>
					<Route path='/popular/'>
						<Popular />
					</Route>
					<Route path='/popular-battle/'>
						<PopularBattle />
					</Route>
					<Route path='/my-list/'>
						<MyList />
					</Route>
					<Route path='/'>
						<Discover />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
