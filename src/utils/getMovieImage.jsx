import placerholder from '../img/placeholder.png'


export const getMovieImage = (path, widht) => {
    return path? `https://image.tmdb.org/t/p/w${widht}${path}` : placerholder // si existe la imagen la devolvemos, si no existe devolvemos la imagen placeholder
}


