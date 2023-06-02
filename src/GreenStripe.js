import React from 'react'
import './GreenStripe.scss'

const PERSON_KEY = 'PersonKey'

export const GreenStripe = () => {
    const onHandleWrite = () => {
           const person = {
            firstName: "Alice",
            age: 11
        }
        localStorage.setItem(PERSON_KEY, JSON.stringify(person))
        sessionStorage.setItem(PERSON_KEY, JSON.stringify(person))
    }
    const onHandleRead = () => {
        const p = JSON.parse(localStorage.getItem(PERSON_KEY))
        const r = JSON.parse(sessionStorage.getItem(PERSON_KEY))
        console.log(p,r)
    }
    return (
        <div className='GreenStripe'>
            <button onClick={()=> onHandleWrite()}>Write</button>
            <button onClick={()=> onHandleRead()}>Read</button>
        </div>
    )
}