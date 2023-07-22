"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'

function Contact() {
  const [boolean, setBoolean] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("your-choice-owner"));
    if (data && data.username === process.env.NEXT_PUBLIC_USERNAME) {
      setBoolean(true)
    }
  }, []);
  return (
      <>
        {boolean? ""
        :
          <>
            <Navbar />
            <div>
                <h1>Contact Us</h1>
            </div>
          </>
        }
      </>
  )
}

export default Contact
