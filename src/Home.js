

import React, {useState, useEffect} from 'react';



function Home({token}){
   // console.log(token);
    
    const [featured, setFeatured] = useState([]);
    const [newReleases, setNewReleases] = useState([]);
    const [isLoading, setLoading] = useState(true);
    //console.log(token)
  
    
    
    useEffect(()=>{
        //console.log("page renered")
        
            loadData();
        getNewReleases();
       
            
            
        
       //getFeatured();

    },[]);


  
        const loadData = ()=>{

        fetch('https://api.spotify.com/v1/me/top/artists?limit=10', {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }

        })
        .then(response=> 
            response.json()
             //console.log(response)
        ).then(artists=> 
            {
                //setData(artists.items)

                //console.log(artists.items[0].id)
                fetch(`https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=${artists.items[0].id}`, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + token
                    }
    
                }).then(response=> response.json())
                .then(featured=> {setFeatured(featured.tracks); setLoading(false)})
            }
        )
          

    }

    const getNewReleases = ()=>{
        fetch("https://api.spotify.com/v1/browse/new-releases?country=US&limit=6", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }

        }).then(response=> response.json())
        .then(newReleases=>  { setNewReleases(newReleases.albums.items)})
    }
    

    

    

    return(
        
        <div style={{border:"1px solid black"}} className="main-container">


{isLoading ? <h1>Loading..</h1> :
            <div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h2>Featured </h2>
                <p style={{float:"right", fontSize:"0.95em"}}>See All</p>
            </div>
            
            <div className="featured-container">
            {featured.map((feature, key)=>
                <div className="featured-content" key={key+1}>
                    <img src={feature.album.images[0].url} alt="featured track banner" />
                    <div style={{lineHeight:"1.6"}}>

                        <p className="artist-name">{feature.name}</p>
                        <p style={{fontSize:"0.8em"}}>{feature.artists[0].name}</p>
                    </div>
                </div>
            )} 
            </div>


        
            
            

            <div style={{marginTop:"1em"}}>
                <h2>New Releases</h2>
                <div  >
                    {newReleases.map((newRelease, key)=>
                        <div className="new-releases-container" key={key+1}>
                            <img className="release-image" alt="new releases banner" src={newRelease.images[2].url}/>
                            <p className="artist-name">{newRelease.name}</p>
                            <p>{newRelease.artists[0].name}</p>
                
                        </div>

                    )}

                    
                </div>
            </div>
            </div>
        
        
        }
            



        </div>
    )
}

export default Home;