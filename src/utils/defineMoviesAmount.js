export const defineMoviesAmount = (width) => {
    if (width > 1280) {
        return 10
    } else if (width > 320) {
        return 8
    } else {
        return 5
    }
}
