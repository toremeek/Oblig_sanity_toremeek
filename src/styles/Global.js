import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Major+Mono+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Major+Mono+Display&family=Overpass+Mono:wght@300&display=swap");
  body {
    margin: 0;
    padding: 0;
    background: black;
    color: white;
  }
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

`