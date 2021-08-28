import { getData } from "./todayMovieApi.js";

async function render() {
    const data = await getData();

    const picFullPath = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`; 
    
    const main = document.createElement('main')
    const section = document.createElement('section')
    section.style.width = '100vw'; 
    section.style.height = '70vh'; 
    section.style.backgroundSize = 'center'; 
    section.style.backgroundPosition = 'center'; 
    section.style.backgroundRepeat = 'no-repeat'; 
    section.style.backgroundImage  = `url(${picFullPath})`

    main.append(section)
    document.querySelector('#root').append(main)

    section.innerHTML = `
        <div class="text-white">
            <h1 class="text-8xl">${data.title}</h1>
            <div>${data.overview}</div>
            <div>
                <span>${data.vote_average}</span>
                <button type="button" id=${data.id}>더보기</button>
            </div>
        </div>
    `;

}



render();

export { render };