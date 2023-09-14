import {configureStore} from '@reduxjs/toolkit';
import movieSearchSlice from './movieSearchSlice';

const store = configureStore({
	reducer:{
		movieSearch: movieSearchSlice.reducer,
	}
});
export default store;