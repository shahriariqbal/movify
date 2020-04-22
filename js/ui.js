class UI {
    constructor(){
        this.carousel = document.querySelector('.carousel');
    }
    showMovies(data){
        let output = '';
        data.forEach(results => {
            output += `
                <div class ="carousel-item">

                    <div class="card medium black">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${results.Poster}">
                    </div>
                    <div class="card-content black">
                        <span class="card-title activator white-text text-darken-4">${results.Title}<i class="material-icons right">more_vert</i></span>
                        
                    </div>
                    <div class="card-reveal black">
                        <span class="card-title white-text text-darken-4">${results.Title}<i class="material-icons right">close</i></span>
                        <p class"green-text"> Type: <span class="red-text">${results.Type}</span></p>
                        <p class"green-text"> Year: <span class="red-text">${results.Year}</span></p>
                        <a class="waves-effect waves-light green btn-small" onclick="movieClicked('${results.imdbID}')" href="#">More Info.. </a>
                    </div>
                    </div>

                </div>
            `;
        });
        this.carousel.innerHTML = output;
        const elems = this.carousel;
        M.Carousel.init(elems);
    }
}