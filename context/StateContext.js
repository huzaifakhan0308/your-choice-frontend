"use client";
import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import shoes from '../assets/shoes.jpg'
const Context = createContext();

export const StateContext = ({ children }) => {
    const [offProducts, setOffProducts] = useState([
        {
            title: "shoes",
            img: [shoes.src, shoes.src, shoes.src, shoes.src],
            price: "1000",
            off: "20",
            colors: ["red", "green"],
            gender: "female",
            type: "shoes",
            _id: "1",
            sizes: [7, 8, 9, 10, 11],
            quantity: 3
        }
    ]);

    const [products, setProducts] = useState([
        {
            title: "shoes",
            img: [shoes.src, shoes.src, shoes.src, shoes.src],
            price: "1000",
            off: "20",
            colors: ["red", "green"],
            gender: "female",
            type: "shoes",
            _id: "1",
            sizes: [7, 8, 9, 10, 11],
            quantity: 3
        },
        {
            title: "shoes",
            img: [shoes.src, shoes.src, shoes.src, shoes.src],
            price: "1000",
            off: "20",
            colors: ["red", "green"],
            gender: "female",
            type: "shoes",
            _id: "2",
            sizes: [7, 8, 9, 10, 11],
            quantity: 3
        },
        {
            title: "shoes",
            img: [shoes.src, shoes.src, shoes.src, shoes.src],
            price: "1000",
            off: "20",
            colors: ["red", "green"],
            gender: "female",
            type: "shoes",
            _id: "3",
            sizes: [7, 8, 9, 10, 11],
            quantity: 3
        },
        {
            title: "shoes",
            img: [shoes.src, shoes.src, shoes.src, shoes.src],
            price: "1000",
            off: "20",
            colors: ["red", "green"],
            gender: "female",
            type: "shoes",
            _id: "4",
            sizes: [7, 8, 9, 10, 11],
            quantity: 3
        },
        {
            title: "shoes",
            img: [shoes.src, shoes.src, shoes.src, shoes.src],
            price: "1000",
            off: "20",
            colors: ["red", "green"],
            gender: "female",
            type: "shoes",
            _id: "5",
            sizes: [7, 8, 9, 10, 11],
            quantity: 3
        }
    ]);

    const [productTotalCount, setProductTotalCount] = useState(0)

    const offProductData = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/items?someOff=true&page=1`);
            setOffProducts(response.data.items);
        } catch (error) {
            console.error('Error', error);
        }
    }

    const fetchData = async (query) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/items${query}`);
            setProducts(response.data.items)
            setProductTotalCount(response.data.totalCount)
        } catch (error) {
            console.error('Error', error);
        }
    }
    
    const findProductById = async (id) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/items/${id}`);
            return response.data
        } catch (error) {
            console.error('Error', error);
            return;
        }
    }

    useEffect(() => {
        offProductData()
    }, []);

    return (
        <Context.Provider
            value={{
                offProducts,
                products,
                productTotalCount,
                findProductById,
                fetchData
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);