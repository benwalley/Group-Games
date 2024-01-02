import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Global/Header";
import Footer from "./Global/Footer";
import {theme} from "../theme";
import {ThemeProvider} from "@mui/material";



const ContainerStyles = {
    display: 'grid',
    gridTemplateRows: '60px 1fr 60px',
    minHeight: '100dvh',
}

export default function RootContainer(props) {
    const {} = props

    return (
        <ThemeProvider theme={theme}>
            <div style={ContainerStyles}>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}

