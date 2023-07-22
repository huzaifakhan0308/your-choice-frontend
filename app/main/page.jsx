import React from 'react'
import style from "./page.module.css";
import Navbar from '../navbar/navbar'
import Link from 'next/link';

function Page() {
  const products = [
    {
      name: "ALL",
      linkTo: "/all"
    },
    {
      name: "MEN's",
      linkTo: "/mens"
    },
    {
      name: "WOMEN's",
      linkTo: "/women"
    },
    {
      name: "KID's",
      linkTo: "/kids"
    },
  ]

  return (
    <>
      <Navbar />
      <main className={style.main}>
        <div className={style.offProducts}>
          OFF% products
        </div>
        <div className={style.products}>
          {products.map((e) => (
            <Link href={e.linkTo} className={style.cards}>
                {e.name}
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export default Page
