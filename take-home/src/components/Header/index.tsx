"use client";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import { lobster, rajdhani } from '../../assets/fonts';
import { Typography } from '@mui/material';

const AOS = require("aos");

export default function Header() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Typography
                variant='h1'
                className={`${lobster.className} ${styles.title}`}
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos="fade-down"
            >
                Take-Home
            </Typography>
            <Typography
                variant='h6'
                className={`${rajdhani.className}`}
                style={{ textAlign: "center" }}
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos="fade-right"
            >
                The best way to track your commits!
            </Typography>
        </>
    );
};
