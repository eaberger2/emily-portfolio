import busProject from '../images/evbusproject.jpg';
import spotifyProject from '../images/spotifyplaylistproject.jpg';
import portfolioProject from '../images/portfolio.jpg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function CodePage(){
    return(
        <div className={styles.grid}>
          <div className={styles.card}>
          <Link href="https://github.com/DSSD-Madison/renew-wisconsin" to="route" target="_blank" rel="noopener noreferrer">
            <Image
              src={busProject}
              alt="Electric Bus Cost Calculator"
              width={250}
              height={250}
            />
          </Link>
          </div>
         <div className={styles.card}>
            <Link href="http://github.com/eaberger2/spotify-listened-to" to="route" target="_blank" rel="noopener noreferrer">
              <Image
                  src={spotifyProject}
                  alt="Spotify Playlist Search"
                  width={250}
                  height={250}
                />
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="https://github.com/eaberger2/emily-portfolio" to="route" target="_blank" rel="noopener noreferrer">
              <Image
                  src={portfolioProject}
                  alt="My Portfolio"
                  width={250}
                  height={250}
                />
            </Link>
          </div>
      </div>
    )
}