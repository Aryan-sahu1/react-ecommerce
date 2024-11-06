import React, { useState } from 'react';
import './AddProduct.css'
const AddProduct = () => {
    const [userData, setUserData] = useState({
        productname: '',
        price: '',
        discountprice: '',
        slugname: '',
        description: '',
        category_id: '',
        active: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Data:", userData);
        // You can add code here to save userData to a database or another state
        setUserData({ productname: '', price: '', discountprice: '', slugname: '', description: '',   category_id: '', active: '' }); // Clear form after submission
    };
    return (
        <>
            <div className="row mt-5">
                <div className="col-lg-3"></div>
                <div className="col-lg-9">
                    <div className='user py-3'>
                        <div className='add-user'>
                            <h2>Add User</h2>
                            <form onSubmit={handleSubmit} className="add-user-form">
                                <div className="form-group">
                                    <label htmlFor="productname">Product Name:</label><br />
                                    <input
                                        className='mt-2 mb-2'
                                        type="text"
                                        id="productname"
                                        name="productname"
                                        value={userData.productname}
                                        onChange={handleChange}
                                            placeholder='Product Name'
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price:</label><br />
                                    <input
                                        className='mt-2 mb-2'
                                        type="number"
                                        id="price"
                                        name="price"
                                        value={userData.price}
                                        onChange={handleChange}
                                        required
                                        min="1"
                                            placeholder='Price'
                                    />
                                </div>
                                 
                                <div className="form-group">
                                    <label htmlFor="discountprice">Discount Price:</label><br />
                                    <input
                                        className='mt-2 mb-2'
                                        type="number"
                                        id="discountprice"
                                        name="discountprice"
                                        value={userData.discountprice}
                                        onChange={handleChange}
                                        required
                                        min='1'
                                        placeholder='Discount Price'
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="slugname">Slug Name:</label><br />
                                    <input
                                        className='mt-2 mb-2'
                                        type="text"
                                        id="slugname"
                                        name="slugname"
                                        value={userData.slugname}
                                        onChange={handleChange}
                                        required
                                        placeholder='Slug Name'
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description:</label><br />
                                    <input
                                        className='mt-2 mb-2'
                                        type="text"
                                        id="description"
                                        name="description"
                                        value={userData.description}
                                        onChange={handleChange}
                                        required
                                        placeholder='Description'
                                    />
                                </div>

                                

                                <div className="form-group">
                                    <label htmlFor="category_id"> Category Id</label><br />
                                    <input
                                        className='mt-2 mb-2'
                                        type="number"
                                        id="category_id"
                                        name="category_id"
                                        value={userData.category_id}
                                        onChange={handleChange}
                                        required
                                        min="1" 
                                        placeholder='Category Id'
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="active"> Active:</label><br />
                                    <input
                                        className='mt-2 mb-2'
                                        type="text"
                                        id="active"
                                        name="active"
                                        value={userData.active}
                                        onChange={handleChange}
                                        required
                                        min="0"
                                        max="1"
                                        placeholder='Active'
                                    />
                                </div>

                               
                                <br />
                                <button type="submit">Add User</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}

export default AddProduct
