"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Header from '@/components/header';
import Search from '@/components/search';
import CommitsTable from '@/components/CommitsTable';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/errorMessage';
import { getAllCommits } from '@/api';
import { TableInfoType } from '@/type/commits';

export default function Home() {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [fetchtError, setFetchtError] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [commitsInfo, setCommitsInfo] = useState<TableInfoType>({ more: false, commits: [] })
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    if (search !== "") {
      setIsloading(true)
      setFetchtError(false)
      getAllCommits(search, page)
        .then((response) => {
          setIsloading(false)
          if (response.s === 200) {
            setCommitsInfo(response.d)
          } else {
            setFetchtError(true)
            setCommitsInfo({
              more: false,
              commits: []
            })
          }
        }).catch((error) => {
          setFetchtError(true)
          setCommitsInfo({
            more: false,
            commits: []
          })
          setIsloading(false)
        })
    }
  }, [search, page])
  return (
    <main className={styles.main}>
      <Header />
      <Search onClick={(value) => { setSearch(value) }} isLoading={isLoading} />
      {isLoading ? (
        <Loading />
      ) : null}
      {commitsInfo?.commits.length > 0 && !isLoading ? (
        <CommitsTable tableInfo={commitsInfo}></CommitsTable>
      ) : null}
      {fetchtError ? (
        <ErrorMessage />
      ) : null}
    </main>
  );
};


