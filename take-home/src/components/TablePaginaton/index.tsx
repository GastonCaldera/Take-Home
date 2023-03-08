"use client";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
const AOS = require("aos");

export default function TablePaginaton(
    { leftButton, rightButton, pagePaginaton, onClick }: { leftButton: boolean, rightButton: boolean, pagePaginaton: number, onClick(page: number): void }) {
    useEffect(() => {
        AOS.init();
    }, []);
    const onClickButton = (value: number) => {
        onClick(pagePaginaton + value);
    }
    return (
        <Box
            sx={{ marginTop: '10px', display: 'flex', flexDirection: 'row', }}
            data-aos-delay="200"
            data-aos-duration="800"
            data-aos="flip-right"
            data-aos-anchor-placement="top-botton"
        >
            <IconButton disabled={!leftButton} onClick={() => onClickButton(-1)}>
                <ArrowBackIosNew style={{ color: leftButton ? "#415574" : "" }} />
            </IconButton>
            <IconButton disabled={!rightButton} onClick={() => onClickButton(1)}>
                <ArrowForwardIos style={{ color: rightButton ? "#415574" : "" }} />
            </IconButton>
        </Box>
    );
}