import React from "react";
import styled from "styled-components";


const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 250px;
  text-align: center;
`;


const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;


const Title = styled.h2`
  font-size: 1.5rem;
  margin: 8px 0;
`;


const Description = styled.p`
  font-size: 1rem;
  color: #555;
`;


const Rating = styled.p`
  font-size: 1rem;
  color: #f39c12;
`;


function MovieCard({ movie }) {
  return (
    <Card>
      <Image src={movie.posterURL} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Description>{movie.description}</Description>
      <Rating>Rating: {movie.rating}</Rating>
    </Card>
  );
}


export default MovieCard;
