import React from 'react'
import styled from 'styled-components'
import { CgUndo } from 'react-icons/cg'

function Dialog({onUndoClick, undoButtonVisibility}) {
    console.log(undoButtonVisibility)

    const Container = styled.div`
        display: ${() => undoButtonVisibility ? "flex" : "none"};
        justify-content: flex-end;
        margin-bottom: 1rem;
    `

    const Box = styled.div`
        background-color: pink;
        border: 3px solid purple;
        width: 150px;
        height: 50px;
        border-radius: 25px;
        display:flex;
        justify-content: center;
        align-items: center;
    `
    const Text = styled.div`
        color: black;
        font-weight: 600px;
        font-size: 1.25rem;

    `
    

  return (
    <Container>
        <Box onClick={onUndoClick}>
            <CgUndo style={{fontSize: '25px', color: 'black'}}/>
            <Text>Undo</Text>
        </Box>
    </Container>
  )
}

export default Dialog