import GetPosterImage from "../utils/GetPosterImage"

function MovieArticles(props) {
	let returnHTML = []
	for (let i = 0; i < props.amount; i++) {

		const currentMovie = props.movieArray[i]
		const movieData = currentMovie ? currentMovie : {}
		const { original_title, release_date } = movieData
		const posterSrc = GetPosterImage(movieData.poster_path, props.tall)

		returnHTML.push(
			<article key={i} className="movie">
				<img src={posterSrc} alt={original_title} />
				<div>
					<p className="movie-title">{original_title}</p>
					<p className="release-year">{release_date}</p>
				</div>
			</article>
		)
	}
	return (
		<>
			{returnHTML}
		</>
	)
}

export default MovieArticles