"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar';
import styles from './page.module.css'
import Footer from '../../hooks/footer.jsx';

function Page() {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('your-choice-owner'));
        if (data && data.password === process.env.NEXT_PUBLIC_PASSWORD) {
            setAuthenticated(true);
        }
    }, []);

    const colorOptions = [
        'Red',
        'Blue',
        'Green',
        'Yellow',
        'Orange',
        'Purple',
        'Pink',
        'Brown',
        'Gray',
        'Black',
        'White',
    ];

    const [selectedColors, setSelectedColors] = useState([]);
    const handleColorChange = (color) => {
        if (selectedColors.includes(color)) {
            setSelectedColors(selectedColors.filter((c) => c !== color));
        } else {
            setSelectedColors([...selectedColors, color]);
        }
    };

    const [sizes, setSizes] = useState([]);
    const [newSize, setNewSize] = useState('');

    const handleSizeAdd = () => {
        if (newSize.trim() !== '') {
            setSizes([...sizes, newSize]);
            setNewSize('');
        }
    };

    const handleSizeDelete = (sizeToDelete) => {
        setSizes(sizes.filter((size) => size !== sizeToDelete));
    };

    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formValues = {};

        formData.forEach((value, key) => {
            formValues[key] = value;
        });

        console.log('Form values:', formValues, selectedColors, sizes);
        if (selectedColors.length === 0){
            alert("please select at least one color")
        } else if (sizes.length === 0){
            alert("please add at least one size")
        }
        else{
            // setSubmitSuccess(true);
        }
    };

    return (
        <>
        {authenticated ?
            <>
                <Navbar />
                <div className={styles.container}>
                    {submitSuccess && (
                        <div className="alert alert-success mt-3" role="alert">
                            Form submitted successfully!
                        </div>
                    )}
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <h1>Add new <span style={{ color: "red" }}>Product</span></h1>
                        <div className="col-md-6">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" name="title" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Price</label>
                                <input type="number" className="form-control" name="price" placeholder="2000 e.g" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">OFF%</label>
                            <input type="number" className="form-control" name="off" placeholder="10.0 (optional)" />
                        </div>
                        <div>
                            <h4>Select available colors</h4>
                            {colorOptions.map((color) => (
                                <label key={color}>
                                    <input
                                        type="checkbox"
                                        checked={selectedColors.includes(color)}
                                        onChange={() => handleColorChange(color)}  
                                    />
                                    {color}
                                </label>
                            ))}
                        </div>
                        <div className="mt-4">
                            <div>
                                <h4>Add available Sizes:</h4>
                                <input
                                    type="text"
                                    value={newSize}
                                    onChange={(e) => setNewSize(e.target.value)}
                                    />
                                <button onClick={handleSizeAdd}>+</button>
                            </div>
                            <h4>Selected Sizes:</h4>
                            <div>
                                {sizes.map((size) => (
                                    <div key={size}>
                                        {size} <button onClick={() => handleSizeDelete(size)}>DLT</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">adults</label>
                                <select className="form-select" name="adult" required >
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="kid">Kid</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">type</label>
                            <select className="form-select" name="type" required >
                                <option value="shoes">Shoes</option>
                                <option value="handbag">Handbag</option>
                                <option value="jacket">Jacket</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Quantity</label>
                            <input type="number" className="form-control" name="quantity" required />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-dark">Confirm</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </>
            :
            ""
        }
        </>
    )
}

export default Page
