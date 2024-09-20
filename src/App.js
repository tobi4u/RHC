import React, { useState } from "react";
import styled from "styled-components";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";


const AppContainer = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #ecf0f1;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
`;


const Heading = styled.h1`
  color: #2c3e50;
  margin-bottom: 20px;
`;


const AddMovieButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #27ae60;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #1e8449;
  }
`;


function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      return (
        (title === "" ||
          movie.title.toLowerCase().includes(title.toLowerCase())) &&
        (rating === "" || movie.rating >= parseFloat(rating))
      );
    });
    setFilteredMovies(filtered);
  };


  return (
    <AppContainer>
      <Heading>Movie App</Heading>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <AddMovieButton
        onClick={() =>
          addMovie({
            title: "New Movie",
            description: "Description",
            posterURL: "URL",
            rating: 5,
          })
        }
      >
        Add Movie
      </AddMovieButton>
    </AppContainer>
  );
}


export default App;
