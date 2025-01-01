const APILINK = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&api_key=823817cb3e1ee53cbf33cbcf268be89a&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/tv?&include_adult=false&language=en-US&api_key=823817cb3e1ee53cbf33cbcf268be89a&page=1&query=';

const showsList = document.getElementById("shows");
const form = document.getElementById("form");
const search = document.getElementById("query");
const searchbutton = document.getElementById("search-button");

displayShows(APILINK);

function addShowToLibrary(showId, title, imageURL) {
    
}

function displayOneShow(show) {
    showsList.innerHTML += `
        <div class="show">
            <div class="show-container">
                <img src="${IMG_PATH}${show.poster_path}" class="thumbnail">
            </div>
            <h3 class="show-title">${show.name}</h3>
            <a href="#" onclick="addShowToLibrary('${show.id}', '${show.name}', '${IMG_PATH}${show.poster_path}')">Save to library</a>
        </div>`;
}

function displayShows(url) {
    showsList.innerHTML = "";

    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(show => {
            displayOneShow(show);
        });
        
    }); 
}

searchbutton.addEventListener("click", (e) => {
    e.preventDefault(); 

    showsList.innerHTML = '';

    const searchItem = search.value;

    if(searchItem) {
        console.log(SEARCHAPI + searchItem);
        displayShows(SEARCHAPI + searchItem);
        search.value = "";
    }
});
