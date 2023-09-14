import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {movieSearchActions} from '../store/movieSearchSlice';
import tv from '../img/tv.svg';
import Icon from '../img/Icon.svg';
import Menu from '../img/Menu.png';
import imbd from '../img/imbd.png';
import PngItem from '../img/PngItem.png';

const Herosection = () => {
	const [search, setSearch] = useState("");
	const dispatch = useDispatch();

	const handleKeypress = async(e) => {
		if(search === " "){
			return
		}
		if(e.key === 'Enter'){
			try{
				const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,{
					headers: { 
						Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmVmNjYxYmEyY2Q2YWE2NWIwM2FlYjU3N2FhN2E0ZCIsInN1YiI6IjY0ZmY3YzliZTBjYTdmMDEyZWI4NDliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aYkbAj8WP5brqoBmDg6TGS4X8xBEaGhN-03RLyccUws"
					}
				});
				const movies = await res.json();
				dispatch(movieSearchActions.addMovieSearch(movies.results));
				setSearch(" ");
			}catch(err){
				console.log(err);
			}
	    }
	}



	return (
		<div className=" lg:w-screen h-screen bg-cover flex flex-col gap-24 p-6 pl-12 pr-12 lg:pl-24 lg:pr-24" style={{backgroundImage: "url('/images/Poster.png')"}}>
			<div className="flex flex-col gap-4 md:gap-0 lg:flex-row justify-between items-center">
				<div className="flex justify-center items-center gap-4">
				    <img src={tv} alt="icon"/>
				    <h1 className="text-2xl font-black text-white">MobieBox</h1>
				</div>
				<input
				    value={search}
				    onChange={(e) => setSearch(e.target.value)}
				    onKeyPress={(e) => handleKeypress(e)}
				    className="bg-transparent bg-[url(./img/Icon.png)] bg-right bg-origin-content pl-4 pr-4 bg-no-repeat border-2 border-[#D1D5DB] w-full lg:w-[525px] h-[36px] rounded-md placeholder:p-0 text-white" 
				    type="text" 
				    placeholder="What do you want to watch?"
				/>
				<div className="flex justify-center items-center gap-4">
					<p className="text-white font-bold text-base">Sign in</p>
					<div className="bg-[#BE123C] rounded-[50%] w-8 h-8 p-1"><img src={Menu} alt="icon"/></div>
				</div>
			</div>
			<div className="flex flex-col gap-6 pt-12 pb-12">
				<h2 className="text-3xl md:text-5xl font-bold text-white ">John Wick 3 : <br/> Parabellum</h2>
				<div className="flex justify-start items-center gap-2 text-white">
					<img src={imbd} alt="hero icon"/>
					<p className="mr-10 text-xs">86.0 / 100</p>
					<img src={PngItem} alt="hero icon2"/>
					<p className="text-xs">97%</p>
				</div>
				<p className="font-medium text-sm md:text-base text-white w-[302px]">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
			    <button className="bg-[#BE123C] text-sm font-bold text-white w-[169px] h-[36px] flex justify-center items-center gap-2">
			        <img src={Icon} alt="play"/>
			        Watch trailer
			    </button>
			</div>
		</div>
	)
}

export default Herosection