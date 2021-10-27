import NowPlayingMovie from "./NowPlayingMovie";

 const NowPlayingMovies = ({ nowPlayingMovies }) =>{
     console.log(nowPlayingMovies)
     return(
     <div className="container">
         {nowPlayingMovies === undefined ? "" : nowPlayingMovies.map(movie => <NowPlayingMovie key={movie.key} movie={movie}/>) }
     </div>
     );
 }

 export default NowPlayingMovies