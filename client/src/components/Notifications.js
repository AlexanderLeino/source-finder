import React, {useState, useEffect} from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';



import { useQuery } from '@apollo/client'

import {GET_MY_REQUESTS} from '../utils/queries'


function Notifications (adminId){
    const [theNotifications, settingTheNotifications] = useState([])
    
    const getNotifications = async (adminId) => {
        //console.log(admin)
        try{
          const myNotifications = await useQuery(GET_MY_REQUESTS, {
            variables:{
              requestOrigin: adminId.adminid
            }
          })
          if (myNotifications.data!= null) {

            settingTheNotifications(myNotifications.data.getMyRequests)
            console.log(theNotifications)
          }
        }
        catch(err){
          console.log(err)
        }
    }

      
    if (adminId != null) {
        getNotifications(adminId)
    }

    return (
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={theNotifications.length} color="error">
                <MailIcon />
              </Badge>
        </IconButton>
    )
}

export default Notifications