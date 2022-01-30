import './Home.css';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import Button from '@mui/material/Button';
import {useNavigate, Navigate} from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
  const searchButton = (e) => {
    dorms.map(dormms => {
      console.log(dormms.name);
      console.log(value);
      if (dormms.name === value)
      var object = {};
      object.name = dormms.name;
      object.coordinates = dormms.coordinates;
      object._id = dormms._id;
      object.college = dormms.college
      setSearchEnter(object);
      navigate('/DormInfo', {state: object});
      return object;
    })
  }


  const [value, setValue] = useState("");
  const [searchEnter, setSearchEnter] = useState();
  
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
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      disablePortal
      id="autocompleteSearch"
      options={dorms.map((dormss) => ( dormss.name))}
      sx={{ width: 300 }}
      renderInput={(params) =>
        <TextField {...params} label="Search"
        />
        }/>
      <div>
          <Button
            variant = "contained"
            onClick={searchButton}
          >
            Search
        </Button>
      </div>
      </div>
      <div className="FrontPageTitle">
        Welcome to RateMyDorm!
      </div>
    </div>
  );
}


export default Home;
