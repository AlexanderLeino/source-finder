import React from 'react'
import styled from 'styled-components'

function SkillsButton({name, onButtonClick}) {
  const SkillButton = styled.button`
    border-radius: 25px;
    background-color: purple;
    font-weight: 600;
    margin: .5rem;
    border: 2px solid black; 
    min-width: max-content;
    font-size: 13px;
    padding: .75rem;
  `
  return (<>
    <SkillButton onClick={onButtonClick}
    value={name}> {name} + </SkillButton>
    
    </>
  )
}


export default SkillsButton