"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar';
import styles from './page.module.css'
import Footer from '../../hooks/footer.jsx';
import axios from 'axios';

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
        'Navy',
        'Turquoise',
        'Coral',
        'Teal',
        'Lavender',
        'Maroon',
        'Gold',
        'Silver',
        'Beige',
        'Indigo',
        'Olive',
        'Charcoal'
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
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.target);
        const imageFiles = formData.getAll("images");

        if (selectedColors.length === 0) {
            alert("Please select at least one color");
            return;
        } else if (sizes.length === 0) {
            alert("Please add at least one size");
            return;
        } else if (imageFiles.length !== 4) {
            alert("Please select exactly 4 images");
            return;
        }

        const uploadedImageUrls = [];

        for (const imageFile of imageFiles) {
            const data = new FormData();
            data.append("file", imageFile);
            data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET);
            try {
                const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`, data);
                const imageUrl = response.data.url;
                uploadedImageUrls.push(imageUrl);
            } catch (error) {
                console.error('Error', error);
            }
        }

        const password = JSON.parse(localStorage.getItem('your-choice-owner')).password;

        const data = {
            title: formData.get("title"),
            img: uploadedImageUrls,
            price: parseInt(formData.get("price")),
            off: parseInt(formData.get("off")),
            colors: selectedColors,
            sizes: sizes,
            adults: formData.get("adult"),
            type: formData.get("type"),
            quantity: parseInt(formData.get("quantity")),
            password: password
        };

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/items`, data);
            console.log('Response:', response.data);
            setSubmitSuccess(true);
        } catch (error) {
            console.error('Error', error);
            return
        } finally {
            setLoading(false);
        }

    };

    return (
        <>
        {authenticated ?
            <>
                <Navbar />
                <div className={styles.container}>
                    {loading ? (
                        <div className="loading-spinner">Loading...</div>
                    ) : submitSuccess ? (
                        <div className="alert alert-success mt-3" role="alert">
                            Form submitted successfully!
                        </div>
                    ) : 
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
                        <div className="col-12">
                            <h4>Select available colors</h4>
                            <div>
                                {colorOptions.map((color) => (
                                    <div className="form-check form-check-inline" key={color}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={selectedColors.includes(color)}
                                            onChange={() => handleColorChange(color)}
                                        />
                                        <label className="form-check-label">
                                            <div className={styles.colorBox} style={{ backgroundColor: color.toLowerCase() }}></div>
                                            {color}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <input
                                    type="number"
                                    value={newSize}
                                    className="form-control"
                                    placeholder='Add available Sizes'
                                    onChange={(e) => setNewSize(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <button type="button" className="btn btn-dark" onClick={handleSizeAdd}>+</button>
                        </div>
                        <div className="">
                            <h4>Selected Sizes:</h4>
                            <div>
                                {sizes.map((size) => (
                                    <div key={size} style={{ fontSize: "30px" }}>
                                        {size} <button style={{ padding: "10px" }} className="btn btn-dark" onClick={() => handleSizeDelete(size)}>Remove</button>
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
                        <div className="col-md-6">
                            <label className="form-label">Images</label>
                            <input type="file" className="form-control" name="images" accept="image/*" multiple />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </div>
                    </form>
                    }
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
