
const NowPlayingMovie = ({ movie }) =>{
    console.log(movie)
    const baseImgUrl = "https://image.tmdb.org/t/p"
    const size = "w500"
    let releaseDate = movie.release_date.split("-")
    console.log(releaseDate[0])

    return(
    <div className="movie-card">
        <img src={`${baseImgUrl}/${size}${movie.poster_path}`} alt="" />
        <h3>{movie.title.length > 20 ? `${movie.title.substring(0,21)}...` : movie.title}</h3>
        <div className="movie-details">
            <p>{releaseDate[0]}</p>
            <p>movie</p>
        </div>
    </div>
    )
}

export default NowPlayingMovie