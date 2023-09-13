import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="font-dmsans">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies/:id" element={<MovieDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
