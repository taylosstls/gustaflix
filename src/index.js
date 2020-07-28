import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video'
import CadastroCategoria from './pages/Cadastro/Categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      Error 404: Página Não Encontrada
    </div>
  )
}

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  , document.getElementById('root')
);
