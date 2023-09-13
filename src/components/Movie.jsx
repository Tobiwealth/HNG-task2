import React from 'react';
import Group52 from '../img/Group52.png';
import Star from '../img/Star.png';
import TwoTickets from '../img/TwoTickets.png';
import List from '../img/List.png';
import Arrow from '../img/Arrow.svg';

const Movie = ({movie,credit}) => {

	if(!movie || !credit){
		return <div>Loading ...</div>
	} 

	const director = credit.crew.filter((item) => item.job === "Director");
	const writers =  credit.crew.filter((item) => item.job === 'Story');
	const actors = credit.cast.filter((item) => item.order < 4);

	return (
		<div className="w-full h-full p-2 mt-6 lg:mt-0 flex flex-col justify-center pb-16">
			<div className="w-full h-full">
				<img className="w-full h-[449px] rounded-[20px]" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="movie"/>
			</div>
			<div className="flex flex-col lg:flex-row justify-between items-center gap-12 font-poppins font-medium text-lg lg:text-[23px] text-[#404040] p-4 pl-8 pr-12 mt-4 mb-4">
				<div className="flex justify-center items-center lg:gap-4 ">
					<p>{movie.title} • {movie.release_date} • PG-13 </p>
					<button className="text-xs md:text-[15px] text-[#B91C1C] bg-white border-2 border-[#F8E7EB] rounded-[15px] w-[84px] h-[30px] ">{movie.genres[0].name}</button>
					<button className="text-xs md:text-[15px] text-[#B91C1C] bg-white border-2 border-[#F8E7EB] rounded-[15px] w-[84px] h-[30px]">{movie.genres[1].name}</button>
				</div>
				<div className="flex justify-center items-center relative"> 
					<img src={Star} alt="yes"/>
					<p className="text-[#666666] text-[20px] font-poppins font-medium"><span className="text-[25px] text-[#E8E8E8]">{movie.vote_average}</span> | {movie.vote_count}</p>
				</div>

			</div>
			<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center p-4 lg:pl-8 lg:pr-8" >
				<div className="text-[20px] font-poppins text-[#333333] flex flex-col gap-4 lg:gap-8">
					<p className="text-base lg:text-[20px] font-poppins text-[#333333] lg:w-3/4 p-4 pl-0">{movie.overview}</p>
			        <p>Director : <span className="text-[#BE123C]">{director[0].name}</span></p>
			        <p>Writers :  <span className="text-[#BE123C]">{writers.map(item => <span key={item.id}>{item.name}, </span>)}</span></p>
			        <p>Stars: <span className="text-[#BE123C]">{
			        	actors.map((item) => <span key={item.id}>{item.name}, </span>)
			        }
			        </span></p>
			        <div className="flex w-full border-[1px] border-l-0 border-[#C7C7C7] text-xs lg:text-base rounded-[10px] w-full lg:w-[785px]">
				        <p className="text-white bg-[#BE123C] w-fit lg:w-[253px] h-[55px] pl-2 pr-2 rounded-[10px] flex justify-center items-center">Top rated movie #{movie.runtime}</p>
				        <p className="flex justify-between items-center lg:w-[calc(785px-253px)] pl-2 md:pl-6 pr-1 ">Awards 9 nominations
				            <img className="w-4 h-4" src={Arrow} alt="icon 2"/>
				        </p>
			        </div>
				</div>
				<div className="flex flex-col h-full gap-4 pr-6 mt-6 lg:mt-0">
					<button className="md:w-[360px] h-[55px] bg-[#BE123C] text-white flex justify-center items-center gap-4 rounded-[10px]">
						<img src={TwoTickets} alt="buuton"/>
						See Showtimes
					</button>
					<button className="md:w-[360px] h-[55px] bg-[#BE123C1A] border-[1px] border-[#BE123C] text-[#333333] flex justify-center items-center gap-4 rounded-[10px]">
						<img src={List} alt="buuton"/>
						More watch options
					</button>
					<img className="mt-6" src={Group52} alt="poster"/>
				</div>
			</div>
		</div>
	)
}

export default Movie;