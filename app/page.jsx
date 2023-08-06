"use client";
import { useEffect, useState } from 'react';
import HomePage from './home';
import WelcomePage from './welcome';

export default function Home() {
  const [showWelcomePage, setShowWelcomePage] = useState(false);

  useEffect(() => {
    const shouldShowWelcomePage = localStorage.getItem("welcomePage") !== "false";
    if (shouldShowWelcomePage) {
      setShowWelcomePage(true);

      const timer = setTimeout(() => {
        localStorage.setItem("welcomePage", "false");
        setShowWelcomePage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      {showWelcomePage ? <WelcomePage /> : <HomePage />}
    </div>
  );
}
