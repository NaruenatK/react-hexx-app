import React from 'react'
import { Box, Typography, Avatar, Button } from '@mui/material'
// import Box from '@mui/material'
// import Typography from '@mui/material/Typography'
// import Avatar from '@mui/material'
import Logo from './../assets/LogoHexx.png'
import { Link } from 'react-router-dom'




function HomeUI() {
    return (
        <>
            {/* sx ใช้กับ mui ในการแต่ง style */}
            <Box sx={{ display: 'flex', height: '100vh' }}>
                <Box sx={{ width: '800px', boxShadow: '2', mx: 'auto', my: 'auto' }}>
                    <Avatar src={Logo} sx={{ mx: 'auto', mt: '30px', width: '150px', height: '150px' }} />

                    <Typography variant='h4' sx={{ fontWeight: 'bold', color: '#000000', textAlign: 'center' }}>
                        Welcome To Syndicate
                    </Typography>

                    <Typography sx={{ fontSize: '30px', fontWeight: 'Bold', color: '#000000', textAlign: 'center', mb: '20px' }}>
                        Pixel Site
                    </Typography>

                    <Button component={Link} to={'/login'} variant="contained" sx={{ mb: '30px', display: 'block', mx: 'auto', width: '200px', textAlign: 'center', backgroundColor: '#000000' }}>
                        Login Page
                    </Button>

                </Box>
            </Box>
        </>
    )
}

export default HomeUI