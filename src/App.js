import { useState } from 'react';
import './App.css';
import Footer from './pages/Footer';
import Header from './pages/Header';
import MovieList from './pages/MoviePage';
import { GlobalStyles } from './styles/Global';

function App() {

  const [showButton, setShowButton] = useState(true);

  

  return (
<>
  <GlobalStyles/>
  <div className="App">
    <Header url={`https://aldianews.com/sites/default/files/articles/cuco2_0.jpg`} head={`(in)sanity`}/>
    <p>Henter data om filmklassikere lagret i Sanity og presenterer her:</p>
    <MovieList showButton={showButton} setShowButton={setShowButton} />
    <Footer />
  </div>
</>
  );
}

export default App;