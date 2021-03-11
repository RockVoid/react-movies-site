import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'

import MainSection from './components/MainSection'
import Header from './components/Header';
import ShowMovie from './components/showMovie';
import Error from './components/Error';
import Footer from './components/Footer';

const moviesAPI = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bae66de24c5fad77d1473f1d34981ebf&page=1`;
const searchMovie = `https://api.themoviedb.org/3/search/movie?api_key=bae66de24c5fad77d1473f1d34981ebf&query=`;

const App = () => {
  const [movieList, setMovie] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getMovies(moviesAPI);
  }, []);

  const getMovies = async featuredAPI => {
    const req = await axios(featuredAPI);
    setMovie(req.data.results);
  }

  const handleSubmit = search => {
    search.preventDefault();
    getMovies(searchMovie + query);
  }

  const handleChange = event => setQuery(event);

  return (
    <>
      <Header getQuery={handleSubmit} putQuery={handleChange}></Header>
      <MainSection>
        {movieList.length ? movieList.map(movie => <ShowMovie key={movie.id} {...movie}/>) : <Error/>}
      </MainSection>
      <Footer></Footer>
    </>
  );
}

export default App;