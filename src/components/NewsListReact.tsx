import React from 'react';

interface Plant {
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

interface NewsListProps {
  plants: Plant[];
}

const NewsListReact: React.FC<NewsListProps> = ({ plants }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">ニュース</h2>
        <div className="space-y-8">
          {plants.map((plant) => {
            const imageUrl = plant._embedded?.['wp:featuredmedia']
              ? plant._embedded['wp:featuredmedia'][0].source_url
              : '/path/to/default-image.jpg';
            return (
              <div className="flex items-start" key={plant.id}>
                <img src={imageUrl} alt="Plant Image" className="w-32 h-32 object-cover mr-4 rounded-lg" />
                <div>
                  <h3 className="text-lg font-semibold">{plant.title.rendered}</h3>
                  <p className="text-sm text-gray-600">{new Date(plant.date).toLocaleDateString()}</p>
                  <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: plant.excerpt.rendered }}></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsListReact;
