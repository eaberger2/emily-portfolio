import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Header(){
    return (
        <div className={styles.header}>
        <div>
            <Head>
            <title>Emily's Portfolio</title>
            <link rel="icon" href="/laptop.ico" />
            </Head>
            <h1 className={styles.title}>
                Emily's Portfolio
            </h1>
            <h1 className={styles.subtitle}>*for code and such</h1>
            <div className={styles.navbar}>
                <ul style={{textAlign: "center"}}>
                  <li>
                    <Link href="/">
                      Code
                    </Link>
                  </li>
                  <li>
                    <Link href="/film">
                      Film
                    </Link>
                  </li>
                  <li>
                    <Link href="/music">
                      Music
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-me">
                      About Me
                    </Link>
                  </li>
                </ul>
            </div>
        </div>
        </div>
    )
}