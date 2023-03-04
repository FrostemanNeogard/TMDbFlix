import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GetAPIRequestURL from '../utils/js/GetAPIRequestURL'
import GetURLParameters from '../utils/js/GetURLParameters'
import FetchData from '../utils/js/FetchData'
import MovieList from './MovieList'

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
		FetchData(requestURL, (data) => setter(data))
	}

	const GenreButtons = (props) => {
		let [buttonArray, setButtonArray] = useState([])
		let generatedButtonArry = []

		let requestURL = GetAPIRequestURL('genre/movie/list')
		const params = GetURLParameters()
		const activeId = params.get('genre')

		useEffect(() => {
			FetchData(requestURL, (data) => {
				for (let i = 0; i < data.genres.length; i++) {
					const currentGenre = data.genres[i]
					generatedButtonArry.push(
						<Link to={`/discover?genre=${currentGenre.id}`}>
							<button
								key={i + 'a'}
								className={activeId == currentGenre.id ? 'active' : ''}
								onClick={() => {
									setSearchParam(currentGenre.id)
								}}>{currentGenre.name}
							</button>
						</Link>
					)
				}
				setButtonArray(generatedButtonArry)
			})
		}, [])

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
					<GenreButtons />
				</nav>
				<MovieList tall={true} amount={18} movieArray={filteredMovies.results ? filteredMovies.results : {}}/>
			</div>
		</div>
	)
}

export default Discover