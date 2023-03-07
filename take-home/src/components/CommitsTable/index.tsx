"use client";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableInfoType } from '@/type/commits';

const AOS = require("aos");

export default function CommitsTable({ tableInfo }: { tableInfo: TableInfoType }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: 725, width: '100%', marginTop: '10px' }}
      data-aos-delay="200"
      data-aos-duration="800"
      data-aos="flip-right"
    >
      <Table sx={{ width: '100%' }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Commit</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableInfo?.commits?.map((row) => (
            <TableRow key={row.message}>
              <TableCell component="th" scope="row">
                {row.message}
              </TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}