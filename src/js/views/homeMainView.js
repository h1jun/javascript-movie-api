import { getMovieList } from "./homeMainApi.js";

async function genreRender() {
    const movieList = await getMovieList();
    
    const section = document.createElement('section');
    document.querySelector('main').append(section);

    let genreTemplate = `
        <div class="my-0 mx-auto  w-90vw xl:w-1200">
            <h2 class="text-3xl font-bold my-9">추천 액션 영화!</h2>
            <div class="flex justify-between">
                {{__movie_list_}}
            </div>
        </div>
    `;

    const movieLi = [];
    movieList.forEach(element => {
        const year = element.release_date.substring(0, 4);
        const vote_average = String(element.vote_average).substring(0, 3);
        const posterPath = `https://image.tmdb.org/t/p/original/${element.poster_path}`; 

        movieLi.push( `
            <div>
                <div class= "w-44 h-60 bg-left bg-no-repeat bg-contain" style="background-image: url(${posterPath})"></div>
                <strong>${element.title}</strong>
                <span class="block">${year}</span>
                <span>⭐${vote_average}</span>
            </div>
        `);
    });

    genreTemplate = genreTemplate.replace("{{__movie_list_}}", movieLi.join(''));
    
    section.innerHTML = genreTemplate;
}

export { genreRender }