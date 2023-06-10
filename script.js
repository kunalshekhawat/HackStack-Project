const API_KEY ="api_key=7d9b56217734a636a1a0ff5c386bd840";
const BASE_URL="https://api.themoviedb.org/3";
const API_URL=BASE_URL+"/discover/movie?sort_by=popularity.desc&"+API_KEY;
const IMG_URL="https://image.tmdb.org/t/p/w500"
const search_URL=BASE_URL+"/search/movie?"+API_KEY

const main= document.getElementById("main");
const form= document.getElementById("form");
const search= document.getElementById("search");
getMovies(API_URL);

function getMovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data);
        showMovies(data.results);
    })
}
function showMovies(data){
    main.innerHTML='';

    data.forEach(movie => {
        const {title, poster_path, overview, vote_average, release_date}=movie;
        const movieEL=document.createElement("div");
        movieEL.classList.add("movie");
        movieEL.innerHTML=`
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <h3>${title}</h3>
        <div class="movie-info">
            <span class="vote">Ratings: ${vote_average}</span>
            <span class="year">Realeased: ${release_date}</span>
        </div>
        <div class="overview">
            <h2 class="over">Overview</h2>
            ${overview} 
        </div>        
        `
        main.appendChild(movieEL);

        
    });
}
