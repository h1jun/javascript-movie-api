import { getDetail } from "./todayMovieApi.js";

async function detailTest() {
    const detail = await getDetail()
    console.log(detail);
    
    let template = `
        <div class="my-0 mx-auto  w-90vw xl:w-1200">test</div>
    `;


    document.querySelector('main').innerHTML = template;

} 

export default detailTest;