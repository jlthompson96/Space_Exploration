
//NASA APOD
window.onload = function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("title").innerHTML = myObj.title;
                var img = new Image();
                    img.src = myObj.hdurl;
                    img.style.height = "34em";
                    img.style.width = "42em";
            document.getElementById("image").appendChild(img);
            document.getElementById("description").innerHTML = myObj.explanation;
            document.getElementById("date").innerHTML = myObj.date;
            document.getElementById("copyright").innerHTML = myObj.copyright;    
        }
    };
    xmlhttp.open("GET","https://api.nasa.gov/planetary/apod?api_key=pn3mLYsxd3wPNvChD1zeLHzC5hUq7sA1xICB4eCp",true);
    xmlhttp.send();


//Rover Photos
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var rover = JSON.parse(this.responseText);
//         document.getElementById("roverTitle").innerHTML = rover.full_name;
//             var imgs = new Image();
//                 imgs.src = rover.img_src;
//                 imgs.style.height = "34em";
//                 imgs.style.width = "42em";
//         document.getElementById("roverImage").appendChild(imgs);
//         document.getElementById("imageDescription").innerHTML = rover.explanation;
//         document.getElementById("imageDate").innerHTML = rover.date;  
//     }
// };
// xmlhttp.open("GET","https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=pn3mLYsxd3wPNvChD1zeLHzC5hUq7sA1xICB4eCp",true);
// xmlhttp.send();


};