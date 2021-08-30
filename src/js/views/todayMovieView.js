import { getDetail } from "./todayMovieApi.js";

async function todayMovieRender() {
    const detail = await getDetail();
    const picFullPath = `https://image.tmdb.org/t/p/original/${detail.backdrop_path}`; 

    const main = document.createElement('main');
    const section = document.createElement('section');

    main.append(section);
    document.querySelector('#root').append(main);

    const todayMovieTemplate = `
        <div class="w-screen h-70vh absolute z-99- bg-cover bg-no-repeat bg-black backdrop-opacity-30" style="background-image: url(${picFullPath})">
            <div class="bg-black opacity-30 w-screen h-70vh"></div>
        </div>
        
        <div class="my-0 mx-auto  w-90vw xl:w-1200">
            <div class="flex-auto flex flex-col justify-center items-center text-white h-70vh">
                <div class="mb-32 text-7xl font-bold">${detail.title}</div>
                <div class="text-4xl mb-24">"${detail.tagline}"</div>
                <button href="/detail" class="border-4 border-white py-2 px-8 bg-black bg-opacity-30 moremovie" id=${detail.id}>더보기</button>
            </div>
        </div>
    `;

    section.innerHTML = todayMovieTemplate;
}


export { todayMovieRender };