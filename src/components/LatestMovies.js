import LatestMovie from "./LatestMovie";

const LatestMovies = ({ movies }) =>{
    // console.log(movies)
    return(
    <div className="container-fluid">
        <div className="section-header">
            <h2>Latest Movies</h2>
            <p>View all<i className="fas fa-chevron-circle-right"></i></p>
        </div>
        <div className="container">
            {movies.map(movie => <LatestMovie key={movie.id} movie={movie}/>)}
        </div>
    </div>
    );
}

export default LatestMovies