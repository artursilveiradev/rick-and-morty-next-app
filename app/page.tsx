import Image from "next/image";

const characters = [
  {
    id: "1",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
    species: "Human",
    gender: "Male",
    location: {
      name: "Citadel of Ricks",
    },
    episode: [
      {
        id: "1",
      },
      {
        id: "2",
      },
      {
        id: "3",
      },
      {
        id: "4",
      },
      {
        id: "5",
      },
      {
        id: "6",
      },
      {
        id: "7",
      },
      {
        id: "8",
      },
      {
        id: "9",
      },
      {
        id: "10",
      },
      {
        id: "11",
      },
      {
        id: "12",
      },
      {
        id: "13",
      },
      {
        id: "14",
      },
      {
        id: "15",
      },
      {
        id: "16",
      },
      {
        id: "17",
      },
      {
        id: "18",
      },
      {
        id: "19",
      },
      {
        id: "20",
      },
      {
        id: "21",
      },
      {
        id: "22",
      },
      {
        id: "23",
      },
      {
        id: "24",
      },
      {
        id: "25",
      },
      {
        id: "26",
      },
      {
        id: "27",
      },
      {
        id: "28",
      },
      {
        id: "29",
      },
      {
        id: "30",
      },
      {
        id: "31",
      },
      {
        id: "32",
      },
      {
        id: "33",
      },
      {
        id: "34",
      },
      {
        id: "35",
      },
      {
        id: "36",
      },
      {
        id: "37",
      },
      {
        id: "38",
      },
      {
        id: "39",
      },
      {
        id: "40",
      },
      {
        id: "41",
      },
      {
        id: "42",
      },
      {
        id: "43",
      },
      {
        id: "44",
      },
      {
        id: "45",
      },
      {
        id: "46",
      },
      {
        id: "47",
      },
      {
        id: "48",
      },
      {
        id: "49",
      },
      {
        id: "50",
      },
      {
        id: "51",
      },
    ],
    status: "Alive",
  },
  {
    id: "2",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    location: {
      name: "Citadel of Ricks",
    },
    episode: [
      {
        id: "1",
      },
      {
        id: "2",
      },
      {
        id: "3",
      },
      {
        id: "4",
      },
      {
        id: "5",
      },
      {
        id: "6",
      },
      {
        id: "7",
      },
      {
        id: "8",
      },
      {
        id: "9",
      },
      {
        id: "10",
      },
      {
        id: "11",
      },
      {
        id: "12",
      },
      {
        id: "13",
      },
      {
        id: "14",
      },
      {
        id: "15",
      },
      {
        id: "16",
      },
      {
        id: "17",
      },
      {
        id: "18",
      },
      {
        id: "19",
      },
      {
        id: "20",
      },
      {
        id: "21",
      },
      {
        id: "22",
      },
      {
        id: "23",
      },
      {
        id: "24",
      },
      {
        id: "25",
      },
      {
        id: "26",
      },
      {
        id: "27",
      },
      {
        id: "28",
      },
      {
        id: "29",
      },
      {
        id: "30",
      },
      {
        id: "31",
      },
      {
        id: "32",
      },
      {
        id: "33",
      },
      {
        id: "34",
      },
      {
        id: "35",
      },
      {
        id: "36",
      },
      {
        id: "37",
      },
      {
        id: "38",
      },
      {
        id: "39",
      },
      {
        id: "40",
      },
      {
        id: "41",
      },
      {
        id: "42",
      },
      {
        id: "43",
      },
      {
        id: "44",
      },
      {
        id: "45",
      },
      {
        id: "46",
      },
      {
        id: "47",
      },
      {
        id: "48",
      },
      {
        id: "49",
      },
      {
        id: "50",
      },
      {
        id: "51",
      },
    ],
    status: "Alive",
  },
  {
    id: "3",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    name: "Summer Smith",
    species: "Human",
    gender: "Female",
    location: {
      name: "Earth (Replacement Dimension)",
    },
    episode: [
      {
        id: "6",
      },
      {
        id: "7",
      },
      {
        id: "8",
      },
      {
        id: "9",
      },
      {
        id: "10",
      },
      {
        id: "11",
      },
      {
        id: "12",
      },
      {
        id: "14",
      },
      {
        id: "15",
      },
      {
        id: "16",
      },
      {
        id: "17",
      },
      {
        id: "18",
      },
      {
        id: "19",
      },
      {
        id: "20",
      },
      {
        id: "21",
      },
      {
        id: "22",
      },
      {
        id: "23",
      },
      {
        id: "24",
      },
      {
        id: "25",
      },
      {
        id: "26",
      },
      {
        id: "27",
      },
      {
        id: "29",
      },
      {
        id: "30",
      },
      {
        id: "31",
      },
      {
        id: "32",
      },
      {
        id: "33",
      },
      {
        id: "34",
      },
      {
        id: "35",
      },
      {
        id: "36",
      },
      {
        id: "38",
      },
      {
        id: "39",
      },
      {
        id: "40",
      },
      {
        id: "41",
      },
      {
        id: "42",
      },
      {
        id: "43",
      },
      {
        id: "44",
      },
      {
        id: "45",
      },
      {
        id: "46",
      },
      {
        id: "47",
      },
      {
        id: "48",
      },
      {
        id: "49",
      },
      {
        id: "51",
      },
    ],
    status: "Alive",
  },
  {
    id: "4",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    name: "Beth Smith",
    species: "Human",
    gender: "Female",
    location: {
      name: "Earth (Replacement Dimension)",
    },
    episode: [
      {
        id: "6",
      },
      {
        id: "7",
      },
      {
        id: "8",
      },
      {
        id: "9",
      },
      {
        id: "10",
      },
      {
        id: "11",
      },
      {
        id: "12",
      },
      {
        id: "14",
      },
      {
        id: "15",
      },
      {
        id: "16",
      },
      {
        id: "18",
      },
      {
        id: "19",
      },
      {
        id: "20",
      },
      {
        id: "21",
      },
      {
        id: "22",
      },
      {
        id: "23",
      },
      {
        id: "24",
      },
      {
        id: "25",
      },
      {
        id: "26",
      },
      {
        id: "27",
      },
      {
        id: "28",
      },
      {
        id: "29",
      },
      {
        id: "30",
      },
      {
        id: "31",
      },
      {
        id: "32",
      },
      {
        id: "33",
      },
      {
        id: "34",
      },
      {
        id: "35",
      },
      {
        id: "36",
      },
      {
        id: "38",
      },
      {
        id: "39",
      },
      {
        id: "40",
      },
      {
        id: "41",
      },
      {
        id: "42",
      },
      {
        id: "43",
      },
      {
        id: "44",
      },
      {
        id: "45",
      },
      {
        id: "46",
      },
      {
        id: "47",
      },
      {
        id: "48",
      },
      {
        id: "49",
      },
      {
        id: "51",
      },
    ],
    status: "Alive",
  },
];

export default function Home() {
  return (
    <>
      <header className="mb-8 py-6">
        <h1 className="text-center font-orbitron text-3xl font-bold text-neon-green">
          Rick and Morty characters
        </h1>
      </header>
      <main className="container mx-auto max-w-5xl flex-1">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {characters.map((character) => (
            <div
              key={character.id}
              className="flex max-w-lg overflow-hidden rounded-lg bg-gray shadow-lg"
            >
              <div className="w-1/3">
                <Image
                  src={character.image}
                  alt={character.name}
                  height={200}
                  width={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex w-2/3 flex-col justify-between p-4">
                <h2 className="mb-2 font-bungee text-xl">{character.name}</h2>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Species:</span>
                  <span>{character.species}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Gender:</span>
                  <span>{character.gender}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Location:</span>
                  <span>{character.location.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Episode count:</span>
                  <span>{character.episode.length}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Status:</span>
                  <span>{character.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="mt-8 py-6">
        <p className="text-center font-vt323">Made by artursilveiradev_</p>
      </footer>
    </>
  );
}
