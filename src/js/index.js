import "tailwindcss/tailwind.css"
import { headerRender } from "./home/headerView.js";
import { initialRoutes, setHistoryPath, handleMovieClick } from "./router.js";
import movieDetail from "./detail/movieDetailView.js";

headerRender();

const main = document.createElement('main');
document.querySelector('#root').append(main);

window.onload = async () => {
    await initialRoutes(main);
}