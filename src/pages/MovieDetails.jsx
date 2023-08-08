import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../data/httpClient'
import { getMovieImage } from '../utils/getMovieImage'

import '../pages/MovieDetails.css'


export const MovieDetails = () => {

    const { movieId } = useParams() //rescatamos el id de la pelicula que viene en la url

    const [movie, setMovie] = useState([]) //creamos el estado de la pelicula

    const [generos, setGeneros] = useState([]) 

    
    useEffect(() => {
        get(`/movie/${movieId}`).then(movie => { 
            setMovie(movie)
            setGeneros(movie.genres[0])
        }) //hacemos la peticion al servidor y guardamos la pelicula en el estado y los generos en el estado
    }, [movieId])
    
    const imageUrl = getMovieImage( movie?.poster_path, '500' ) 

    return (
        <div
            className='detailsContainer animate__animated animate__fadeIn'
        >
           <img src={imageUrl} alt={movie.title} 
                className='col movieImage'
           />
           <div className='col movieDetails'>
                <p className='title'><strong>Título: </strong>{movie.title}</p>
                <p><strong>Génereo: </strong>{generos.name}</p>
                <p><strong>Descripción: </strong>{movie.overview}</p>
           </div>
        </div>
    )
}
