import busProject from '../images/evbusproject.jpg';
import spotifyProject from '../images/spotifyplaylistproject.jpg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function CodePage(){
    return(
        <div className={styles.grid}>
          <div className={styles.card}>
          <Link href="https://github.com/DSSD-Madison/renew-wisconsin">
            <Image
              src={busProject}
              alt="Electric Bus Cost Calculator"
              width={250}
              height={250}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Link>
          </div>
         <div className={styles.card}>
            <Link href="http://github.com/eaberger2/spotify-listened-to">
              <Image
                  src={spotifyProject}
                  alt="Spotify Playlist Search"
                  width={250}
                  height={250}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="https://github.com/DSSD-Madison/renew-wisconsin">
              <Image
                  src={spotifyProject}
                  alt="Spotify Playlist Search"
                  width={250}
                  height={250}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
            </Link>
          </div>
      </div>
    )
}