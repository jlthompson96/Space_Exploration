import "./apod.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Apod = ({ data }) => {
    return (
        <div className="apod">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Space Exploration</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">NASA APOD</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="issTracker.html">ISS Tracker</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <h1 id="pageTitle">Astronomy Picture of the Day</h1>
        <h2 id="title">{data.title}</h2>
        <div id="data" class="row">
            <div class="col">
                <div class="apod">
                    <img id="apodImage" src={data.hdurl} />
                </div>
            </div>
            <div class="col">
                <p id="description">{data.explanation}</p>
                <div class="info">
                    <div class="date">
                        <h2>Date</h2>
                        <p id="date">{data.date}</p>
                    </div>
                    <div class="copyright">
                        <h2>Copyright</h2>
                        <p id="copyright">{data.copyright}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <p>Data generously provided by the <a href="https://api.nasa.gov/">National Aeronautics &amp; Space Administration</a></p>
    </footer>
    </div>
    );
}

export default Apod;