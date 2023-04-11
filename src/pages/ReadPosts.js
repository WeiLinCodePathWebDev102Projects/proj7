import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadCrewmate = (props) => {

    const [crewmate, setCrewmate] = useState([]);

    useEffect(() => {
        setCrewmate(props.data);
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                crewmate && crewmate.length > 0 ?
                crewmate.map((crewmate,index) => 
                   <Card id={crewmate.id} name={crewmate.name} color={crewmate.color} role={crewmate.role}/>
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadCrewmate;