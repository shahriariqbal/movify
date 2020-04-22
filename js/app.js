//Init API
const omdb = new OMDB();
//Init UI
const ui = new UI();
//Get Movies
document.addEventListener('DOMContentLoaded', getMovies);
//Get Movies Function
function getMovies() {
    // Make a Request to API
    omdb.getMovies().then(results=>{
        ui.showMovies(results);
    }).catch(err => {
        console.log(err);
    });
}