
import React, {useState,useEffect} from 'react';

import {Link} from "react-router-dom";

  


function Header(props){
    //console.log(token)
    

    const [playlists, setPlaylists] = useState([]);
    var id = window.location.pathname.split('/')

    
    

    useEffect(()=>{
        


        fetch('https://api.spotify.com/v1/me/playlists?limit=5&offset=5',{
               headers:{
                   "Accept": "application/json",
                   "Content-Type": "application/json",
                   "Authorization": 'Bearer ' + props.token
               }
            
           
           }).then(resp=> resp.json())
           .then(playlists => {setPlaylists(playlists.items); })

           if(id[2]!= undefined){
               savePlaylist(id[2]);
           }
           //console.log("render")
           

          
         
           
          
          
        
        
    
    },[])
    
    
   
    console.log(id[3])
    const savePlaylist = (id)=>{
        //setPlaylist(id)
     //setPlaylist(id);

     
     

        
        const getSongs = async () =>  {
        
        const response = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`,{
            method: 'GET',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token
    
            } 
        }
        
        
        
        )
        
        const playlistTracks = await response.json();
        
        props.setPlaylistTracks(playlistTracks.items.splice(0,10))
    }
    getSongs();
       
 

       // console.log()
       //console.log(id)
       
       //getPlaylistId(id);

    }

 

    return(
        <div className="nav-container">

            <nav>
                <Link to="/"> <h1>EZN Musik</h1></Link>
                {/* <p className="account"><i style={{fontSize:"1.7em", marginRight:"9px"}} class="fa fa-user-circle"></i>{profile}</p> */}
                <div className="nav-links">
                    <h4 style={{marginTop:"2em"}}>Browse Music</h4>
                    <ul>
                        
                        {/* <a href="#"><li>Browse</li></a> */}
                        <Link to="/tracks"><li><i class="fa fa-headphones icon"></i>Artists</li></Link>
                        
                        <Link to="/artists"><li><i class="fa fa-headphones icon"></i>Tracks</li></Link>
                    </ul>
                    
                </div>
                <div className="nav-links">
                    <h4 style={{marginTop:"2em"}}>Playlists</h4>
                    
                        {/* <a href="#"><li>Browse</li></a> */}
                        {playlists.map((playlist)=>
                            <ul>
                                
                                <Link to= {`/playlist/${playlist.id}`}>
                                    <li onClick={()=> savePlaylist(playlist.id)} >{playlist.name}</li>
                                </Link>

                            </ul>
                        )}
                 
                    
                </div>
            </nav>
           
         

        </div>
    )
}

export default Header;