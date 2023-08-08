import { useState, useEffect } from "react"
import { get } from '../data/httpClient'
import { MovieCard } from "./MovieCard"
import '../components/ContextMovieCard.css'


export const ContextMovieCard = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
      get('/discover/movie').then((data) => {
        setMovies(data.results) 
        console.log(data)
      })

    }, []);

    const searchMovie = (e) => {
        e.preventDefault()
        const search = e.target.search.value
        get(`/search/movie?query=${search}`).then((data) => {
            setMovies(data.results)
        })
    }
    

    return (
        <div className='animate__animated animate__fadeIn'>
            <form className="search" onSubmit={searchMovie}>
                <input type="text" name="search" placeholder="Search for a movie" />
                <button type="submit">Search</button>
            </form>

            <ul className="container">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
    
            </ul>
        </div>
    )
}
