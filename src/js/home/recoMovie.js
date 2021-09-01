import { getMovieList } from "./movieListApi.js";

async function recoMoiveRender() {
    const movieList = await getMovieList();
    
    let genreTemplate = `
        <section>
            <div class="my-0 mx-auto  w-90vw xl:w-1200">
                <h2 class="text-3xl font-bold my-9">추천 액션 영화!</h2>
                <ul class="flex justify-between">
                    {{__movie_list_}}
                </ul>
            </div>
        </section>
    `;

    const movieLi = [];
    movieList.forEach(element => {
        const year = element.release_date.substring(0, 4);
        const vote_average = String(element.vote_average).substring(0, 3);
        const posterPath = `https://image.tmdb.org/t/p/original/${element.poster_path}`; 
        movieLi.push( `
            <li class="movie-detail cursor-pointer" id="${element.id}" route="/detail">
                <div class= "w-44 h-60 bg-left bg-no-repeat bg-contain" style="background-image: url(${posterPath})"></div>
                <strong>${element.title}</strong>
                <span class="block">${year}</span>
                <span>⭐${vote_average}</span>
            </li>
        `);
    });

    genreTemplate = genreTemplate.replace("{{__movie_list_}}", movieLi.join(''));
    
    return genreTemplate
}

export { recoMoiveRender }