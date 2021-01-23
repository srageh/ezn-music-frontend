import React, {useState,useEffect} from 'react';


function Profile({token}){

    const [prof, setProfile] = useState({display_name:'', total:0});
    


    useEffect(()=>{
        loadProfile();

    },[])


    const loadProfile = async ()=>{

        const response = await fetch('https://api.spotify.com/v1/me',{
            method: 'GET',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token

            } 

        }
        
        
        
        )
        const prof = await response.json();
        //console.log(prof);
        //total = prof.followers.total
        setProfile({display_name:prof.display_name,total:prof.followers.total});



    }







    return(
        <div className="profile-container">
            <div>
                {/* //{console.log(prof)} */}
                {/* <p>{prof.followers.total}</p> */}
                <p>{prof.total}</p>
                <p>{prof.display_name}</p>
            </div>
            
            
        </div>
    );

}

export default Profile;