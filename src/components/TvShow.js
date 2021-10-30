const TvShow = ({tvShow}) =>{
    const baseImgUrl = "https://image.tmdb.org/t/p"
    const size = "w500"
    let firstAirDate = tvShow.first_air_date.split("-")
    console.log(firstAirDate[0])
    return(
    <div className="movie-card">   
        <img src={`${baseImgUrl}/${size}${tvShow.poster_path}`} alt="" />
        <h3>{tvShow.name.length > 20 ? `${tvShow.name.substring(0,21)}` : tvShow.name}</h3>
        <div className="movie-details">
            <p>{firstAirDate[0]}</p>
            <p>Tv</p>
        </div>
    </div>
    
    );
}

export default TvShow;