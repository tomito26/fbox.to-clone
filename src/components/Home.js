import LatestMovies from "./LatestMovies";
import TvShows from "./TvShows";
import { useState,useEffect } from "react";
import { Outlet,Link,NavLink } from "react-router-dom";

const Home = () =>{
    const[latestMovies,setLatestMovies] = useState([]);
    const[tvShows,setTvShows] = useState([]);
  
    useEffect(() => {
        const getLatestMovies = async () =>{
            const latestmovies = await fetchLatestMovies()
            setLatestMovies(latestmovies)
      }
      const getTVshows = async () =>{
        const latestTvshows = await fetchTvShows()
        setTvShows(latestTvshows)
      }
      getLatestMovies()
      getTVshows()
        
    }, [])
  
    const fetchLatestMovies = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_movies_api_key}&language=en-US`)
        const data = await res.json()
        return data.results
    }
    
    const fetchTvShows = async () =>{
        const res = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_movies_api_key}&language=en-US`)
        const data = await res.json()
        return data.results
    }
    return(
    <div>
        <div className="menu">
            <div className="recommended">
                <h2><span>Recommended</span></h2>
            </div>
            <ul className="menu-list">
                <li><NavLink style={({isActive}) =>{ return {backgroundColor: isActive ? "#ffaa00" : "#343a40",color: isActive ? "#000" : "#ccc"}}} className="menu-link" to="/"><span><i className="fas fa-play-circle"></i></span>Movies</NavLink></li>
                <li><NavLink style={({isActive}) =>{ return {backgroundColor: isActive ? "#ffaa00" : "#343a40",color: isActive ? "#000" : "#ccc"}}} className="menu-link" to="/tvshows"><span><i className="fas fa-bars"></i></span>TV Shows</NavLink></li>
                <li><NavLink style={({isActive}) =>{ return {backgroundColor: isActive ? "#ffaa00" : "#343a40",color: isActive ? "#000" : "#ccc"}}} className="menu-link" to="/trending"><span><i className="fas fa-chart-line"></i></span>Trending</NavLink></li>
            </ul>
        </div>
        <Outlet/>
        <LatestMovies movies={latestMovies}/>
        <TvShows tvShows={tvShows} />
    </div>
    );
}

export default Home;