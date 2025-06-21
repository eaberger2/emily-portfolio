import Header from '../components/header.js';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { storage } from "../helpers/firebase.js";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export default function FilmPage(){
  
  const imageName = "R1-09222-0014.JPG";
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, "film"); // 'images' is your folder name
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
      setImages(urls);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center"}}>
        {images.map((url, i) => (
          <img key={i} src={url} alt={`img-${i}`} width={400} style={{ margin: 10 }} />
        ))}
      </div>
    </div>
  );
}