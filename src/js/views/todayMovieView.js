import { getData } from "./todayMovieApi.js";

async function render() {
    const data = await getData();

    const picFullPath = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`; 
    
    const main = document.createElement('main');
    const section = document.createElement('section');

    main.append(section);
    document.querySelector('#root').append(main);

    section.innerHTML = `
        <div class="w-screen h-70vh absolute z-99- bg-cover bg-no-repeat bg-black backdrop-opacity-30" style="background-image: url(${picFullPath})">
            <div class="bg-black opacity-30 w-screen h-70vh"></div>
        </div>
        
        <div class="my-0 mx-auto  w-90vw xl:w-1200">
            <div class="flex-auto flex flex-col justify-center items-center text-white h-70vh">
                <div class="mb-32 text-7xl font-bold">${data.title}</div>
                <div class="truncate text-4xl w-60vw mb-24">${data.overview}</div>
                <button class="border-4 border-white py-2 px-8 bg-black bg-opacity-30" type="button" id=${data.id}>더보기</button>
            </div>
        </div>
    `;
}

render();

export { render };