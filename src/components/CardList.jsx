import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Card from './Card';

const CardList = () => {
	const movies = useSelector((state) => state.movieSearch.movies);
	const [movieList, setMovieList] = useState([]);
	const [more, setMore] = useState(false);

	const handleSeeMore = () => {
		setMore(prev => !prev);
	}

	

	useEffect(() => {
		const fetchData = async() => {
			try{
				const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US',{
					headers: { 
						Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmVmNjYxYmEyY2Q2YWE2NWIwM2FlYjU3N2FhN2E0ZCIsInN1YiI6IjY0ZmY3YzliZTBjYTdmMDEyZWI4NDliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aYkbAj8WP5brqoBmDg6TGS4X8xBEaGhN-03RLyccUws"
					}
				});
				const movies = await res.json();
				setMovieList(movies.results);
			}catch(err){
				console.error(err);
			}
		}
		fetchData();
	}, []);


	return (
		<div className="p-8 mt-4 lg:mt-0 lg:p-24">
		    <div className="flex justify-between items-center w-full">
		        <h2 className="font-bold text-xl md:text-2xl lg:text-4xl">Featured Movie</h2>
		        <p onClick={handleSeeMore} className="cursor-pointer flex justify-center items-center gap-3 text-sm lg:text-base text-[#BE123C]">{more ? "See less" : "See more" }<i className="fa-solid fa-chevron-right"></i></p>
		    </div>
		    <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-4 p-6 gap-x-6 gap-y-16 md:place-items-center">
				{  
					movies.length  > 0 ?
					movies.map((item) => 
						<Card key={item.id} id = {item.id} title= {item.title} src={item.poster_path} rating= {item.vote_average} date={item.release_date} />
					):
					more ?
					movieList.map((item) => 
						<Card key={item.id} id = {item.id} title= {item.title} src={item.poster_path} rating= {item.vote_average} date={item.release_date} />
					) :
					movieList.map((item, i) => {if(i < 10){
						return <Card key={item.id} id = {item.id} title= {item.title} src={item.poster_path} rating= {item.vote_average} date={item.release_date} />
					}}
					)
				}
			</div>
		</div>
	)
}

export default CardList