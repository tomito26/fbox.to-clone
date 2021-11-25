import RecommendedTvShow from "./RecommendedTvShow"

const RecommendedTvShows = ({ recommendedTvShows }) =>{
    return(
    <div className="container">
        { recommendedTvShows.map(tvShow=><RecommendedTvShow tvShow={tvShow}/>) }
    </div>
    );
}
export default RecommendedTvShows;