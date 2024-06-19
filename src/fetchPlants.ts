export interface Plant {
  id: number;
  title: {
    rendered: string;
  };
  date: string;
  excerpt: {
    rendered: string;
  };
  _embedded: {
    'wp:featuredmedia'?: [
      {
        source_url: string;
      }
    ];
  };
}

export async function fetchPlants(): Promise<Plant[]> {
  const response = await fetch('http://localhost/wp-biz/wp-json/wp/v2/plant?_embed');
  if (!response.ok) {
    throw new Error('Failed to fetch plants');
  }
  const plants = await response.json();
  return plants;
}
