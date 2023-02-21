import MainContent from './components/MainContent';
import MainNavigation from './components/MainNavigation';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './main.sass'

function App() {

  const currentPage = window.location.pathname

  return (
    <BrowserRouter>
      <div className="App">
        <MainNavigation activeButton={currentPage}/>
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App