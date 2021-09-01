import { homeRender } from "./home/homeView.js";
import detailTest from "./detail/movieDetailView.js";

const routes = {
    '/': homeRender,
    '/detail': detailTest,
};

const initialRoutes = async (el) => {
    await renderHTML(el, routes['/']);
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
        renderHTML(mainTag, routes['/']);
    } else if (location.pathname.split('/')[1] === "detail") {
        renderHTML(mainTag, routes['/' + location.pathname.split('/')[1]]);
    }
    
});


export { initialRoutes, setHistoryPath }