import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PokemonList from './components/PokemonList/PokemonList'
import PokeCardDetails from './components/PokeCardDetails/PokeCardDetails'
import Layout from './Layout/Layout'

function App() {

 !localStorage.language && localStorage.setItem("language","en")
  
  return (
    <Router basename={''}>
      <Layout>
        <Route exact path ={[["/"],"/list"]} component={PokemonList}/>  
        <Route exact path ="/pokemon/:NameOrID" component={PokeCardDetails}/>
      </Layout>
    </Router>
  );
}

export default App;
