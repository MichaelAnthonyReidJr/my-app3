import React, { useState } from 'react'
import './GreenStripe1.scss'

export const GreenStripe1 = () => {
    let [ streetAddress, setStreetAddress ] = useState('');
    let [ suiteName, setSuiteName ] = useState ('');
    let [ cityName, setCityName ] = useState ('');
    let [ zipCode, setZipCode] = useState('');

    const url = `https://jsonplaceholder.typicode.com/users/2`;

    const onHandlePush = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            setStreetAddress(data.address.street);
            setSuiteName(data.address?.suite);
            setCityName(data.address.city);
            setZipCode(data.address.zipcode);

            console.log(`Data fetched from API: ${ JSON.stringify(data.address) }`)
        
        }catch (error){
            console.log(`Error: ${error}`)
        }
    }
    return (
    <div className ='GreenStripe1'>
        <button onClick = { onHandlePush }> Get Residential Address</button>
        <br/>
        Street: { streetAddress }
        <br/>
        Suite: {suiteName}
        <br/>
        City: {cityName} 
        <br/>Zip: { zipCode }
    </div>
  )
}

export default GreenStripe1