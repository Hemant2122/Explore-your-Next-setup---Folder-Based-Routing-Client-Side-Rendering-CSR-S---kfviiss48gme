import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px"
      }}>
        <h1>First Page of Next JS</h1>
      </div>
    </>
  );
}
