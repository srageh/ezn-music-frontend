import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './App.css';

function Playlist(props) {
    //const [playlistTracks, setPlaylistTracks] = useState([])
    //console.log(props)
    //console.log(props)

//    var id = window.location.pathname.split('/')
//    console.log(id[2])


    return (
        <div className="main-container">
           
            <ul>
                {props.playlistTracks.map((playlistTrack, key)=>

                    <li style={{display:"flex",padding:"0.9em 0", borderTop:"1px solid grey",  alignItems:"center", fontSize:"1em", color:"black"}} key={key +1}><span style={{marginRight:"8px"}}>{key+1}</span><span><img style={{marginRight:"7px", borderRadius:"10px"}} src={playlistTrack.track.album.images[2].url} /></span>{playlistTrack.track.name}</li>
                
                )}
            </ul>
        </div>
    )
}

export default Playlist
