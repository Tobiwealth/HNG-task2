import React from 'react';
import Herosection from '../components/Herosection';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div>
			<Herosection/>
			<CardList/>
			<Footer/>
		</div>
	)
}

export default Home