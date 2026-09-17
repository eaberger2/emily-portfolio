import { useEffect, useState } from "react";
import { storage } from "../helpers/firebase.js";
import { ref, list, getDownloadURL } from "firebase/storage";
import styles from '../styles/Home.module.css';
import LoadMoreButton from "../components/LoadMoreButton/loadMoreButton";


export default function FilmPage(){
  
  const [film, setFilm] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const PAGE_SIZE = 12;

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, "film");
      let res = await list(listRef, { maxResults: PAGE_SIZE });

      const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
      setFilm(urls);
      setNextPageToken(res.nextPageToken || null);
    };

    fetchImages();
  }, []);

  const loadMoreItems = async () => {
    if (!nextPageToken) return;

    const listRef = ref(storage, "film");
    let res = await list(listRef, { maxResults: PAGE_SIZE, pageToken: nextPageToken });

    const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
    setFilm(prev => [...prev, ...urls]);
    setNextPageToken(res.nextPageToken || null);
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center"}}>
        {film.map((url, i) => (
          <img 
          key={i} 
          src={url} 
          alt={`img-${i}`} 
          width={400} 
          onLoad={() => handleImageLoad(i)}
          style={{ 
            margin: 10,
            display: loadedImages[i] ? "block" : "none"
          }} />
        ))}
      </div>

      <div style={{ margin: "20px 0", justifyContent: "center"}}>
        <LoadMoreButton onLoadMore={loadMoreItems} />
      </div>
    </div>
  );
}