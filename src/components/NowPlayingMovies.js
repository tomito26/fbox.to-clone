import NowPlayingMovie from "./NowPlayingMovie";
import { Link, NavLink } from "react-router-dom";
 const NowPlayingMovies = ({ nowPlayingMovies }) =>{
    //  console.log(nowPlayingMovies)
     return(
    
     <div className="container-fluid"> 
         <div className="container">
            {nowPlayingMovies === undefined ? "" : nowPlayingMovies.map(movie => <NowPlayingMovie key={movie.id} movie={movie}/>) }
         </div>
     </div>
     
     );
 }

 export default NowPlayingMovies