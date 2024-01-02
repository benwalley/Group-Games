import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, Tab, Tabs} from "@mui/material";
import {Link, redirect} from "react-router-dom";

export default function GameChooserPage(props) {
    const {} = props
    const [selectedTab, setSelectedTab] = useState(1)

    const improvGames = [
        {
            name: 'Alphabet',
            url: 'play/alphabet',
            id: 'alphabet',
        },
        {
            name: 'Improv',
            url: 'play/improv',
            id: 'improv',
        },
        {
            name: 'Questions Only',
            url: 'play/questions-only',
            id: 'questions-only',
        },
    ]

    const guessingGames = [
        {
            name: 'Charades',
            url: 'play/charades',
            id: 'charades',
        },
        {
            name: 'Pictionary',
            url: 'play/pictionary',
            id: 'pictionary',
        },
        {
            name: 'Telephone',
            url: 'play/telephone',
            id: 'telephone',
        },
        {
            name: 'Papelitos',
            url: 'play/papelitos',
            id: 'papelitos',
        },
        {
            name: 'Taboo',
            url: 'play/taboo',
            id: 'taboo',
        },
    ]

    function handleChange(event, newValue) {
        setSelectedTab(newValue)
    }

    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={selectedTab} onChange={handleChange} aria-label="Game Types" centered={true} textColor={'secondary'} indicatorColor={'secondary'}>
                    <Tab label="Improv"/>
                    <Tab label="Guessing Games"/>
                </Tabs>
            </Box>
            {selectedTab === 0 && <Stack spacing={2} sx={{maxWidth: 400, margin: '20px auto'}}>
                {improvGames.map(item => {
                    return <Link to={item.url}>
                        <Button sx={{width: '100%'}} variant='contained' key={item.id} size={'large'}>{item.name}</Button>
                    </Link>

                })}
            </Stack>}
            {selectedTab === 1 && <Stack spacing={2} sx={{maxWidth: 400, margin: '20px auto'}}>
                {guessingGames.map(item => {
                    return <Link to={item.url}>
                        <Button sx={{width: '100%'}} variant='contained' key={item.id} size={'large'}>{item.name}</Button>
                    </Link>
                })}
            </Stack>}
        </div>
    );
}

