import React from 'react'
import {BrowserRouter as Router, Route,HashRouter} from 'react-router-dom';
import PokemonList from './components/PokemonList/PokemonList'
import PokeCardDetails from './components/PokeCardDetails/PokeCardDetails'
import Layout from './Layout/Layout'

function App() {

 !localStorage.language && localStorage.setItem("language","en")
  
  return (
    <HashRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
      <Layout>
        <Route exact path ={[["/"],"/list"]} component={PokemonList}/>  
        <Route exact path ="/pokemon/:NameOrID" component={PokeCardDetails}/>
      </Layout>
    </HashRouter>
  );
}

export default App;
