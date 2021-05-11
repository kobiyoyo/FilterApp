import React, { useEffect, useState } from "react";
import axios from 'axios';
import DataTable from './components/DataTable';
import 'rsuite/dist/styles/rsuite-default.css';
import classes from './styles/App.module.css';

const App = () => {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState("");
  useEffect(() => {
      getUser()
    },
    []);
    const getUser = async () => {
      try{
         const response = await axios.get('https://jsonplaceholder.typicode.com/users')
         const data = await response.data;
         setData(data)
      }
      catch(error){
          console.log("error",error)
      }
     }

  const setInput = (setter) => (event) =>{
    setter(event.currentTarget.value)
  }
  const filteredData = (items) => {
    return items.filter((item)=> 
    search === "" ||
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.username.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) 
    )
  }
  console.log(filteredData(data));
  return (
   
    <div>
      <div className={classes.InputWrapper}>
      <input placeholder="Search" onChange={setInput(setSearch)} value={search} />
      </div>
       <DataTable data={filteredData(data)} />
    </div>
  );
};

export default App;
