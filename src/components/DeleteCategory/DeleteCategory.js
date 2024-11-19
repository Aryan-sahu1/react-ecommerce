import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './DeleteCategory.css'
const DeleteCategory = () => {


    const { id } = useParams();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        slugname: null,
        description: null,
        parent_id: null,
        isActive: null,
    });


    useEffect(() => {
        axios.get(`http://localhost:3000/category/${id}`)
            .then((res) => {
                setUserData(res.data.data);
            })
            .catch((err) => console.error("Error fetching user data:", err));
    }, [id]);

  

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3000/category/${id}`, userData)
            .then((res) => {
                console.log(res)
                alert("User Deleted successfully!");
                navigate('/category-list');
            })
           
    };
    const cancleChange = (e) =>{
        navigate('/category-list');
    }

    return (
        <>
            <div className='delete-user'>
                <div className="delete-user-below">
                    <h4 className='text-center'>Are you sure to delete data of category list</h4>
                    <div className='delete-btn'>
                        <button onClick={handleSubmit}>Confirm</button>
                        <button onClick={cancleChange}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteCategory
