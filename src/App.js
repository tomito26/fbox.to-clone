import Header from './components/Header'
import NowPlayingMovies from './components/NowPlayingMovies'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import { useState,useEffect } from 'react'
import RecommendedTvShows from './components/RecommendedTvShows';
import Trendings from './components/Trendings';

function App() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const[recommendedTvShows, setRecommendedTvShow] = useState([]);
  const[trends,setTrends] = useState([]);


  useEffect(()=>{
    const getNowPlayingMovies = async () => {
      const playingMovies = await fetchNowPlayingMovies();
      setNowPlayingMovies(playingMovies)

    }
    const getRecommendedTvShows = async () =>{
      const tvShows = await fetchRecommendedTvShows()
      setRecommendedTvShow(tvShows)
    }
    const getTrends = async () =>{
      const trendings = await fetchTrendings()
      setTrends(trendings)
    } 
    getNowPlayingMovies();
    getRecommendedTvShows();
    getTrends()
    
  },[]);
  const fetchNowPlayingMovies = async () =>{
    const response = await fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_movies_api_key}&language=en-US`);
    const data = await response.json();
    return data.results;
  }
  const fetchRecommendedTvShows = async () =>{
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_movies_api_key}&language=en-US`);
    const data = await res.json();
    return data.results;
  }

  const fetchTrendings = async () =>{
    const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_movies_api_key}`);
    const data = await res.json();
    return data.results;
  }

  console.log(trends)
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} >
            <Route path='/' element={<NowPlayingMovies nowPlayingMovies={nowPlayingMovies}/>}/>
            <Route path="tvshows" element={<RecommendedTvShows recommendedTvShows={recommendedTvShows}/>}/>
            <Route path="trending" element={<Trendings trends={trends}/>} />
          </Route>
         
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
