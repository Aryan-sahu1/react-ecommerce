import React, { useEffect, useState } from 'react'
import './DeleteProduct.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const DeleteProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
const [deleteData,setDeleteData]= useState({
    productName: "",
    price: "",
    discountPrice: "",
    slugName: "",
    description: "",
    category_Id: "",
    isActive: ""
});


useEffect((e)=>{ 
axios.delete(`http://localhost:3000/product/${id}`)
.then((res)=>{
    setDeleteData(res.data.data);
})
.catch((err) => console.error("Error fetching user data:", err));

},[id])
const handleSubmit = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3000/product/${id}`, deleteData)
        .then((res) => {
            console.log(res)
            alert("User Deleted successfully!");
            navigate('/product-list');
        })
       
};
const cancleChange = (e) =>{
    navigate('/product-list');
}

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className='delete-product'>
                            <div className='delete-product-div'>
                                <div className='text-center py-5 '>
                                    <h4 className='fw-bold mt-5'>Are you sure to delete data of Product list</h4>
                                </div>
                                <div className='d-flex justify-content-evenly'>
                                    <button className='confirm-btn' onClick={handleSubmit}>
                                        Confirm
                                    </button>
                                    <button className='cancel-btn'onClick={cancleChange}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteProduct
