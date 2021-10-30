const Header = () =>{
    return(
    <header>
        <div className="navbar">
            <div className="logo">fbox.to</div>
            <nav>
                <ul>
                    <li><a href="#genre">Genre</a></li>
                    <li><a href="#country">Country</a></li>
                    <li><a href="#movies">Movie</a></li>
                    <li><a href="#tv-series">TV-series</a></li>
                    <li><a href="#top-imdb">Top-IMDb</a></li>
                </ul>
                <div className="form-group">
                    <div className="search-input">
                        <input type="text" className="form-control" placeholder="Enter your keywords...." />
                    </div>
                    <div className="search-icon">
                        <i className="fas fa-search" ></i>
                    </div>
                </div>
            </nav>
        </div>
        
        <div className="account">
            <a href="#account">
                <div className="profile"> <i className="fas fa-user-circle"></i></div>
                <p>Login/Register</p>
            </a>
        </div>
       

    </header>
    );
};
export default Header