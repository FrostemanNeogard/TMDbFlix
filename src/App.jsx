import MainContent from './components/MainContent';
import MainNavigation from './components/MainNavigation';
import { HashRouter } from "react-router-dom";
import './main.sass'

function App() {

  const currentPage = window.location.pathname

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