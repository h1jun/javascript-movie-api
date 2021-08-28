const API_KEY = "8f625f1d4699a82a2e593c4d543f96db";

async function getData() {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KO&page=1`);

        const dataCount = response.data.results.length; // 가져온 data 배열 길이
        const rndNum = Math.floor(Math.random() * dataCount); // 랜덤 숫자
        const picPath = response.data.results[rndNum].backdrop_path; // 이미지 path
        const picFullPath = `https://image.tmdb.org/t/p/original/${picPath}`; // 이미지 full path

       return response.data.results[rndNum];
       
    } catch (error) {
        console.log(error);
    }
};


export  { getData };