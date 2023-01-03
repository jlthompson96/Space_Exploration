import "./apod.css";

const Apod = ({ data }) => {
    return (
        <div className="apod">
                <h1 id="pageTitle">Astronomy Picture of the Day</h1>
                <h2 id="title">{data.title}</h2>
                <img id="image" src={data.hdurl} alt={data.title} />
                <p id="description">{data.explanation}</p>
                <p id="copyRight">Image Credit: {data.copyright}</p>
        </div>
    );
}

export default Apod;