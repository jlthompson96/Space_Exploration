//NASA APOD
const apod_url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

async function getApodInfo() {
    const response = await fetch(apod_url);
    const data = await response.json();
    const {
        media_type,
        explanation,
        date,
        copyright,
        title,
        hdurl
    } = data;
    document.getElementById("title").innerHTML = title;
    if (media_type == "image") {
        var img = new Image();
        img.src = hdurl;
        img.style.height = "34em";
        img.style.width = "42em";
        document.getElementById("image").appendChild(img);
    } else {
        let url = url
        document.getElementById("video").innerHTML += '<iframe src=' + url + '></iframe>';
    }
    document.getElementById("description").innerHTML = explanation;
    document.getElementById("date").innerHTML = date;
    document.getElementById("copyright").innerHTML = copyright;
}
getApodInfo();
