import { useState, useEffect } from 'react'
import MovieList from './MovieList'
import FetchData from '../utils/js/FetchData'
import GetAPIRequestURL from '../utils/js/GetAPIRequestURL'

function HomePage() {
	let [popularMovies, setPopularMovies] = useState({})
	let [nowPlaying, setNowPlaying] = useState({})
	let [topRated, setTopRated] = useState({})

	useEffect(() => {
		FetchData(GetAPIRequestURL('movie/popular'), setPopularMovies)
		FetchData(GetAPIRequestURL('movie/now_playing'), setNowPlaying)
		FetchData(GetAPIRequestURL('movie/top_rated'), setTopRated)
  }, [])
  
	return (
		<>
			<div className="movies-section">

				<div>
					<h1>Popular</h1>
					<MovieList tall={false} amount={3} movieArray={popularMovies.results ? popularMovies.results : {}}/>
				</div>

				<div>
					<h1>Now Playing</h1>
					<MovieList tall={true} amount={15} movieArray={nowPlaying.results ? nowPlaying.results : {}}/>
				</div>

				<div>
					<h1>Top Rated</h1>
					<MovieList tall={true} amount={14} movieArray={topRated.results ? topRated.results : {}}/>
				</div>

			</div>
		</>
	)
}

export default HomePage