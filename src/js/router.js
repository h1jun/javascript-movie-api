import { homeRender } from "./home/homeView.js";
import movieDetail from "./detail/movieDetailView.js";

const routes = {
    '/': homeRender,
    '/home': homeRender,
    '/detail': movieDetail,
};

const initialRoutes = async (el) => {
    await renderHTML(el, routes['/']);
    handleHomeClick();
}

const setHistoryPath = (pathName, el, movieId) => {
    if (!movieId) {
        history.pushState({}, '', window.location.origin + pathName);
    } else {
        history.pushState({}, '', window.location.origin + pathName + "/" + movieId);
    }

    renderHTML(el, routes[pathName]);
}


const renderHTML = async (el, route) => {
    el.innerHTML = await route();
    handleMovieClick();
};


window.addEventListener('popstate', async (event) => {
    const mainTag = document.querySelector('main');

    if (location.pathname.split('/')[1] === "") {
        await renderHTML(mainTag, routes['/']);
    } else if (location.pathname.split('/')[1] === "detail") {
        await renderHTML(mainTag, routes['/' + location.pathname.split('/')[1]]);
    }
});


function handleMovieClick() {
    const handleDetail = document.querySelectorAll(".movie-detail");
    const main = document.querySelector('main');

    handleDetail.forEach(element => {
        element.addEventListener("click", (event) => {
            const pathName = event.currentTarget.getAttribute("route");
            const movieId = event.currentTarget.id;
            setHistoryPath(pathName, main, movieId);
        })
    });
}

function handleHomeClick() {
    const home = document.querySelector('.home');
    const main = document.querySelector('main');

    home.addEventListener('click', (event) => {
        event.preventDefault();
        const pathName = event.currentTarget.getAttribute("route");
        setHistoryPath(pathName, main);
    })
}

export { initialRoutes, setHistoryPath, handleMovieClick }