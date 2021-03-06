import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Major+Mono+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Major+Mono+Display&family=Overpass+Mono:wght@300&display=swap");

h1 {
    font-family: "Major Mono Display", monospace;
    font-size: 5rem;
  }
p, button {
    font-family: "Overpass Mono", monospace;
}
h2 {
  margin-top: 10px;
  font-size: 2rem;
  width: 50%;
}
p {
  padding-top: 10px;
}

a,
.active {
  margin: 20px;
  color: white;
  font-size: 20px;
  font-family: "Overpass Mono", monospace;
}


#search {
  width: 300px;
  height: 20px;
  margin: 10px;
  text-align: center;
  font-size: 16px;
  font-family: "Overpass Mono", monospace;
}

#button {
  width: 60px;
  height: 25px;
}
h1 {
  font-family: "Major Mono Display", monospace;
  font-size: 3rem;
}
.App {
  padding: 20px;
  text-align: center;
  font-family: "Overpass Mono", monospace;
  background-color: black;
  color: rgb(255, 255, 255);
  height: 100%;
}
.moviesearch {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgb(0, 0, 0);
  padding: 20px;
}

.movies {
  margin: auto;
  max-width: 1100px;
  background-color: rgb(0, 0, 0);
  color: white;
}

.movies_wrapper {
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  background-color: black;
}

.movie_item {
  background-color: rgb(0, 0, 0);
  width: 100%;
  
}
.poster {
  width: 90%;
  cursor: pointer;
}

a {
  color: white;
}

.onemovie {
  display: inline-block;
  padding: 0.4em 2em;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Overpass Mono", monospace;
  font-size: 1rem;
  color: #000000;
  text-align: center;
  transition: all 0.15s;
  cursor: pointer;
}

.onemovie :hover {
  color: rgb(236, 73, 24);
  font-size: 18px;
}

.modal {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.753);
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 0;
}

.inner-modal {
  text-align: left;
  background-color: rgb(255, 255, 255);
  color: black;
  max-width: 60%;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  padding: 40px;
}

.modal-poster {
  float: right;
  width: 30%;
  padding: 20px 0px 20px 30px;
}

/*knappen i modal */
.onemovie2 {
  display: inline-block;
  padding: 0.4em 2em;
  border: 0.14em solid #000000;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Overpass Mono", monospace;
  font-size: 14px;
  color: #000000;
  text-align: center;
  transition: all 0.15s;
  cursor: pointer;
}


`
