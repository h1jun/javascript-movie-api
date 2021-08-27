const headerTemplate = `
    <header class="flex justify-between px-20 py-4 items-center border-b-2">
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
    </header>
`;

export default headerTemplate;