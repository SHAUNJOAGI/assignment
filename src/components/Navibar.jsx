import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navibar = () => {
  return (
    <div tyle={{padding:'2px',margin:'80px'}}>

        <AppBar>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }} > BLOG </Typography>
                <Button variant ='text' >
                  < Link to={'/house'}style={{textDecoration:'none',color:'white'}}>Home</Link>
                </Button>
                <Button variant ='text'>
                  <Link to={'/plus'}style={{textDecoration:'none',color:'white'}}>AddBlogs</Link>
                </Button>
            </Toolbar>
        </AppBar>
    




    </div>
  )
}

export default Navibar