import React from 'react'
import { AppBar, Toolbar, Typography, Box, Avatar, TextField } from '@mui/material'
import { FormControlLabel, FormControl, RadioGroup, Button, Radio } from '@mui/material'
import { Stack } from '@mui/material'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { Link } from 'react-router-dom'
import Logo from './../assets/LogoHexx.png'

function LoginUI() {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
                <Toolbar>
                    <Link>
                        <VideogameAssetIcon sx={{ color: 'white', fontSize: '30px', ml: '10px', mt: '8px' }} />
                    </Link>
                    <Typography sx={{ color: 'white', ml: '10px', flexGrow: 1 }}>
                        Pixel Site
                    </Typography>
                    <Typography sx={{ mr: '10px', textDecoration: 'none', color: 'white' }} component={Link} to='/login'>Login</Typography>
                    <Typography sx={{ mr: '10px', textDecoration: 'none', color: 'white' }} component={Link} to={'/contact'} >Contact</Typography>
                    <Typography sx={{ textDecoration: 'none', color: 'white' }} component={Link} to={'/AboutUI'}>About</Typography>
                </Toolbar>
            </AppBar >

            <Box sx={{ width: '70%', mx: 'auto', mt: '30px', boxShadow: '3', px: '20px', pt: '20px', pb: '40px' }}>
                <Avatar src={Logo} sx={{ mx: 'auto', mt: '30px', width: '150px', height: '150px' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'Bold', color: '#000000', mb: '20px', my: '10px' }}>
                    Welcome To Syndicate
                </Typography>
                <Typography sx={{ fontSize: '20px', ml: '10px', my: '10px' }}>
                    Username
                </Typography>
                <TextField size="small" fullWidth ></TextField>
                <Typography sx={{ fontSize: '20px', ml: '10px', marginY: '10px' }}>
                    Password
                </Typography>
                <TextField size="small" fullWidth type='password'></TextField>
                <FormControl sx={{ display: 'block', mt: '20px' }}>
                    {/* Display : Flex ให้ลอยตัว */}
                    <RadioGroup
                        row sx={{ display: 'flex', justifyContent: 'center' }}
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Player" />
                        <FormControlLabel value="male" control={<Radio />} label="Game Master" />
                        <FormControlLabel value="other" control={<Radio />} label="Reviewer" />
                    </RadioGroup>
                </FormControl>
                <Button component={Link} to={'/login'} variant="contained" sx={{ display: 'block', textAlign: 'center', mt: '20px', backgroundColor: '#000000' }}>
                    Login
                </Button>
                {/* Stack ให้มี content หลาย */}
                <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
                    <Typography sx={{ fontSize: '16px', color: 'red' }}>
                        Forgot Password?
                    </Typography><Typography sx={{ fontSize: '16px', ml: '10px' }}>
                        Sign up
                    </Typography>
                </Stack>

            </Box >
        </>
    )
}

export default LoginUI