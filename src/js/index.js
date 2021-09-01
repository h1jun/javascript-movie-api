import "tailwindcss/tailwind.css"
import { headerRender } from "./home/headerView.js";
import { initialRoutes, setHistoryPath } from "./router.js";
import detailTest from "./detail/movieDetailView.js";

headerRender();

const main = document.createElement('main');
document.querySelector('#root').append(main);


window.onload = async () => {
    await initialRoutes(main);
    await test();
}

function test() {
    const handleDetail = document.querySelectorAll(".movie-detail");
 
    handleDetail.forEach(element => {
        element.addEventListener("click", (event) =>  {
            const pathName = event.currentTarget.getAttribute("route")
            const movieId = event.currentTarget.id;

            setHistoryPath(pathName, main, movieId);
        })
    });
}
