import MainContent from './components/MainContent';
import MainNavigation from './components/MainNavigation';

import './main.sass'

const API_KEY = process.env.REACT_APP_API_KEY

export default function App() {
  return (
    <div className="App">
      <MainNavigation />
      <MainContent />
    </div>
  );
}