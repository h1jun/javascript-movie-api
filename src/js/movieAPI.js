const clkBtn = document.querySelector('.click')
const title = document.querySelector('.title')

const API_KEY = "8f625f1d4699a82a2e593c4d543f96db";

async function getData() {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
        title.textContent = response.data.title;
    } catch (error) {
        console.log(error);
    }
}

clkBtn.addEventListener('click', () => {
    getData();
})