import { useEffect, useState } from "react"
import GetAPIRequestURL from "../utils/js/GetAPIRequestURL"
import MovieList from './MovieList'

export default function Search() {

  let [searchQuery, setQuery] = useState('')
  let [movieArray, setMovieArray] = useState([])

  useEffect(() => {
    const URL = window.location.href
    console.log(URL)
    const urlParams = URL.substring(URL.indexOf('?'), URL.length)
    const params = new URLSearchParams(urlParams)
    const queryParam = params.get('query')
    if (queryParam) setQuery(queryParam)
    else return

    const requestUrl = GetAPIRequestURL('search/movie', { query: searchQuery })
    fetch(requestUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovieArray(data)
      })
  }, [searchQuery])


  return (
    <>
      <h1>Search results for "{searchQuery}"</h1>
      <div className="movies-section">
        <div className="tall">
          {movieArray.results?.length > 0 ? <MovieList tall={true} amount={14} movieArray={movieArray.results ? movieArray.results : {}} /> : <p>No movies matched your search term.</p>}
        </div>
      </div>
    </>
  )
}