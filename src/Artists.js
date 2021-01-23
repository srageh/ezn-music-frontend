import React, {useState, useEffect} from 'react';




function Artists({token}){

    const [tracks, setTracks] = useState([]);

    useEffect(()=>{
        fetch('https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10&offset=5',{
            method: 'GET',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token

            } 
        }).then(resp=>resp.json())
        .then(tracks=> {setTracks(tracks.items); })
    
    },[])



    return (
        <div className="main-container">
            <div style={{marginTop:"3em"}}>
            <h2>Top Tracks</h2>
            {tracks.map((track,key)=>
                <div key={key +1} style={{display:"flex", margin:"30px"}}>
                    <p style={{margin:"4% 1% 4% -1%", fontWeight:"bold"}}>{key+1}</p>
                    <img alt="artist banner" className="artist-image" src={track.album.images[1].url}></img>
                    
                    <div style={{margin:"3% 3% 3% 1%"}}>    
                    <h3 >{track.name}</h3>
                    <p >{track.artists[0].name}</p>
                    </div>
                    
                    
                </div>
                
            )}
            </div>
        </div>
    )
}

export default Artists;
