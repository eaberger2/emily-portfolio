"use client";
import styles from '../styles/Home.module.css';

export default function MonthTracks({ month, tracks }) {

  const monthTranslations = {
    "01":"January", "02":"February", "03":"March", "04":"April", "05":"May", "06":"June",
    "07": "July", "08": "August", "09": "September", "10":"October", "11":"November", "12":"December"
  }

  function getMonth(monthKey){
    let keys = monthKey.split('-');
    let month = monthTranslations[keys[1]];
    return month + " " + keys[0];
  }

  return (
    <div>
      <h2 className={styles.tracksTitle}>Favorite Songs of {getMonth(month)}</h2>

      <div>
        {tracks.map((html, i) => (
          <div
            key={i}
            className={styles.track}
            style={{ margin: 10 }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ))}
      </div>
    </div>
  );
}
