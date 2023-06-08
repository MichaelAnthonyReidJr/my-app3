import React, { useState } from 'react'
import './YellowStripe1.scss'

export const YellowStripe1 = () => {
    let [emailAddress, setEmailAddress] = useState("")
    
    const url = `https://jsonplaceholder.typicode.com/users/2`;

    const onHandlePush = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            setEmailAddress(data.email);

            console.log(`Data fetched from API: ${JSON.stringify(data.email)}`)
        }catch(error){
            console.log(`Error:  ${error}`)
        }
    }

  return (
    <div className = "YellowStripe1">
        <button onClick = { onHandlePush }> Get Email </button>
        Email address: { emailAddress }
    </div>
  )
}