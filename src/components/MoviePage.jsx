import { useLocation } from "react-router-dom"
import GetBackdropImage from '../utils/js/GetBackdropImage'
import GetPosterImage from '../utils/js/GetPosterImage'
import { useState, useEffect } from 'react'
import GetAPIRequestURL from "../utils/js/GetAPIRequestURL"
import GetURLParameters from "../utils/js/GetURLParameters"
import FetchData from '../utils/js/FetchData'
import GetVideoURL from "../utils/js/GetVideoURL"
import MovieList from "./MovieList"

function MoviePage() {
  const location = useLocation()
  let [movieDetails, setMovie] = useState(location.state?.movie)
  let [similarMovies, setSimilarMovies] = useState([])
  
  // If movie is not defined, fetch data from movie in url parameter
  useEffect(() => {
    const params = GetURLParameters()
    const movieId = params.get('id')
    
    if (!movieDetails) {
      if (movieId == 'undefined') return
      
      FetchData(GetAPIRequestURL('movie/' + movieId), (data) => {
        if (!data.success) return
        setMovie(data)
      })
    }

    FetchData(GetAPIRequestURL('movie/' + movieId + '/similar'), (data) => setSimilarMovies(data.results))
  }, [])

  return (
    <>
      {!movieDetails ? <h1>Error: this movie cannot be found.</h1> : <MovieInformation movieDetails={movieDetails} similarMovies={similarMovies} />}
    </>
  )
}

function MovieInformation(props) {

  const { backdrop_path, genre_ids, overview, poster_path, release_date, title, vote_average } = props.movieDetails
  const releaseYear = release_date.substring(0, 4)
  const backdropSrc = GetBackdropImage(backdrop_path)
  const posterSrc = GetPosterImage(poster_path)

  const formattedReviewScore = Math.round(vote_average*10)
  const reviewScoreColors = {
    red: ((100-formattedReviewScore) * 5.1),
    green: ((formattedReviewScore) * 5.1)
  }
  const reviewRgb = `rgb(${reviewScoreColors.red}, ${reviewScoreColors.green}, 0)`

  let [genreArray, setGenreArray] = useState([])

  useEffect(() => {
    FetchData(GetAPIRequestURL('genre/movie/list'), (data) => {
      setGenreArray(data.genres)
    })
  }, [])

  return (
    <>
      <div className="single-movie-details">
        <div className="details">
         <img src={posterSrc} alt={title} />

         <div className="side-info">

            <div className="title">
              <h1>{title} <span>({releaseYear})</span></h1>
            </div>

            <div className="genres">
              <GenreNames movieGenres={genre_ids} allGenreIds={genreArray}/>
            </div>

            <div className="row">
              <div className="review">
                <div className="progress-circle">
                  <div className="fill" style={ { background: `conic-gradient(${reviewRgb} ${36*vote_average}deg, transparent 0deg)` } }/>
                  <h3 className="review-score">{formattedReviewScore}%</h3>
                </div>
              </div>
              
              <div className="release">
                <h2>Release date</h2>
                <h3>{release_date.split('-').join('/')}</h3>
              </div>
            </div>

            <div className="overview">
              <h1>Overview</h1>
              <p>{overview}</p>
            </div>

         </div>
        </div>

        <div className="casting">
            <Casting id={props.movieDetails.id} amount={8}/>
        </div>

        <div className="videos">
          <Trailer id={props.movieDetails.id} amount={2}/>
        </div>

        <div className="recommendations">
          <h1>You may also like...</h1>
          <div className="movies-section">
            <MovieList tall={true} amount={8} movieArray={props.similarMovies} />
          </div>
        </div>

      </div>
    </>
  )
}

function GenreNames(props) {
  let movieGenres = props.movieGenres
  let allGenreIds = props.allGenreIds

  let genreNamesHTML = []

  for (let i = 0; i < movieGenres.length; i++) {
    let currentGenreId = movieGenres[i]
    allGenreIds.findIndex((element) => {
      if (element.id == currentGenreId) genreNamesHTML.push(<p key={i}>{element.name}</p>)
    })
  }

  return (
    <>
      {genreNamesHTML}
    </>
  )
}

function Casting(props) {
  let returnHTML = []
  let [castHTML, setCastHTML] = useState([])

  useEffect(() => {
    FetchData(GetAPIRequestURL('movie/' + props.id + '/credits'), (data) => {
      const credits = data.cast
      for (let i = 0; i < (props.amount > credits.length ? credits.length : props.amount); i++) {
        const currentCasting = credits[i]
        returnHTML.push(
          <div key={i}>
            <img src={'https://www.themoviedb.org/t/p/w300_and_h300_face/'+currentCasting.profile_path} alt={currentCasting.name} />
            <p>
              {currentCasting.name}
            </p>
            <p>
              {currentCasting.character}
            </p>
          </div>
        )
      }
      setCastHTML(returnHTML)
    })
  }, [])

  if (!castHTML.length > 0) return

  return (
    <>
      <h1>Cast</h1>
      <div>
        {castHTML}
      </div>
    </>
  )
}

function Trailer(props) {
  let returnHTML = []
  let [moviesHTML, setMoviesHTML] = useState([])
  
  useEffect(() => {
    FetchData(GetAPIRequestURL('movie/' + props.id + '/videos'), (data) => {
      const movies = data.results
      for (let i = 0; i < (props.amount > movies.length ? movies.length : props.amount); i++) {
        const currentMovie = movies[i]
        const src = GetVideoURL(currentMovie.site, currentMovie.key)
        returnHTML.push(<iframe key={i} src={src} title={currentMovie.name}/>)
      } 
      setMoviesHTML(returnHTML)
    })
  }, [])

  if (!moviesHTML.length > 0) return

  return (
    <>
      <h1>Videos</h1>
      <div>
        {moviesHTML}
      </div>
    </>
  )
}

export default MoviePage