import { useState,useEffect } from 'react'
import Header from './components/Header'
import NowPlayingMovies from './components/NowPlayingMovies'

function App() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const playingMovies = await fetchNowPlayingMovies();
      setNowPlayingMovies(playingMovies)

    }
    getNowPlayingMovies()
  
    
    
  }, [])
  const fetchNowPlayingMovies = async () =>{
    const response = await fetch(`
    https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_movies_api_key}&language=en-US`);
    const data = await response.json();
    return data.results
  }
  
  return (
    <div className="App">
      <Header/>
      <NowPlayingMovies nowPlayingMovies={nowPlayingMovies}/>
    </div>
  );
}

export default App;
