import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={`
        Faala dev!
        Você já usou alguma lib de animação no React.js?

        Nesse vídeo eu, Guilherme Rodz, reproduzi o menu animado Stripe explicando sua complexidade, do zero!

        Bora assistir?
        Vaaleu! 💜
        `}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]} />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]} />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]} />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]} />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]} />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]} />

      <Footer />
    </div>
  );
}

export default Home;
