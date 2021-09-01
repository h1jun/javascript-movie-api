const headerRender = () => {
    const headerTemplate = `
        <header class="my-0 mx-auto  w-90vw xl:w-1200">
            <div class="flex justify-between h-7vh items-center">
                <div class="text-2xl font-semibold">
                    <a href="#">Movie</a>
                </div>
                <div class="flex text-2xl">
                    <div>
                        <input type="text" id="search" placeholder="검색">
                        <label for="search" class="w-48 mr-28">
                            <i class="fas fa-search"></i>
                        </label>
                    </div>
                    <div>
                        <a href="#">좋아요</a>
                    </div>
                </div>
            </div>
        </header>
    `;

    document.querySelector('#root').innerHTML = headerTemplate;
}

export { headerRender }