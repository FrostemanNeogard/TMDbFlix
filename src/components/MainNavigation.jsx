export default function MainNavigation(props) {
  const activeButton = props.activeButton

  return (
    <div className="main-navigation">
      <h2>Movies</h2>
      <nav>
        <a href="/">
          <button id="home-button" className={activeButton == '/' ? 'active' : 'inactive'}>
            <span>
              <svg stroke="currentColor" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" strokeWidth="1" fill="none"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"></path></svg>
            </span>
            Home
          </button>
        </a>
        <a href="/discover">
          <button id="discover-button" className={activeButton == '/discover' ? 'active' : 'inactive'}>
            <span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="m8 16 5.991-2L16 8l-6 2z"></path></svg>
            </span>
            Discover
          </button>
        </a>
      </nav>
    </div>
  )
}