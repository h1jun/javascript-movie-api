import { todayMovieRender } from "./views/todayMovieView.js";
import { genreRender } from "./views/homeMainView.js";

async function mainRouter() {
    await todayMovieRender();
    genreRender();
}

mainRouter();

export { mainRouter }