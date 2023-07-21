import Link from 'next/link'
import styles from './page.module.css'
// import { useRouter } from "next/navigation";
// const { push } = useRouter();


export default function Home() {
const setIdentity = (value) => {
  // window.localStorage.setItem('Identity', JSON.stringify("value"))
  // console.log(value);
}
  return (
    <main className={styles.main}>
      <h1>welcome to our website!</h1>
      <Link href="/main" >
        <button className={styles.button} onClick={setIdentity("visitor")}>
            visitor
        </button>
      </Link>
      <Link href="/signin" >
        <button className={styles.button} onClick={setIdentity("sign-in")}>
          sign in
        </button>
      </Link>
    </main>
  )
}
