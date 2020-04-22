//api key: 11a21ef6
//http://www.omdbapi.com/?i=tt3896198&apikey=11a21ef6

class OMDB{
    constructor(){
        this.key = '11a21ef6';
    }
    async getMovies(){
        const movieResponse = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&s=game`);
        const movieResults = await movieResponse.json();
        return movieResults.Search;
    }
}