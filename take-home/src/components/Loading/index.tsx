"use client";
import Box from '@mui/material/Box';
import { LinearProgress } from '@mui/material';

export default function Loading() {
    return (
        <Box sx={{ width: '100%', marginTop: '10px', maxWidth: 725, }} data-testid='loading'>
            <LinearProgress sx={{
                "& .MuiLinearProgress-bar": {
                    backgroundColor: `#384a64`
                }
            }} />
        </Box>
    )
}