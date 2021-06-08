

export const filterByKeyWord = (array, keyword) => {
    const filteredMovies = array.filter((item) => {
        return item.nameRU.includes(keyword)
    });

    return filteredMovies
}

export const filterByDuration = (array) => {
    const shortMovies = array.filter((item) => {
        return item.duration < 40;
    });

    return shortMovies
}