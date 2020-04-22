//api key: 11a21ef6
//http://www.omdbapi.com/?i=tt3896198&apikey=11a21ef6

class OMDB{
    constructor(){
        this.key = '11a21ef6';
    }


    async getMovies(){
        const movieResponse = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&s=game`);
        const seriesResponse = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&s=series`);
        const movieResults = await movieResponse.json();
        const seriesResults = await seriesResponse.json();

        return {
            movie: movieResults.Search,
            series: seriesResults.Search
        }
    }


    async movieInfo(id){
        const response = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&i=${id}`);
        const results = await response.json();
        return results;
    }
    

    async search(userText){
        const response = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&s=${userText}`);
        const results = await response.json();
        return results.Search;
    }
}