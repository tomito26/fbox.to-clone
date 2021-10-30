import { useState,useEffect } from 'react'
import Header from './components/Header'
import LatestMovies from './components/LatestMovies'
import NowPlayingMovies from './components/NowPlayingMovies'
import TvShows from './components/TvShows';

function App() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const[latestMovies,setLatestMovies] = useState([]);
  const[tvShows,setTvShows] = useState([]);

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const playingMovies = await fetchNowPlayingMovies();
      setNowPlayingMovies(playingMovies)

    }
    const getLatestMovies = async () =>{
      const latestmovies = await fetchLatestMovies()
      setLatestMovies(latestmovies)
    }
    const getTVshows = async () =>{
      const latestTvshows = await fetchTvShows()
      setTvShows(latestTvshows)
    }
    getNowPlayingMovies()
    getLatestMovies()
    getTVshows()
    
    
  }, [])

  const fetchNowPlayingMovies = async () =>{
    const response = await fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_movies_api_key}&language=en-US`);
    const data = await response.json();
    return data.results
  }
  const fetchLatestMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_movies_api_key}&language=en-US`)
    const data = await res.json()
    return data.results
  }

  const fetchTvShows = async () =>{
    const res = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_movies_api_key}&language=en-US&page=1`)
    const data = await res.json()
    return data.results
  }
  
  return (
    <div className="App">
      <Header/>
      <NowPlayingMovies nowPlayingMovies={nowPlayingMovies}/>
      <LatestMovies movies={latestMovies}/>
      <TvShows tvShows={tvShows}/>
    </div>
  );
}

export default App;
