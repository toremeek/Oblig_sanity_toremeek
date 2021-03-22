import Footer from "./Footer";
import Header from "./Header";
import MovieList from "./MoviePage";

const Home = () => (
    <>
    <Header url={`https://aldianews.com/sites/default/files/articles/cuco2_0.jpg`} head={`(in)sanity`}/>
    <p>Henter data om filmklassikere lagret i Sanity og presenterer her:</p>
    <MovieList />
    <Footer />
    </>
)

export default Home;