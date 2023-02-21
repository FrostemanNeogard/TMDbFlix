import { useEffect, useState } from 'react'
import GetAPIRequestURL from '../utils/GetAPIRequestURL'
import GetPosterImage from '../utils/GetPosterImage'
import GetBackdropImage from '../utils/GetBackdropImage'

function MainContent() {
  
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

	const MovieArticle = (props) => {
		const movieData = props.movie ? props.movie : {}
		const { original_title, release_date } = movieData
		const posterSrc = GetPosterImage(movieData.poster_path, props.tall)
		return (
			<article className="movie">
				<img src={posterSrc} alt={original_title} />
				<div>
					<p className="movie-title">{original_title}</p>
					<p className="release-year">{release_date}</p>
				</div>
			</article>
		)
	}

	return (
		<div className="main-content">
			<nav>
				<svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor"></path></svg>
				<input type="text" placeholder="Search movie titles" />
			</nav>

			<div className="movies-section">

				<div className="wide">
					<h1>Popular</h1>
					<section className="movie-list">
						<MovieArticle tall={false} movie={popularMovies.results ? popularMovies.results[0] : {}}/>
						<MovieArticle tall={false} movie={popularMovies.results ? popularMovies.results[1] : {}}/>
						<MovieArticle tall={false} movie={popularMovies.results ? popularMovies.results[2] : {}}/>
					</section>
				</div>

				<div className="tall">
					<h1>Now Playing</h1>
					<section className="movie-list">
						<MovieArticle tall={true} movie={nowPlaying.results ? nowPlaying.results[0] : {}}/>
						<MovieArticle tall={true} movie={nowPlaying.results ? nowPlaying.results[1] : {}}/>
						<MovieArticle tall={true} movie={nowPlaying.results ? nowPlaying.results[2] : {}}/>
						<MovieArticle tall={true} movie={nowPlaying.results ? nowPlaying.results[3] : {}}/>
						<MovieArticle tall={true} movie={nowPlaying.results ? nowPlaying.results[4] : {}}/>
						<MovieArticle tall={true} movie={nowPlaying.results ? nowPlaying.results[5] : {}}/>
						<MovieArticle tall={true} movie={nowPlaying.results ? nowPlaying.results[6] : {}}/>
						<MovieArticle tall={true} movie={nowPlaying.results ? nowPlaying.results[7] : {}}/>
						<MovieArticle tall={true} movie={nowPlaying.results ? nowPlaying.results[8] : {}}/>
						<MovieArticle tall={true} movie={nowPlaying.results ? nowPlaying.results[9] : {}}/>
					</section>
				</div>

				<div className="tall">
					<h1>Top Rated</h1>
					<section className="movie-list">
						<MovieArticle tall={true} movie={topRated.results ? topRated.results[0] : {}}/>
						<MovieArticle tall={true} movie={topRated.results ? topRated.results[1] : {}}/>
						<MovieArticle tall={true} movie={topRated.results ? topRated.results[2] : {}}/>
						<MovieArticle tall={true} movie={topRated.results ? topRated.results[3] : {}}/>
						<MovieArticle tall={true} movie={topRated.results ? topRated.results[4] : {}}/>
						<MovieArticle tall={true} movie={topRated.results ? topRated.results[5] : {}}/>
						<MovieArticle tall={true} movie={topRated.results ? topRated.results[6] : {}}/>
						<MovieArticle tall={true} movie={topRated.results ? topRated.results[7] : {}}/>
						<MovieArticle tall={true} movie={topRated.results ? topRated.results[8] : {}}/>
						<MovieArticle tall={true} movie={topRated.results ? topRated.results[9] : {}}/>
					</section>
				</div>

			</div>

			<footer>
				<p>This product uses the TMDb API but is not endorced or certified by TMDb</p>
			</footer>
		</div>
	)
}

export default MainContent