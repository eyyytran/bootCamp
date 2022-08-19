import React from 'react'
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material'

const NavbarLinks = () => {
    return (
        <div className='links'>
            <ButtonGroup>
                <Button variant='text' sx={{ fontSize: '18px' }} href='/'>
                    HOME
                </Button>
                <Button variant='text' sx={{ fontSize: '18px' }} href='/about'>
                    ABOUT
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default NavbarLinks
