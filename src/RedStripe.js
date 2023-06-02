import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { userNameAtom } from './atoms'
import './RedStripe.scss'

export const RedStripe = () => {
    let[email, setEmail]= useState("")
    let[userName, setUserName]=useRecoilState(userNameAtom)
    const url = 'https://jsonplaceholder.typicode.com/users/1' 
    const usersQuery= useQuery(`users/1`, async () => await axios.get(url), {
        refetchOnWindowFocus: false, 
        enabled: false
    })

    useEffect(() => {
        if (usersQuery.isFetched && userName === "") {
            setUserName(usersQuery.data.data.name)
            setEmail(usersQuery.data.data.email)
        }
    }, [userName,
        setEmail,
        setUserName, 
        usersQuery.isFetched,
        usersQuery.data?.data.name,
        usersQuery.data?.data.email])

        const onHandlePush = () => {
            usersQuery.refetch()
        }
    
    return (
        <div className="RedStripe">
            <button onClick= {() => onHandlePush()}>Get User</button>
            Username: { userName } { email }
        </div>
    )
}