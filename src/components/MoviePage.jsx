import { useLocation } from "react-router-dom"
import GetBackdropImage from '../utils/js/GetBackdropImage'
import { useState } from 'react'
import GetAPIRequestURL from "../utils/js/GetAPIRequestURL"

function MoviePage() {
  const location = useLocation()
  let [movie, setMovie] = useState(location.state.movie)

  // If movie is not defined, fetch data from movie in url parameter
  if (!movie) {
    // Workaround to get url params since it otherwise behaves weirdly with HashRouter
    const URL = window.location.href
    const urlParams = URL.substring(URL.indexOf('?'), URL.length)
    const params = new URLSearchParams(urlParams)
    const movieId = params.get('id')

    const requestUrl = GetAPIRequestURL('movie/'+movieId)
    fetch(requestUrl)
    .then(res => res.json())
    .then(data => setMovie(data))
  }
  

  
  const backdropSrc = GetBackdropImage(movie.backdrop_path)

  return (
    <div className="single-movie-details">
      <h1>Movie Page</h1>
      <img src={backdropSrc} alt="" />
    </div>
  )
}

export default MoviePage