import { useEffect, useState } from 'react'
import GetAPIRequestURL from '../utils/GetAPIRequestURL'
import MovieArticles from './MovieArticles'

function Discover() {
	let [filteredMovies, setFilteredMovies] = useState({})
	let [searchParam, setSearchParam] = useState('')

	useEffect(() => {
		const searchRequest = 'discover/movie/'
		FetchMovieList(searchRequest, setFilteredMovies)
  }, [searchParam])

	const FetchMovieList = (request, setter) => {
		let requestURL = GetAPIRequestURL(request, {
			sort_by: 'popularity.desc',
			include_adult: 'false',
			include_video: 'false',
			page: '1',
			with_watch_monetization_types: 'flatrate',
			with_genres: searchParam
		})
		fetch(requestURL)
		.then(res => res.json())
		.then(data => setter(data))
	}

	const GenreButtons = (props) => {
		let [buttonArray, setButtonArray] = useState([])
		let generatedButtonArry = []

		let requestURL = GetAPIRequestURL('genre/movie/list')
		fetch(requestURL)
		.then(res => res.json())
		.then(data => {
			for (let i = 0; i < props.buttonAmount; i++) {
				generatedButtonArry.push(
					<button
						key={i}
						onClick={() => {setSearchParam(data.genres[i].id)}}>{data.genres[i].name}
					</button>
				)
			}
			setButtonArray(generatedButtonArry)
		})

		return (
			<>
				{buttonArray}
			</>
		)
	}

	return (
		<div className="movies-section">
			<div className="tall">
				<h1>Discover</h1>
				<nav className='genre-filter'>
					<GenreButtons buttonAmount={10}/>
				</nav>
				<section className="movie-list">
					<MovieArticles tall={true} amount={10} movieArray={filteredMovies.results ? filteredMovies.results : {}}/>
				</section>
			</div>
		</div>
	)
}

export default Discover