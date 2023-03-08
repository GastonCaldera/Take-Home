"use client";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css'
import { Button, Box } from '@mui/material';
import { CustomTextField } from "../CustomTextField";
import SearchIcon from '@mui/icons-material/Search';

const AOS = require("aos");

export default function Search({ onClick, isLoading }: { onClick(value: string): void, isLoading: boolean }) {
    const [searchText, setSearchText] = useState<string>('')
    const onChangeSearchInput = (value: string) => {
        setSearchText(value)
    }
    const onClickSearch = () => {
        if (searchText.trim() !== "") {
            onClick(searchText.trim())
        }
    }
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
            <CustomTextField
                value={searchText || ''}
                placeholder='https://github.com/GastonCaldera/Take-Home'
                size="small"
                onChange={(e) => onChangeSearchInput(e.target.value)}
            >
            </CustomTextField>
            <Button
                className={styles.search_button}
                size="small"
                onClick={onClickSearch}
                startIcon={<SearchIcon />}
                disabled={isLoading}
            >
                Search
            </Button>
        </Box>
    )
}
