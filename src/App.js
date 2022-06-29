import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Movies from './movies/pages/Movies/Movies';
import MovieDetails from './movies/pages/MovieDetails/MovieDetails';

function App() {

  let routes = (
    <Routes>
    ||||<Route index element={<Movies />} />
        <Route path="/api/movies" element={<Movies />} />
        <Route path="/api/movies/:mid" element={<MovieDetails />} />
    </Routes>
  );

  return (
    <Router>
      <MainNavigation />
        <main>
          {routes}
        </main>
    </Router>
  );
}

export default App;
