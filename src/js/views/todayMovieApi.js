import storeInfo from "./store.js";

const API_KEY = storeInfo.API_KEY;

async function getData() {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KO&page=1`);
        const dataCount = response.data.results.length; // 가져온 data 배열 길이
        const rndNum = Math.floor(Math.random() * dataCount); // 랜덤 숫자
        const movieId = response.data.results[rndNum].id;

        return movieId;

    } catch (error) {
        console.log(error);
    }
};

async function getDetail() {
    const movieId = await getData();
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko`);
        return response.data;

    } catch (error) {
        console.log(error);
    }
};

export { getDetail };