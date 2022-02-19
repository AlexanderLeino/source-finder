import React from 'react'
import {Button} from '@mui/material'
import { BsPlus } from 'react-icons/bs'

function SkillsButton({name}) {
  const localStorage = window.localStorage
  let wasPressed = false

  for (let i = 0; i < 10; i++){
    if (localStorage.getItem('tech' + i) != null){
      if (localStorage.getItem('tech' + i) === name){
        wasPressed = true
        break
      }
    }
  }
  const Pressed = (e) => {
    if (e.target.style.background == 'purple'){
      e.target.style.background = 'blue'
      for (let i =0; i < 10; i++) {
        if (localStorage.getItem('tech' + i) != null){
          console.log(localStorage.getItem('tech' + i))
        }
        else{
          localStorage.setItem('tech' + i, name)
          break
        }
      }
    }
    else{
      e.target.style.background = 'purple'
      for (let i = 0; i < 10; i++){
        if (localStorage.getItem('tech' + i) == name){
          localStorage.removeItem('tech' + i)
          break
        }
      }
    }
  }
  return (
    //{wasPressed ? () : ()}
    <Button variant="contained" endIcon={<BsPlus style={{fontWeight:'bold'}} />} style={{borderRadius:'25px', background:'purple', fontWeight:'bold', width:'33%', margin:'.5rem',  border:'1px solid black', maxWidth:'min-content', minWidth:'min-content'}}
    onClick={Pressed}>
  {name}
</Button>
  )
}

export default SkillsButton