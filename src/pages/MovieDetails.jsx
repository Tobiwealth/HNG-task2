import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Movie from '../components/Movie';

const MovieDetails = () => {
	let { id } = useParams();
	const [movie, setMovie] = useState();
	const [credit, setCredit] =useState();

	useEffect(() => {
		const fetchData = async() => {
			const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`,{
				headers: { 
					Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmVmNjYxYmEyY2Q2YWE2NWIwM2FlYjU3N2FhN2E0ZCIsInN1YiI6IjY0ZmY3YzliZTBjYTdmMDEyZWI4NDliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aYkbAj8WP5brqoBmDg6TGS4X8xBEaGhN-03RLyccUws"
				}
			});
			const movie = await res.json();
			setMovie(movie);
		}

		const fetchData2 = async() => {
			const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,{
				headers: { 
					Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmVmNjYxYmEyY2Q2YWE2NWIwM2FlYjU3N2FhN2E0ZCIsInN1YiI6IjY0ZmY3YzliZTBjYTdmMDEyZWI4NDliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aYkbAj8WP5brqoBmDg6TGS4X8xBEaGhN-03RLyccUws"
				}
			});
			const credit = await res.json();
			setCredit(credit);
		}
		fetchData();
		fetchData2();
	}, [id]);

	console.log(movie);

	console.log(id);

	return (
		<div className="flex ">
			<div className="hidden lg:flex"><Sidebar/></div>
			<Movie movie={movie} credit={credit}/>
		</div>
	)
}

export default MovieDetails