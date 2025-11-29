import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import CodePage from './code.js';
import Header from '../components/header.js';

export default function Home() {
  return (
    <div className={styles.container}>
        <CodePage/>
    </div>
  )
}
