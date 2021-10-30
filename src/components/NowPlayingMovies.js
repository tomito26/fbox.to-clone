import NowPlayingMovie from "./NowPlayingMovie";

 const NowPlayingMovies = ({ nowPlayingMovies }) =>{
    //  console.log(nowPlayingMovies)
     return(
    
     <div className="container-fluid">
         <div className="recommended">
            <h2><span>Recommended</span></h2>
            <div className="menu">
                <p><span><i className="fas fa-play-circle"></i></span>Movies</p>
                <p><span><i className="fas fa-bars"></i></span>TV Shows</p>
                <p><span><i className="fas fa-chart-line"></i></span>Trending</p>
            </div>
         </div>
         <div className="container">
            {nowPlayingMovies === undefined ? "" : nowPlayingMovies.map(movie => <NowPlayingMovie key={movie.id} movie={movie}/>) }
         </div>
     </div>
     
     );
 }

 export default NowPlayingMovies