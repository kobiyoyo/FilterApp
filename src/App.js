import React, { useEffect, useState } from "react";
import axios from 'axios';
import DataTable from './components/DataTable';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      getUser()
    },
    [data]);
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

  console.log(data);
  return (
   
    <div className="App">
       <DataTable data={data} />
      <h1>Sweetie</h1>
      {data.map((user)=>(
        <h1>{user.name}</h1>
      ))}
    </div>
  );
};

export default App;
