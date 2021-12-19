import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';


const Container = styled.div`
display: grid;
grid-template-columns: auto auto auto;
margin-top:40px;
`;

export default function Home(results) {
  const intialState = results;
  const [characters, setCharacters] = useState(intialState.characters);
  // console.log(characters);
  return (
    <Container>
      {
        characters?.map(character =>
          <Card key={character.id} character={character} />
          )
       }
    </Container>
  )
}


export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        characters(page: 1) {
          info {
            count
            pages
          }
          results {
            name
            id
            location {
              name
              id
            }
            image
            origin {
              name
              id
            }
            episode {
              id
              episode
              air_date
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      characters: data.characters.results,
    },
  };
}
