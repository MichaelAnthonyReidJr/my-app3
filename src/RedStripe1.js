import React, { useState } from 'react';
import './RedStripe1.scss'

export const RedStripe1 = () => {
    let [fullName, setFullName] = useState('');
    
    const url = `https://jsonplaceholder.typicode.com/users/2`;

    const onHandlePush = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setFullName(data.name);

            console.log(`Data fetched from API: ${JSON.stringify(data.name)}`);
        
        }catch(error){
            console.log(`Error fetching user data: ${error}`)
        }
    }
    return (
        <div className = "RedStripe1">
            <button onClick = {onHandlePush}>Get Name</button>
            Name: { fullName } 
        </div>
    )
}


