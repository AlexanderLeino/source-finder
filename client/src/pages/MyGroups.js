import React, { useState, useEffect } from 'react'
import Auth from '../utils/auth'

import { useQuery } from '@apollo/client'
import {GET_ME} from '../utils/queries'
import { height, style } from '@mui/system'



function MyGroups () {
    const userData = Auth.getProfile()
    let hasGroup = false
    if (userData != null){
        console.log(userData)
        const {loading, data, error} = useQuery(GET_ME, {
            variables: {id: userData._id}
        })
        useEffect(() => {
            console.log(data)
            if (data != null){
                if (data.me.isAdmin === null){
                    hasGroup = false
                }
            }
            
        },[!loading])
        
    }

    const makeNewGroup = () => {
        window.location = '/makeGroup'
    }

    return(
        <>
            {hasGroup ? (
                <div>

                </div>
            ) : (
                <div>
                    <button onClick={makeNewGroup}>Create a new Group!</button>
                </div>
            )}
        </>
    )
}

export default MyGroups