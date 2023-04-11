import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'; // assuming you have imported and configured supabaseClient

const EditCrewmate = ({ data }) => {

    const { id } = useParams();
    const [crewmate, setCrewmate] = useState({ name: '', color: '', role: '' });

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
    }, [id]);

    const deleteCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmate')
            .delete()
            .eq('id', id);

        window.location = "http://localhost:3000/";
    }

    const updateCrewmate = async (event) => {
        event.preventDefault();

        await supabase
        .from('crewmate')
        .update({ name: crewmate.name, color: crewmate.color,  role: crewmate.role})
        .eq('id', id);

        window.location = "/";
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmate(prevCrewmate => ({ ...prevCrewmate, [name]: value }));
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="color">Color</label><br />
                <input type="text" id="color" name="color" value={crewmate.color} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="role">Role</label><br />
                <textarea rows="5" cols="50" id="role" name="role" value={crewmate.role} onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={updateCrewmate}/>
                <button className='deleteButton' onClick={deleteCrewmate}> Delete </button>
            </form>
        </div>
    )
}

export default EditCrewmate;