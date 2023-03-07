"use client";
import { use, useEffect, useState } from 'react';
import styles from './page.module.css';
import Header from '@/components/header';
import Search from '@/components/search';
import axios from 'axios';

export default function Home() {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [commits, setCommits] = useState<Array<string>>([])
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
    </main>
  );
};

export async function getAllCommits(url: string, page: number) {
  try {
    const baseUrl = process.env.API
    const arrayUrl = url.split("/").filter((element) => element !== '')
    const response = await axios.post(`${baseUrl}/commit`, {
      owner: arrayUrl[arrayUrl.length - 2],
      repo: arrayUrl[arrayUrl.length - 1],
      skip: page,
      limit: page * 10
    })
    return response.data
  } catch (error) {
    console.log(error)
    return 'error'
  }

  // const response = await axios()
}
