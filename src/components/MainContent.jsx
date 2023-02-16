export default function MainContent() {
  
	const MovieArticle = (props) => {
		const { movieTitle, releaseYear, thumbnailSrc } = props
		return (
			<article className="movie">
				<img src={thumbnailSrc} alt={movieTitle} />
				<div>
					<p className="movie-title">{movieTitle}</p>
					<p className="release-year">{releaseYear}</p>
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
					<h1>Trending</h1>
					<section className="movie-list">
						<MovieArticle movieTitle="Thor: Love and Thunder" releaseYear="2022" thumbnailSrc="https://sportshub.cbsistatic.com/i/2022/05/24/c9523ec9-5681-4e23-999e-0f40b5e12820/thor-love-and-thunder-poster.jpg"/>
						<MovieArticle movieTitle="Thor: Love and Thunder" releaseYear="2022" thumbnailSrc="https://sportshub.cbsistatic.com/i/2022/05/24/c9523ec9-5681-4e23-999e-0f40b5e12820/thor-love-and-thunder-poster.jpg"/>
						{/* <MovieArticle movieTitle="Thor: Love and Thunder" releaseYear="2022" thumbnailSrc="https://sportshub.cbsistatic.com/i/2022/05/24/c9523ec9-5681-4e23-999e-0f40b5e12820/thor-love-and-thunder-poster.jpg"/> */}
						{/* <MovieArticle movieTitle="Thor: Love and Thunder" releaseYear="2022" thumbnailSrc="https://sportshub.cbsistatic.com/i/2022/05/24/c9523ec9-5681-4e23-999e-0f40b5e12820/thor-love-and-thunder-poster.jpg"/>
						<MovieArticle movieTitle="Thor: Love and Thunder" releaseYear="2022" thumbnailSrc="https://sportshub.cbsistatic.com/i/2022/05/24/c9523ec9-5681-4e23-999e-0f40b5e12820/thor-love-and-thunder-poster.jpg"/>
						<MovieArticle movieTitle="Thor: Love and Thunder" releaseYear="2022" thumbnailSrc="https://sportshub.cbsistatic.com/i/2022/05/24/c9523ec9-5681-4e23-999e-0f40b5e12820/thor-love-and-thunder-poster.jpg"/> */}
					</section>
				</div>

				<div className="tall">
					<h1>Now Playing</h1>
					<section className="movie-list">
						<MovieArticle movieTitle="Minions" releaseYear="2023" thumbnailSrc="https://m.media-amazon.com/images/I/71Wk9hLzj7L._AC_UF894,1000_QL80_.jpg"/>
						<MovieArticle movieTitle="Minions" releaseYear="2023" thumbnailSrc="https://m.media-amazon.com/images/I/71Wk9hLzj7L._AC_UF894,1000_QL80_.jpg"/>
						<MovieArticle movieTitle="Minions" releaseYear="2023" thumbnailSrc="https://m.media-amazon.com/images/I/71Wk9hLzj7L._AC_UF894,1000_QL80_.jpg"/>
					</section>
				</div>

			</div>

			<footer>
				<p>This product uses the TMDb API but is not endorced or certified by TMDb</p>
			</footer>
		</div>
	)
}