"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Header from '@/components/header';
import Search from '@/components/search';
import CommitsTable from '@/components/CommitsTable';
import Loading from '@/components/Loading';
import { getAllCommits } from '@/api';
import { CommitsType } from '@/type/commits';

export default function Home() {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [commits, setCommits] = useState<Array<CommitsType>>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    if (search !== "") {
      setIsloading(true)
      getAllCommits(search, page)
        .then((response) => {
          setCommits(response.d)
          setIsloading(false)
        }).catch((error) => {
          setCommits([])
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
      <>
        <CommitsTable commits={commits}></CommitsTable>
      </>
    </main>
  );
};


