import GetPosterImage from "../utils/js/GetPosterImage"
import $ from 'jquery'
import { useEffect } from "react"

function MovieList(props) {

	useEffect(() => {
		const handleOnMouseMove = e => {
			let { currentTarget: target } = e;
			let constraint = window.innerWidth / 8;
			let box = target.getBoundingClientRect();
			let calcX = -(e.clientY - box.y - (box.height / 2)) / constraint;
			let calcY = (e.clientX - box.x - (box.width / 2)) / constraint;
			let calcShine = 77 + ((calcY) + (calcX)) * 2;
			$(':root').css('--mouse-x', `${calcX}deg`);
			$(':root').css('--mouse-y', `${calcY}deg`);
			$(':root').css('--shine-strength', `${calcShine}%`);
		}

		for (const card of document.querySelectorAll(".movie-bounding-box")) {
			card.onmousemove = e => handleOnMouseMove(e);
		}
	})

	let returnHTML = []
	for (let i = 0; i < props.amount; i++) {

		const currentMovie = props.movieArray[i]
		const movieData = currentMovie ? currentMovie : {}
		const { original_title, release_date } = movieData
		const releaseYear = release_date?.substring(0, 4)
		const posterSrc = GetPosterImage(movieData.poster_path, props.tall)

		returnHTML.push(
			<article key={i} className="movie-bounding-box">
				<div className="movie">
					<img src={posterSrc} alt={original_title} />
					<div>
						<p className="movie-title">{original_title}</p>
						<p className="release-year">{releaseYear}</p>
					</div>
				</div>
			</article>
		)
	}
	return (
		<section className="movie-list">
			{returnHTML}
		</section>
	)
}

export default MovieList