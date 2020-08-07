import React from 'react';
import './bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Discover from './components/pages/Discover';
import DiscoverBattle from './components/pages/DiscoverBattle';
import PopularBattle from './components/pages/PopularBattle';
import MyList from './components/pages/MyList';
import Popular from './components/pages/Popular';
import Navbar from './components/layout/Navbar';
import Jumbotron from './components/layout/Jumbotron';

const App = () => {
	return (
		<Router>
			<div>
				<div className='header'>
					<Navbar />
					<Jumbotron />
				</div>
				<Switch>
					<div className='container'>
						<Route path='/' exact component={Discover} />
						<Route path='/home' exact component={Discover} />
						<Route path='/battle' component={DiscoverBattle} />
						<Route path='/popular' component={Popular} />
						<Route path='/popular-battle' component={PopularBattle} />
						<Route path='/my-list' component={MyList} />
					</div>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
