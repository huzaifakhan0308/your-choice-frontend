"use client";
import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import logo from '../../public/your-choice-logo.png'
import menuIcon from '../../public/menuIcon.png'
import favorites from '../../public/favorites.png'
import { useRouter } from 'next/navigation';
// import { useSearchParams } from 'next/navigation';
// const searchParams = useSearchParams();
// const id = searchParams.get('id');

const Navbar = () => {
    const [boolean, setBoolean] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("your-choice-owner"));
        if (data && data.username === process.env.NEXT_PUBLIC_USERNAME) {
            setBoolean(true)
        }
    }, []);

    const handleLinkClick = () => {
        setShowMenu(false);
    };

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        router.push(selectedValue);
    };

    const handleNavigation = (route) => {
        router.push(route);
    };
    return (
        <>
            <header className={styles.headerMob}>
                <nav className={styles.Mobnavbar} style={{ display: showMenu ? "none" : "flex" }}>
                    <img src={logo.src} alt="logo" className={styles.logo} />
                    <img
                        src={menuIcon.src}
                        alt="menu icon"
                        onClick={() => { setShowMenu(true) }}
                        className={styles.mobileMenu}
                    />
                </nav>
                <div className={styles.ulDiv} style={{ display: showMenu ? "flex" : "none" }}>
                    <button onClick={handleLinkClick}>X</button>
                    <ul className={styles.mobileUl} >
                        <li className={styles.li} style={{ color: "red" }} >
                            Menu
                        </li>
                        <Link href="/" >
                            <li onClick={handleLinkClick}>
                                Home
                            </li>
                        </Link>
                        {boolean ?
                            <>
                                <Link href="/orders" >
                                    <li onClick={handleLinkClick}>
                                        Orders
                                    </li>
                                </Link>
                                <Link href="/products" >
                                    <li onClick={handleLinkClick}>
                                        My products
                                    </li>
                                </Link>
                                <Link href="/products" >
                                    <li onClick={handleLinkClick}>
                                        Add new
                                    </li>
                                </Link>
                            </>
                            :
                            <>
                                <Link href="/aboutus" >
                                    <li onClick={handleLinkClick}>
                                        About Us
                                    </li>
                                </Link>
                                <Link href="/contact" >
                                    <li onClick={handleLinkClick}>
                                        Contact
                                    </li>
                                </Link>
                                <Link href="/favorites" >
                                    <li onClick={handleLinkClick}>
                                        Favorites
                                    </li>
                                </Link>
                            </>
                            }
                    </ul>
                </div>
            </header>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <img src={logo.src} alt="logo" className={styles.logo} />
                    <ul className={styles.ul} >
                        <div className="">
                            <Link href="/" >
                                <li>
                                    Home
                                </li>
                            </Link>
                            {boolean?
                            <>
                            <Link href="/orders" >
                                <li>
                                    Orders
                                </li>
                            </Link>
                            <Link href="/products" >
                                <li>
                                    My products
                                </li>
                            </Link>
                            <Link href="/products" >
                                <li style={{ color: "red" }}>
                                    Add new
                                </li>
                            </Link>
                            </>
                            :
                            <>
                                <Link href="/aboutus" >
                                    <li>
                                        About Us
                                    </li>
                                </Link>
                                <Link href="/contact" >
                                    <li style={{ color: "red" }}>
                                        Contact
                                    </li>
                                </Link>
                            </> 
                            }
                        </div>
                        <Link href="/favorites" >
                            <img src={favorites.src} alt="" />
                        </Link>
                    </ul>
                </nav>
            </header>
            <div className={styles.headerBottom}>
                <select onChange={(event) => handleSelectChange(event)}>
                    <option disabled>Select a Category</option>
                    <option value="/mens?type=jackets">Men's Jackets</option>
                    <option value="/women?type=handbag">Women's Handbags</option>
                    <option value="/mens?type=shoes">Men's Footwear Collection</option>
                    <option value="/women?type=shoes">Women's Shoe Selection</option>
                    <option value="/kids?type=shoes">Kid's Shoe Assortment</option>
                </select>
                <div className="">
                    <button onClick={() => handleNavigation("/mens?type=jackets")}>Men's Jackets</button>
                    <button onClick={() => handleNavigation("/women?type=handbag")}>Women's Handbags</button>
                    <button onClick={() => handleNavigation("/mens?type=shoes")}>Men's Footwear Collection</button>
                    <button onClick={() => handleNavigation("/women?type=shoes")}>Women's Shoe Selection</button>
                    <button onClick={() => handleNavigation("/kids?type=shoes")}>Kid's Shoe Assortment</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
