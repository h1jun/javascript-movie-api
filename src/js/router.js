const setMovieDetailPath = (pathName, movieId) => {
    history.pushState({ }, pathName, window.location.origin + pathName + '/' + movieId)
}

export { setMovieDetailPath }