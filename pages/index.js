import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import spotifyLogo from '../images/SpotifyPlaylistSearch.jpg';
import dsireLogo from '../images/DsireApi.jpg';
import rlCheckersLogo from '../images/ReinforcementLearningCheckers.jpg';
//npm run dev
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emily Berger's Portfolio</title>
        <link rel="icon" href="/laptop.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Hello.
        </h1>
        <h1 className={styles.title}>
          I'm Emily Berger
        </h1>
        <h1 className={styles.subtitle}>*a student and coder looking to start her journey as a software engineer :)</h1>
        <div className={styles.navbar}>
        <ul>
          <li className={styles.bold}>
          <Link href="/">
            Projects
          </Link>
          </li>
          <li>
          <Link href="/about-me">
            About Me
          </Link>
          </li>
        </ul>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
          <Link href="/projects/spotify-playlist-search">
            <Image
              src={spotifyLogo}
              alt="Spotify Logo"
              width={250}
              height={250}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Link>
          </div>
          <div className={styles.card}>
          <Image
              src={dsireLogo}
              alt="DSIRE Logo"
              width={250}
              height={250}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>

          <div className={styles.card}>
          <Image
              src={rlCheckersLogo}
              alt="RL Checkers Logo"
              width={250}
              height={250}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
      </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
