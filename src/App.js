import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Menu from '@mui/material/Menu';
import './index.css';
import { createTheme } from '@mui/material/styles';

const pages = ["Home", "About", "Projects", "Contact"];

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#424b9b',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

function App() {

    return (
        <>

            <AppBar position="sticky" theme={theme}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', md: 'flex' } }}
                        >
                            Aras Sen
                        </Typography>
                        <Box
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', md: 'flex' } }}
                        >
                            {pages.map(page => (
                                <Button>
                                    Aras
                                </Button>
                            ))}
                        </Box>
                        <Menu></Menu>
                    </Toolbar>
                </Container>
            </AppBar>
            <Button variant="contained">Hello World</Button>
        </>
    );
}

export default App;