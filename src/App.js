import { useState,useEffect } from 'react'
import Header from './components/Header'
import LatestMovies from './components/LatestMovies'
import NowPlayingMovies from './components/NowPlayingMovies'

function App() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const[latestMovies,setLatestMovies] = useState([])
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const playingMovies = await fetchNowPlayingMovies();
      setNowPlayingMovies(playingMovies)

    }
    const getLatestMovies = async () =>{
      const latestmovies = await fetchLatestMovies()
      setLatestMovies(latestmovies)
    }
    getNowPlayingMovies()
    getLatestMovies()
  
    
    
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
  
  return (
    <div className="App">
      <Header/>
      <NowPlayingMovies nowPlayingMovies={nowPlayingMovies}/>
      <LatestMovies movies={latestMovies}/>
    </div>
  );
}

export default App;
