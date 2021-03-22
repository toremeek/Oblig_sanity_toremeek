import { useState, useEffect } from 'react';
import { MovieWrapper, StyledImg, StyledMovie } from '../components/StyledComponents';
import { getMovies } from '../utils/movieService';
import Modal from './Modal';

const MovieList = () => {

  const [filmer, setFilmer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const[video, setVideo] = useState([]);
  const [error, setError] = useState(null);


  console.table("filmer", filmer);

  /*kjører getdata når siden lastes og catcher error*/
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try{
      const movies = await getMovies();
      setFilmer(movies);
      
      setLoading(false);
      } catch (error)
    {
      setError(error);
    } 
   };
   setError(null);
  getData();
 }, []);
  
 /*lukker modal*/
  const closeModal = () => {
      setModal(false);
  }
  /*setter staten til video med videoUrl og title*/
  const modalMovie = (videoUrl) => {
      setVideo(videoUrl);
      setModal(true);
      console.log(video);
  }

  return (
      <>
     
      <Modal modal={modal} setModal={setModal} filmer={filmer} video={video} closeModal={closeModal} />
      <section className="filmer">
        {error? <p>Noe gikk galt</p> : null}
      {filmer?.length > 0
        ? (
          <MovieWrapper>
            {filmer.map((movie, index) => (
              <StyledMovie key={index} onClick={() => modalMovie(movie.videoUrl)}>
                   <StyledImg src={movie.imageUrl}/>
                <h2>{movie.title}</h2>
                <p>
                  Lead actor: {movie.actor}</p>
                <p>
                  Plot: {movie.ingress}
                </p>
              </StyledMovie>
            ))}
          </MovieWrapper>
        ) : null}
      {loading ? <p>Loading</p> : null}
    </section>
    </>
  );
};

export default MovieList;