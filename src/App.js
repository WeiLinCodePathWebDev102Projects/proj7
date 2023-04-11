import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadCrewmate from './pages/ReadPosts'
import CreateCrewmate from './pages/CreatePost'
import EditCrewmate from './pages/EditPost'
import CrewProfile from './pages/postProfile';
import { Link } from 'react-router-dom'
import { supabase } from './client'

import amongusLogo from './amongusLogo.jpeg';


const App = () => {

  const [crewmate, setCrewmate] = useState([]);

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadCrewmate data={crewmate}/>
    },
    {
      path:"profile/:id/edit/:id",
      element: <EditCrewmate data={crewmate} />
    },
    {
      path:"/new",
      element: <CreateCrewmate />
    },
    {
      path:"/profile/:id",
      element: <CrewProfile data={crewmate}/>
    }
  ]);

  useEffect(() => {
    fetchPosts(); // Call fetchData on component mount
    console.log(crewmate)
  }, []);


  // Define async function fetchData
  const fetchPosts = async () => {
    const {data} = await supabase
    .from('crewmate')
    .select();
  
    // set state of posts
    setCrewmate(data)
  
  }
  return ( 

    <div className="App">

      <div className="header">
        <h1>  Crewmate Gallery </h1>
        <img className='logo' src={amongusLogo}/>
        <br></br>
        <Link to="/"><button className="headerBtn"> View Crewmates 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Create A Crewmate 🏆 </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
