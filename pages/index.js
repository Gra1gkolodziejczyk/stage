import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../pages/Header/Header';
import Footer from '../pages/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PortraitScopie - Myrhmica</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
      </main>
    </div>
  )
}
