import MainContent from './components/MainContent';
import MainNavigation from './components/MainNavigation';
import './main.sass'

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <MainContent />
    </div>
  );
}

export default App