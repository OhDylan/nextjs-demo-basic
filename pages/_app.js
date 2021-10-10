import '../styles/globals.css'
import '../styles/author.css'
import NavBar from '../components/NavBar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Next App</title>
        <meta name='description' content='This is a desription for My Next App'/>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
