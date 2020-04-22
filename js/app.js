//Init API
const omdb = new OMDB();

//Init UI
const ui = new UI();

//Get Movies
document.addEventListener('DOMContentLoaded', getMovies);

//Search Movies
document.getElementById('searchForm').addEventListener('submit', searchMovie);

//Get Movies Function
function getMovies() {
    // Make a Request to API
    omdb.getMovies().then(results=>{
       ui.showMovies(results.movie);
       ui.showSeries(results.series);
        
    }).catch(err => {
        console.log(err);
    })
}



//Search Movie Function
function searchMovie(e){
    const inputText = document.querySelector('.search');
    //Get Input Text
    const userText = inputText.value;

    //Make a Call to API
    omdb.search(userText).then(results=>{
        ui.showSearch(results);

    }).catch(err=>{
        console.log(err);
    });

    e.preventDefault();

}

//Movie clicked
function movieClicked(id){
    
   sessionStorage.setItem('movieID', id);
   location.assign('./movie.html');
   return false;
}



//Movie Info
function movie_info(){
    let id = sessionStorage.getItem('movieID');

    //Make a call to omdb API
    omdb.movieInfo(id).then(results => {
        ui.showInfo(results);
    }).catch(err => {
        console.log(err);
    });
}