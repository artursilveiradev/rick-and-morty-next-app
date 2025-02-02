"use client";

import { useQuery } from "@apollo/client";

import { gql } from "@/app/__generated__";
import { CharacterCard, Container, Footer, Header } from "@/app/components";

const GET_CHARACTERS = gql(`
  query GetCharacters {
    characters {
      results {
        id
        image
        name
        species
        gender
        location {
          name
        }
        episode {
          id
        }
        status
      }
    }
  }
`);

export default function Home() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return (
      <Container>
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <p className="text-lg font-bold">Loading ⏳</p>
        </div>
        <Footer />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <p className="text-lg font-bold">Something went wrong 😭</p>
        </div>
        <Footer />
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {data?.characters?.results?.map((character, index) => (
            <CharacterCard
              key={character?.id}
              index={index}
              image={character?.image}
              name={character?.name}
              species={character?.species}
              gender={character?.gender}
              locationName={character?.location?.name}
              episodeCount={character?.episode?.length}
              status={character?.status}
            />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
