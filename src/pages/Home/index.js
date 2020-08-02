import React, { useEffect, useState } from 'react';
import categoriesRepository from '../../repositories/category';

import Template from '../../components/Template';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoryWithVideo) => {
        setInitialData(categoryWithVideo);
      })
      .catch((err) => {
        // console.log(err.message);
      });
  }, []);

  return (
    <Template>

      {initialData.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      {initialData.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].videoDescription}
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            ignoreFirstVideo={false}
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </Template>
  );
}

export default Home;
