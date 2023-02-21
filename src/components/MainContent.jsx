import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Discover from './Discover'

function MainContent() {
	return (
		<div className="main-content">

			<nav className='search-bar'>
				<svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor"></path></svg>
				<input type="text" placeholder="Search movie titles" onChange={(e) => console.log('a')}/>
			</nav>

			<Routes>
				<Route path="/compileit-test-case/" element={<HomePage />}/>
				<Route path="/compileit-test-case/discover" element={<Discover />}/>
			</Routes>

			<footer>
				<p>This product uses the TMDb API but is not endorced or certified by TMDb</p>
			</footer>
		</div>
	)
}

export default MainContent