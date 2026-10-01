import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Review from './pages/Review'

function App() {
  return (
  <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} /> 
    <Route path="/movie/:id" element={<MovieDetails />} />
    <Route path="/movie/:id/review" element={<Review />} />
  </Routes>
)
}

export default App
