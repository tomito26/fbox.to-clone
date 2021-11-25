import Trending from "./Trending";

const Trendings = ({  trends}) =>{
    return(
    <div className="container">
        { trends.map(trend => <Trending key={trend.id} trend={trend}/>) }
    </div>
    );
}

export default Trendings;