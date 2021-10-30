import TvShow from './TvShow'
const TvShows = ({ tvShows }) =>{
    console.log(tvShows)
    return(
    <div className="container-fluid">
        <div className="section-header">
            <h2>Latest TV-Series</h2>
            <p>View all<i className="fas fa-chevron-circle-right"></i></p>
        </div>
        <div className="container">
            {tvShows.map(tvShow => <TvShow key={tvShow.id} tvShow={tvShow}/>)}
        </div>
        
    </div>
    );
};
export default TvShows;