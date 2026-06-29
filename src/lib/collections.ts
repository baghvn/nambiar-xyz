export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Collection = {
  slug: string;
  title: string;
  year: string;
  location: string;
  description: string;
  coverImage: string;
  photos: Photo[];
};

export const collections: Collection[] = [
  {
    slug: "canton-chronicles-2025",
    title: "Canton Chronicles",
    year: "2025",
    location: "Guangzhou, China",
    description:
      "Street photography through the bustling lanes and neon-lit nights of Guangzhou — a city of contrasts, commerce, and quiet humanity.",
    coverImage: "/images/canton.jpg",
    photos: [
      {
        src: "/images/canton.jpg",
        alt: "Bokeh city lights, Canton",
        width: 750,
        height: 562,
      },
    ],
  },
  {
    slug: "cartell-track-attack-2023",
    title: "CarTell Track Attack Vol. I",
    year: "2023",
    location: "Malaysia",
    description:
      "On the grid, between corners, and in the pits — documenting the raw energy of track day motorsport.",
    coverImage: "/images/cartell.jpg",
    photos: [
      {
        src: "/images/cartell.jpg",
        alt: "Racing helmet on car bonnet",
        width: 750,
        height: 562,
      },
    ],
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
