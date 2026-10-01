import { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import { getMovieDetails } from '../services/Tmdb'
import type { Movie } from '../types/Movie'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)
  useEffect(() => {
  if (id) {
    getMovieDetails(id).then((result) => {
      setMovie(result)
    })
  }
}, [id])

if (!movie) {
  return <p>Loading...</p>
}  
return (
  <main>
    <h1>{movie.title}</h1>
    <p>{movie.overview}</p>
    <p>Rating: {movie.vote_average.toFixed(1)} / 10</p>
    <Link to={`/movie/${movie.id}/review`}>
  Write a Review
</Link>
  </main>
)
}

export default MovieDetails