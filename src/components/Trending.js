const Trending = ({ trend }) =>{
    const baseImgUrl = "https://image.tmdb.org/t/p"
    const size = "w500"
    let releaseDate = trend.release_date !== undefined ? trend.release_date.split("-"):""
    let firstAirDate = trend.first_air_date !== undefined ?  trend.first_air_date.split("-"):""
    
    console.log(trend)
    return(
    <div className="movie-card">
        <img src={`${baseImgUrl}/${size}${trend.poster_path}`} alt="" />
        <h3>{trend.name !== undefined && trend.name.length > 20 ? trend.name.substring(0,22) : trend.name}  {trend.title !== undefined && trend.title.length > 22 ? `${trend.title.substring(0,20)}...` : trend.title}</h3>
        <div className="movie-details">
          <p>{releaseDate[0]}{firstAirDate[0]}</p>
          <p>{trend.media_type === "movie"  ? "Movie" : "Tv" }</p> 
        </div>
        
    </div>
    );
}
export default Trending