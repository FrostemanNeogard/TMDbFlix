import MainContent from './components/MainContent';
import MainNavigation from './components/MainNavigation';
import { HashRouter } from "react-router-dom";
import { useEffect, useState } from 'react';
import './main.sass'

function App() {

  let [currentPage, setCurrentPage] = useState(window.location.hash)

  useEffect(() => {
    if (currentPage.startsWith('#')) setCurrentPage(currentPage.substring(1, currentPage.length))
  }, [currentPage])

  return (
    <HashRouter>
      <div className="App">
        <MainNavigation activeButton={currentPage}/>
        <MainContent />
      </div>
    </HashRouter>
  );
}

export default App