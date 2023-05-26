import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
   <TextField variant='outlined' color='secondary'  label='BLOGNAME'  />
   <br/>
   <TextField variant='standard'  color ='secondary' label='DESCRIPTION' />
    <br/>
    <TextField variant='standard'  color ='secondary' label='AUTHORNAME' />
    <br/>
    <br/>
    <br/>
    <Button variant='contained' >submit</Button>

    </div>
  )
}

export default Add