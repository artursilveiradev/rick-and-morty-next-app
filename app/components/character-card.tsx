import Image from "next/image";

type CharacterCardProps = {
  index?: number;
  image?: string | null;
  name?: string | null;
  species?: string | null;
  gender?: string | null;
  locationName?: string | null;
  episodeCount?: number;
  status?: string | null;
};

export default function CharacterCard(props: CharacterCardProps) {
  const {
    index,
    image,
    name,
    species,
    gender,
    locationName,
    episodeCount,
    status,
  } = props;

  return (
    <div className="flex max-w-lg overflow-hidden rounded-lg bg-gray shadow-lg">
      <div className="w-1/3">
        <Image
          src={image ? image : "https://placehold.co/200x200/png?text=No+Image"}
          alt={name ? name : "No Image"}
          height={200}
          width={200}
          className="h-full w-full object-cover"
          priority={!!(index && index < 12)}
        />
      </div>
      <div className="flex w-2/3 flex-col justify-between p-4">
        <h2 className="mb-2 font-bungee text-xl">{name}</h2>
        <div className="flex items-center gap-1">
          <span className="font-bold">Species:</span>
          <span>{species ? species : "unknown"}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-bold">Gender:</span>
          <span>{gender ? gender : "unknown"}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-bold">Location:</span>
          <span>{locationName ? locationName : "unknown"}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-bold">Episode count:</span>
          <span>{episodeCount ? episodeCount : "unknown"}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-bold">Status:</span>
          <span>{status ? status : "unknown"}</span>
        </div>
      </div>
    </div>
  );
}
