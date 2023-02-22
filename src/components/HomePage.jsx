import { useState, useEffect } from 'react'
import MovieList from './MovieList'
import GetAPIRequestURL from "../utils/js/GetAPIRequestURL"

function HomePage() {
	let [popularMovies, setPopularMovies] = useState({})
	let [nowPlaying, setNowPlaying] = useState({})
	let [topRated, setTopRated] = useState({})

	useEffect(() => {
		FetchMovieList('movie/popular', setPopularMovies)
		FetchMovieList('movie/now_playing', setNowPlaying)
		FetchMovieList('movie/top_rated', setTopRated)
  }, [])

	const FetchMovieList = (request, setter) => {
		let requestURL = GetAPIRequestURL(request)
		fetch(requestURL)
		.then(res => res.json())
		.then(data => setter(data))
	}
  
	return (
		<>
			<div className="movies-section">

				<div className="wide">
					<h1>Popular</h1>
					<MovieList tall={false} amount={3} movieArray={popularMovies.results ? popularMovies.results : {}}/>
				</div>

				<div className="tall">
					<h1>Now Playing</h1>
					<MovieList tall={true} amount={15} movieArray={nowPlaying.results ? nowPlaying.results : {}}/>
				</div>

				<div className="tall">
					<h1>Top Rated</h1>
					<MovieList tall={true} amount={14} movieArray={topRated.results ? topRated.results : {}}/>
				</div>

			</div>
		</>
	)
}

export default HomePage