"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Header from '@/components/header';
import Search from '@/components/search';
import CommitsTable from '@/components/CommitsTable';
import Loading from '@/components/Loading';
import { getAllCommits } from '@/api';
import { CommitType, TableInfoType } from '@/type/commits';

export default function Home() {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [commitsError, setCommitsError] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [commitsInfo, setCommitsInfo] = useState<TableInfoType>({ more: false, commits: [] })
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    if (search !== "") {
      setIsloading(true)
      getAllCommits(search, page)
        .then((response) => {
          setCommitsInfo(response.d)
          setIsloading(false)
        }).catch((error) => {
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
      <CommitsTable tableInfo={commitsInfo}></CommitsTable>
    </main>
  );
};


