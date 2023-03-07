import styles from './page.module.css';
import Header from '@/components/header';
import Search from '@/components/search';
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Search />
    </main>
  );
};
