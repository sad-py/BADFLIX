import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Forca from './components/Forca/';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import CadastroVideo from './pages/cadastro/video';

import CadastroCategoria from './pages/cadastro/categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
    <Route component={Forca}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

