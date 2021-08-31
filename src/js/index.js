import "tailwindcss/tailwind.css"
import { headerRender } from "./views/headerView.js";
import { todayMovieRender } from "./views/todayMovieView.js";
import { genreRender } from "./views/homeMainView.js";
import detailTest from "./views/movieDetailView.js";
import { setMovieDetailPath } from "./router.js";


headerRender();

const main = document.createElement('main');
document.querySelector('#root').append(main);

const initHome = async () => {
    document.querySelector('main').innerHTML = '';

    if (location.pathname === '/') {
        await todayMovieRender();
        genreRender();
    }   

    moreMoiveList()
}


window.onload = async (event) => {
    await initHome()
}

function moreMoiveList() {
    const moreMovie = document.querySelector('.moremovie');
    
    moreMovie.addEventListener('click', (event) => {
        const pathName = event.target.getAttribute("route");
        const movieId = event.target.getAttribute("id");
        setMovieDetailPath(pathName, movieId);
        detailTest();
    });
}

window.addEventListener('popstate', async () => {
    if (location.pathname === '/') {
        await initHome();
    } else if (location.pathname.split('/')[1] === 'detail') {
        await detailTest();
    }
    
});

