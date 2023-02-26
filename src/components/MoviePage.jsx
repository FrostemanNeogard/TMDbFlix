import { useLocation } from "react-router-dom"
import GetBackdropImage from '../utils/js/GetBackdropImage'
import GetPosterImage from '../utils/js/GetPosterImage'
import { useState, useEffect } from 'react'
import GetAPIRequestURL from "../utils/js/GetAPIRequestURL"
import GetURLParameters from "../utils/js/GetURLParameters"

function MoviePage() {
  const location = useLocation()
  let [movieDetails, setMovie] = useState(location.state?.movie)

  // If movie is not defined, fetch data from movie in url parameter
  useEffect(() => {
    if (!movieDetails) {
      const params = GetURLParameters()
      const movieId = params.get('id')
  
      if (movieId == 'undefined') return
  
      const requestUrl = GetAPIRequestURL('movie/'+movieId)
      fetch(requestUrl)
      .then(res => res.json())
      .then(data => {
        if (!data.success) return
        setMovie(data)
      })
    }
  }, [])

  return (
    <div className="single-movie-details">
      <div className="movie-information">
        {!movieDetails ? <NoMovie /> : <MovieInformation movieDetails={movieDetails} />}
      </div>
    </div>
  )
}

function NoMovie() {
  return (
    <h1>
      Error: this movie cannot be found.
    </h1>
  )
}

function MovieInformation(props) {

  const { backdrop_path, genre_ids, overview, poster_path, release_date, title, vote_average } = props.movieDetails
  const releaseYear = release_date.substring(0, 4)
  const backdropSrc = GetBackdropImage(backdrop_path)
  const posterSrc = GetPosterImage(poster_path)
  const formattedReviewScore = (vote_average*10 + '%')

  return (
    <>
      <div className="details">
        <img src={posterSrc} alt={title} />
        <div>
          <div className="overview">
            <h1>{title} <span>({releaseYear})</span></h1>
          </div>
          <div className="review">
            <h3 className="review-score">{formattedReviewScore}</h3>
          </div>
        </div>
      </div>
      <div className="overview">
        <h1>Overview</h1>
        <p>{overview}</p>
      </div>
    </>
  )
}

export default MoviePage