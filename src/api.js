import axios from 'axios';

export const getUser = async () => {
 try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = await response.data;
    return data
 }
 catch(error){
     console.log("error",error)
 }
}