import React, { useState } from "react";
import styled from "styled-components";


const FilterContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;


const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: calc(50% - 20px);
  box-sizing: border-box;
`;


const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #2980b9;
  }
`;


function Filter({ onFilter }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleFilter = () => {
    onFilter({ title, rating });
  };


  return (
    <FilterContainer>
      <Input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <Button onClick={handleFilter}>Filter</Button>
    </FilterContainer>
  );
}


export default Filter;
