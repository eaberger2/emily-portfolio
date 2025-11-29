import styles from '../styles/Home.module.css';
import { useEffect, useState } from "react";
import MonthTracks from '../components/monthTracks';

let musicCache = null;

export default function MusicPage(){
    const [music, setMusic] = useState(musicCache);

    useEffect(() => {
        if (musicCache === null) {
        fetch("/api/music")
            .then(res => res.json())
            .then(data => {
            // sort year-month keys
            const orderedMonths = Object.entries(data[0]).sort(
                ([a], [b]) => a.localeCompare(b) * -1
            );
            musicCache = orderedMonths;
            setMusic(orderedMonths);
            });
        }
    }, []);

  if (!music) return <p className={styles.tracksTitle}>Loading…</p>;

  return (
    <div className={styles.tracks}>
        {music.map(([month, tracks]) => (
            <MonthTracks key={month} month={month} tracks={tracks} />
        ))}
    </div>
    
  );
}