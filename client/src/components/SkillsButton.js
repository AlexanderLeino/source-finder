import React from 'react'
import styled from 'styled-components'
import '../App.css'

function SkillsButton({name, onButtonClick}) {
  const SkillButton = styled.button`
    border-radius: 25px;
    background-color: pink;
    font-weight: 600;
    margin: .5rem;
    border: 3px solid purple; 
    min-width: max-content;
    font-size: 13px;
    padding: .75rem;

    &:active {
      background-color: purple;
      color: white
    }
  `
  return (<>
    <SkillButton className='active' onClick={onButtonClick}
    value={name}> {name} + </SkillButton>
    
    </>
  )
}


export default SkillsButton