import { useEffect,useState } from 'react'
import { getPopularMovies } from '../services/Tmdb'
import type { Movie } from '../types/Movie'
import { Link,Navigate } from 'react-router-dom'
const Home = () => {
  const savedUser = localStorage.getItem('currentUser')
  const [movies, setMovies] = useState<Movie[]>([])
  useEffect(() => {
  getPopularMovies().then((movies) => {
    setMovies(movies)
  })
}, [])
  if (!savedUser) {
  return <Navigate to="/login" replace />
}
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
return (
  <main>
    <h1>Popular Movies</h1>

    {movies.map((movie) => (
  <article key={movie.id}>
    <Link to={`/movie/${movie.id}`}>
    {movie.poster_path && (
  <img
    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
    alt={movie.title}
    width="200"
  />

)}
</Link>
    <p>{movie.title}</p>
    <p>Rating: {movie.vote_average.toFixed(1)} / 10</p>
<p>Release date: {movie.release_date}</p>
  </article>
))}
  </main>
)
}

export default Home