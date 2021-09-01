import storeInfo from "../store.js";

const API_KEY = storeInfo.API_KEY;

async function getMovieList() {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${storeInfo.genres["Action"]}/recommendations?api_key=${API_KEY}&language=ko&page=1`);

        const movieArr = [];
        const check = [];

        while (movieArr.length !== 5) {
            const dataCnt = response.data.results.length;
            const rndNum = Math.floor(Math.random() * dataCnt); 
            if (check.indexOf(rndNum) === -1 ) {
                check.push(rndNum);
                movieArr.push(response.data.results[rndNum]);
            }
        }
        return movieArr;
    } catch (error) {
        
    }
}

export { getMovieList }