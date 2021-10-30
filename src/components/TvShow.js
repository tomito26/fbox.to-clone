const TvShow = ({tvShow}) =>{
    const baseImgUrl = "https://image.tmdb.org/t/p"
    const size = "w500"
   
    console.log(tvShow)
    return(
    <div className="movie-card">   
        <img src={`${baseImgUrl}/${size}${tvShow.poster_path}`} alt="" />
        <h3>{tvShow.name.length > 20 ? `${tvShow.name.substring(0,21)}` : tvShow.name}</h3>
        <div className="movie-detail">

        </div>
    </div>
    
    );
}

export default TvShow;