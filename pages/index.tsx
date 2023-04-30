import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Format from '../layout/format';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';
import Section5 from '../components/section5';
import section7 from '../components/section7';

export default function Home() {
  return (
    <>
      <Head>
        <title>Memory Lane</title>
        <meta name="description" content="Memory Lane's Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Format>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <section7 />

        </Format>
      </main>
    </>
  );
}
