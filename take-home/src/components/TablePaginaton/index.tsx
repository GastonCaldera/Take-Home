"use client";
import "aos/dist/aos.css";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

export default function TablePaginaton(
    { leftButton, rightButton, pagePaginaton, onClick }:
        { leftButton: boolean, rightButton: boolean, pagePaginaton: number, onClick(page: number): void }) {
    const onClickButton = (value: number) => {
        onClick(pagePaginaton + value);
    }
    return (
        <Box sx={{ marginTop: '10px', display: 'flex', flexDirection: 'row', }}>
            <IconButton disabled={!leftButton} onClick={() => onClickButton(-1)}>
                <ArrowBackIosNew style={{ color: leftButton ? "#415574" : "" }} />
            </IconButton>
            <IconButton disabled={!rightButton} onClick={() => onClickButton(1)}>
                <ArrowForwardIos style={{ color: rightButton ? "#415574" : "" }} />
            </IconButton>
        </Box>
    );
}