import React, {useEffect, useState} from 'react';
import {Box, Button} from "@mui/material";
import { useTheme } from '@mui/material/styles';


export default function Header(props) {
    const {} = props
    const theme = useTheme();



    const headerContainerStyles = {
        background: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const headerStyles = {
        margin: 0,
    }

    useEffect(() => {
        console.log(theme)
    }, [theme]);

    return (
        <div style={headerContainerStyles}>
            <h1 style={headerStyles}>Choose A Game</h1>
        </div>
    );
}

