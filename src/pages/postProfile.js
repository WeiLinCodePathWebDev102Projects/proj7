import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import { Link } from 'react-router-dom'

import red from '../components/redAmongUs.png'
import purple from '../components/purpleAmongUs.jpeg'
import green from '../components/greenAmongUs.png'
import pink from '../components/pinkAmongUs.png'
import blue from '../components/blueAmongUs.png'

  

const CrewProfile = (props) => {

    const { id } = useParams();
    const [crewmate, setCrewmate] = useState({ name: '', color: '', role: '' });

//     var imgArr =[];
//   if (props.color === "pint"){
//     imgArr.push(pinkChar);
//   }
//   else if (props.color === "red"){
//     imgArr.push(redChar)
//   }
//   else if (props.color === "purple"){
//     imgArr.push(purpleChar)
//   }
//   else if (props.color === "green"){
//     imgArr.push(greenChar)
//   }
//   else if (props.color === "blue"){
//     imgArr.push(blueChar)
//   }

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data: postFromDB, error } = await supabase
                .from('crewmate')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching Crewmate:', error);
            } else {
                setCrewmate(postFromDB);
            }
        };

        fetchCrewmate();
        console.log(crewmate)
    }, [id]);
    

    return (
        <div className="profile">
            <h1> Profile </h1>
            <div className=''>
                <h2>
                   {crewmate.name} <br></br>
                </h2>
                {crewmate.color} <br></br>
                {crewmate.role} <br></br>

                <Link to={'edit/'+ id}> Edit </Link>
            </div>
                
            
        </div>  
    )
}

export default CrewProfile;