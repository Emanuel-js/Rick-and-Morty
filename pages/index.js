import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState,useEffect,useContext} from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div`
display: grid;
grid-template-columns: auto auto auto;
margin-top:40px;
`;
export default function Home() {

  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async() => {
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
                species
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
      setCharacters(data.characters.results);
      setLoading(false);
    }
    getData();
  })
  if (loading) {
    return <div className="lds-hourglass"></div>
  }

  return (
    <Container>
      {
        characters?.map(character =>
          <Card key={character.id}  character={character} />
          )
       }
    </Container>
  )
}

// export async function getServerSideProps() {
//   const client = new ApolloClient({
//     uri: "https://rickandmortyapi.com/graphql/",
//     cache: new InMemoryCache(),
//   });
//   const { data } = await client.query({
//     query: gql`
//       query {
//         characters(page: 1) {
//           info {
//             count
//             pages
//           }
//           results {
//             name
//             id
//             location {
//               name
//               id
//             }
//             image
//             origin {
//               name
//               id
//             }
//             episode {
//               id
//               episode
//               air_date
//             }
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       characters: data.characters.results,
//     },
//   };
// }
