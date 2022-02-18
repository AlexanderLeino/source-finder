import React from 'react'
import {Button} from '@mui/material'
import { BsPlus } from 'react-icons/bs'

function SkillsButton({name}) {
    console.log(name)
  return (
    <Button variant="contained" endIcon={<BsPlus style={{fontWeight:'bold'}} />} style={{borderRadius:'25px', background:'purple', fontWeight:'bold', width:'33%', margin:'.5rem', background: "purple", border:'1px solid black', maxWidth:'min-content'}}>
  {name}
</Button>
  )
}

export default SkillsButton