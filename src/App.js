import React, {useState, useEffect} from 'react';


import './App.css';
import Header from './header';
import Home from './Home';
import Profile from './Profile';
import Tracks from './Tracks';
import Artists from './Artists'
import Playlist from './Playlist';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {
  
  const [playlistTracks, setPlaylistTracks] = useState([])


  //console.log(playlistTracks)






  var url = window.location;
   var  access_token= new URLSearchParams(url.search).get('access_token');
     //console.log(access_token)
    



  if(access_token != null){
    localStorage.setItem('token', access_token);
  }

  else{
    access_token =  localStorage.getItem('token');
    
  }
  


  






  return (
    <div className="App">
      
      

        <Router>
            <Header setPlaylistTracks={setPlaylistTracks}  token= {access_token} />

     
            <Switch> 
              <Route exact path="/"    >
                <Home token= {access_token}/>
              </Route>
              <Route exact path="/tracks"    >
                <Tracks token= {access_token}/>
              </Route>
              <Route exact path="/artists"    >
                <Artists token= {access_token}/>
              </Route>
            <Route exact path={`/playlist/:id`}   >
                <Playlist playlistTracks = {playlistTracks} token= {access_token}/>
              </Route>
            </Switch>
           
     
          <Profile token= {access_token} />
        </Router>
        
      
    </div>
  );
}

export default App;
