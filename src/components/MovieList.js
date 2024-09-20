import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";


const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
`;


function MovieList({ movies }) {
  return (
    <List>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </List>
  );
}


export default MovieList;
