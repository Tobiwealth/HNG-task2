import {createSlice} from '@reduxjs/toolkit';



const movieSearchSlice = createSlice({
	name: "movieSearch",
	initialState: {
		movies:[]
	},
	reducers: {
		addMovieSearch(state,action){
			state.movies = action.payload;
		}
	}
})

export const movieSearchActions = movieSearchSlice.actions;
export default movieSearchSlice;