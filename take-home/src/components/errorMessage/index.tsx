"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { rajdhani } from '@/assets/fonts';

export default function ErrorMessage() {
    return (
        <Box sx={{ maxWidth: '725px', width: '100%', marginTop: '10px' }}>
            <Typography className={`${rajdhani}`} variant={"subtitle1"} style={{ textAlign: "center" }}>Something went wrong 😓.</Typography>
            <Typography className={`${rajdhani}`} variant={"subtitle2"} style={{ textAlign: "center" }}>We couldn't find the project you were looking for, make sure you type the correct address, example https://github.com/GastonCaldera/Take-Home.</Typography>
        </Box>
    );
}