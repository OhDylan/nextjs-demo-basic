import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Little Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Blog
        </h1>
        <div className={styles.grid}>
          <Link href="./blog1">
            <a className={styles.card}>
              <h3>Blog 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat vehicula felis eget feugiat. Nullam mattis feugiat massa, id consectetur dolor pellentesque eget. Praesent non varius est, at rutrum nisl. Maecenas feugiat vitae quam et imperdiet. Nam vulputate volutpat metus, mollis faucibus nisi eleifend ac. Integer egestas libero odio, eget ultrices leo condimentum eu.</p>
            </a>
          </Link>

          <Link href="./blog2">
            <a className={styles.card}>
              <h3>Blog 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat vehicula felis eget feugiat. Nullam mattis feugiat massa, id consectetur dolor pellentesque eget. Praesent non varius est, at rutrum nisl. Maecenas feugiat vitae quam et imperdiet. Nam vulputate volutpat metus, mollis faucibus nisi eleifend ac. Integer egestas libero odio, eget ultrices leo condimentum eu.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
