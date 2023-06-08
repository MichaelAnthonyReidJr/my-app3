import React, { useState } from 'react'
import './BlueStripe1.scss'

export const BlueStripe1 = () => {
  let [userName, setUserName] = useState("");
  
  const url = `https://jsonplaceholder.typicode.com/users/2`;
  
  const onHandlePush = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserName(data.username);
      
      console.log(`Data fetched from API: ${JSON.stringify(data.username)}`)
    

    } catch(error){
      console.log(`Error fetching user data: ${error}`)
    }
  }  
  return (
    <div className = "BlueStripe1">
      <button onClick = {onHandlePush} > Get UserName </button>
      Username: { userName }
    </div>
  );
}
