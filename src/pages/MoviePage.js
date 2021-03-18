import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMovies } from '../utils/movieService';
import Modal from './Modal';

const MovieList = () => {

  const [filmer, setFilmer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const[video, setVideo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try{
      setLoading(true);
      const movies = await getMovies();
      setFilmer(movies);
      setLoading(false);
      } catch (error)
    {
      setError(error);
    } 
   };
  getData();
 }, []);

  
  
  const closeModal = () => {
      setModal(false);
  }

  /*setter staten til video med videoUrl og title*/
  const modalMovie = (videoUrl) => {
      setVideo(videoUrl);
      setModal(true);
      console.log(video);
  }

  const MovieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 700px;
    color: black;
    margin: auto;
  `

  const StyledMovie = styled.div `
    text-align: left;
    cursor: pointer;
    background-color: white;
    color: black;
    margin: 1%;
    padding: 2%;
  `

  const StyledImg = styled.img `
  width: 200px;
  float: right;
  `
  return (
      <>
      <Modal modal={modal} setModal={setModal} video={video} closeModal={closeModal} />
      <section className="filmer">
      {!error || filmer?.length > 0
        ? (
          <MovieWrapper>
            {filmer.map((movie, index) => (
              <StyledMovie key={index} onClick={() => modalMovie(...movie)}>
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