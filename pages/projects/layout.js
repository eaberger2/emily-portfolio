import styles from '../../styles/Project.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import githubLogo from '../../images/github-mark.svg';

export default function ProjectLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    title,
    image,
    githubLink
  }) {
    const router = useRouter()
    return (
      <>
        <div className={styles.container}>
            <Head>
                <title>Emily Berger's Portfolio</title>
                <link rel="icon" href="/laptop.ico" />
            </Head>
            <div className={styles.column}>
              <button type="button" onClick={() => router.back()} className={styles.backButton}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
              </svg>
              </button>
            </div>
              <h1 className={styles.title}>{title}</h1>

              <div className={styles.row}>
                <div className="grid-cols-2">
                  <Image
                  src={image}
                  alt="ProjectImage"
                  priority={true}
                  />
                </div>
                <div className="grid-cols-2">
                  <Link href={githubLink}>
                    <Image
                      src={githubLogo}
                      alt="GithubLogo"
                      width={50}
                      height={50}
                    />
                  </Link>
                  <p>
                    Hellllllllllllllllllllllllo
                  </p>
                </div>
            </div>
        </div>
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
      </>
    )
  }