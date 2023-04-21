import React from "react";
import { useQuery, gql } from "@apollo/client";
import CharactersCard from "./charactersCard";
import { Wrapper } from "./style";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        image
        status
        name
        species
        gender
        created
      }
    }
  }
`;

const Characters = () => {
  const { error, data } = useQuery(GET_CHARACTERS);
  console.log("data", data);
  if (error) return <p>Error :{error.message}</p>;

  return (
    <>
      <Wrapper>
        {data?.characters?.results?.map((props) => (
          <CharactersCard {...props} />
        ))}
      </Wrapper>
    </>
  );
};

export default Characters;
