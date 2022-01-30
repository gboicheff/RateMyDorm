import './Home.css';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';


function Home() {
  const [value, setValue] = useState("");
  const [searchEnter, setSearchEnter] = useState("");
  
  const [dorms, setDorms] = useState([]);
  const [dormNames, setDormNames] = useState([]);
  const getDorms = () =>
  {
    axios.get("/api/all_dorms").then((response) => 
    {
      console.log(response.data);
      const myDorms = response.data;
      const myDormsName =  
      dorms.map((dormss) => (
         dormss.name
      ));
      console.log(myDormsName);
      setDormNames(myDormsName);
      setDorms(myDorms); 
    });
  };

  useEffect(() => getDorms(), []);

  return (
    <div>
      <div className="Home">
      <Autocomplete
      disablePortal
      id="autocompleteSearch"
      options={dorms.map((dormss) => ( dormss.name))}
      sx={{ width: 300 }}
      renderInput={(params) =>
        <TextField {...params} label="Search" onChange={(e) => setValue(e.target.value)}
      value={value} 
        />
        }/>
      <div>
      </div>
      </div>
      <div className="FrontPageTitle">
        Welcome to RateMyDorm!
      </div>
    </div>
  );
}


export default Home;
