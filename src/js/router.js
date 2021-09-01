import { homeRender } from "./home/homeView.js";
import detailTest from "./detail/movieDetailView.js";

const routes = {
    '/': homeRender,
    '/detail': detailTest,
};

const initialRoutes = async (el) => {
    await renderHTML(el, routes['/']);
    handleMovieClick();
}

const setHistoryPath = (pathName, el, movieId) => {
    history.pushState({}, pathName, window.location.origin + pathName + "/" + movieId);
    renderHTML(el, routes[pathName]);
}


const renderHTML = async (el, route) => {
    el.innerHTML = await route();
};


window.addEventListener('popstate', async (event) => {
    const mainTag = document.querySelector('main');

    if (location.pathname.split('/')[1] === "") {
        await renderHTML(mainTag, routes['/']);
    } else if (location.pathname.split('/')[1] === "detail") {
        await renderHTML(mainTag, routes['/' + location.pathname.split('/')[1]]);
    }
    
    handleMovieClick();
});


function handleMovieClick() {
    const handleDetail = document.querySelectorAll(".movie-detail");
    const main = document.querySelector('main');
    handleDetail.forEach(element => {
        element.addEventListener("click", async (event) => {
            const pathName = event.currentTarget.getAttribute("route")
            const movieId = event.currentTarget.id;
            await setHistoryPath(pathName, main, movieId);
        })
    });
}

export { initialRoutes, setHistoryPath }