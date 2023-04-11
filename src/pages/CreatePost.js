import React, { useState } from 'react';
import './CreatePost.css'
import { supabase } from '../client'

const CreateCrewmate = () => {
    const [crewmate, setCrewmate] = useState({
        name: '',
        color: '',
        role: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmate({ ...crewmate, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmate')
            .insert({ name: crewmate.name, color: crewmate.color, role: crewmate.role });

        window.location = "/";
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={crewmate.title} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="color">Color</label><br />
                <input type="text" id="color" name="color" value={crewmate.color} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="role">Role</label><br />
                <textarea rows="5" cols="50" id="role" name="role" value={crewmate.role} onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateCrewmate;