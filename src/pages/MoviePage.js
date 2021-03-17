import { useState } from 'react';
import styled from 'styled-components';
import { getMovies } from '../utils/movieService';
import Modal from './Modal';

const MovieList = ({setShowButton, showButton}) => {

  const [filmer, setFilmer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const[video, setVideo] = useState([]);

  const getData = async () => {
    setLoading(true);
    const movies = await getMovies();
    setFilmer(movies);
    setShowButton(false);
    setLoading(false);
    
  };
  
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

  const StyledButton = styled.button `
  width: 10rem;
  margin: 10px;
  padding: 5px;
  font-weight: light;
  font-size: 16px;
  background-color: white;
  `

  const StyledImg = styled.img `
  width: 200px;
  float: right;
  `
  return (
      <>
      <Modal modal={modal} setModal={setModal} video={video} closeModal={closeModal} />
    <section className="filmer">
      {filmer?.length > 0
        ? (
          <MovieWrapper>
              {setShowButton(false)}
            {filmer.map((movie, index) => (
              <StyledMovie key={index} onClick={() => modalMovie(movie.videoUrl, video.Title)}>
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
        {showButton ? 
      <StyledButton type="button" onClick={getData}>Hent filmer</StyledButton> : null}
      {loading ? <p>Loading</p> : null}
    </section>
    </>
  );
};

export default MovieList;