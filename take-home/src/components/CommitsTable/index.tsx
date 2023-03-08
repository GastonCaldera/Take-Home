"use client";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePaginaton from "../TablePaginaton";
import { TableInfoType } from '../../type/commits';
import { textCut } from "../..//utils/global";

const AOS = require("aos");

export default function CommitsTable({ tableInfo, pagePaginaton, onPageChange }: { tableInfo: TableInfoType, pagePaginaton: number, onPageChange(page: number): void }) {
  const isMobile = useMediaQuery({ maxWidth: 567 })
  const onChangePagination = (page: number) => {
    onPageChange(page)
  }
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <TableContainer
        component={Paper}
        style={{ maxWidth: 725, width: '100%', marginTop: '10px' }}
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos="flip-right"
        data-testid='tableContainer'
      >
        <Table sx={{ width: '100%' }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Commit</TableCell>
              {!isMobile ? (
                <TableCell align="right">Author</TableCell>
              ) : null}
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableInfo?.commits?.map((row, index) => (
              <TableRow key={`${index} row.message`}>
                <TableCell component="th" scope="row">
                  {textCut(row.message)}
                </TableCell>
                {!isMobile ? (
                  <TableCell align="right">{row.author}</TableCell>
                ) : null}
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {tableInfo?.more || pagePaginaton > 1 ? (
        <TablePaginaton
          leftButton={pagePaginaton === 1 ? false : true}
          rightButton={tableInfo?.more ? true : false}
          pagePaginaton={pagePaginaton}
          onClick={(page) => onChangePagination(page)}
        />
      ) : null}
    </>
  );
}