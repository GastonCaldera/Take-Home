"use client";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import styles from '../../app/page.module.css';
import { Button, TextField, Box } from '@mui/material'
import { styled } from '@mui/material/styles';

const AOS = require("aos");

const CustomTextField = styled(TextField)({
    backgroundColor: 'white',
    borderRadius: '5px 0px 0px 5px',
    width: '100%',
    maxWidth: '600px',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: '5px 0px 0px 5px',
            borderColor: '#0dc06f',
        },
        '&:hover fieldset': {
            borderRadius: '5px 0px 0px 5px',
            border: '#0dc06f 2px solid',
        },
        '&.Mui-focused fieldset': {
            borderRadius: '5px 0px 0px 5px',
            borderColor: '#0dc06f',
        },
    },
});

export default function Search() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Box
            className={styles.search_box}
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos="fade-up"
        >
            <CustomTextField placeholder='https://github.com/owner/repo' size="small"></CustomTextField>
            <Button className={styles.search_button} size="small">Search</Button>
        </Box>
    )
}
