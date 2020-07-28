import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video'

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
      <Route path="/" exact component={App} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  , document.getElementById('root')
);
