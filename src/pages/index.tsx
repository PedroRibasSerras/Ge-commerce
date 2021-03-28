import Head from 'next/head';
import { Carosel } from '../components/Carosel';
import { NavBar } from '../components/NavBar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Generic E-commerce</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <NavBar />
      <div className={styles.bannersCarosel}>
        <Carosel isEnableFinalButtons={false} images={[
          {
            src:"teste.jpg",
            alt:"Teste"
          },
          {
            src:"teste2.jpg",
            alt:"Teste2"
          },
          {
            src:"teste3.jpg",
            alt:"Teste3"
          }
        ]} />
      </div>
    </div>
  )
}
