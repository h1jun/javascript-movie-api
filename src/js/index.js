import "tailwindcss/tailwind.css"
import { headerRender } from "./home/headerView.js";
import { initialRoutes, setHistoryPath } from "./router.js";
import detailTest from "./detail/movieDetailView.js";

headerRender();

const main = document.createElement('main');
document.querySelector('#root').append(main);

window.onload = async () => {
    await initialRoutes(main);
}