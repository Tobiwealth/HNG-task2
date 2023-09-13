import React from 'react';
import {Link} from 'react-router-dom';
import Poster1 from '../img/Poster1.png';
import imbd from '../img/imbd.png';
import PngItem from '../img/PngItem.png';

const Card = ({id, title, src, date, rating}) => {
	return (
		<div className="w-[250px] h-[490px] ">
			<Link to={`/movies/${id}`}>
				<img className="w-full h-[370px]" src={`https://image.tmdb.org/t/p/original${src}`} alt="card"/>
				<div className="flex flex-col gap-2 mt-2">
					<p className="text-sm font-bold text-[#9CA3AF]">USA, {date}</p>
					<p className="text-[#111827] font-bold text-base md:text-lg">{title}</p>
					<div className="flex justify-start items-center gap-2 text-black text-[#111827]">
						<img src={imbd} alt="hero icon"/>
						<p className="mr-10 text-xs">{rating} / 10</p>
						<img src={PngItem} alt="hero icon2"/>
						<p className="text-xs">97%</p>
				    </div>
				    <p className="text-sm font-bold text-[#9CA3AF]">Action, Adventure, Horror</p>
			    </div>
			</Link>
		</div>
	)
}

export default Card