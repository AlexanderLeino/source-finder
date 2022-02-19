import React from 'react'
import {Button} from '@mui/material'
import { BsPlus } from 'react-icons/bs'

function SkillsButton({name, detectClick}) {
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
    console.log(e.target)
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
   
    <Button 
    variant="contained" 
    endIcon={<BsPlus 
                    onChange={detectClick} 
                    style={{fontWeight:'bold', fontSize:'10px'}} 
            />} 
    style={{borderRadius:'25px', background:'purple', fontWeight:'bold', margin:'.5rem',  border:'1px solid black',  minWidth:'min-content', fontSize:'10px'}}
    onClick={detectClick}
    value={name}
    >{name}  
    </Button>
  )
}

export default SkillsButton