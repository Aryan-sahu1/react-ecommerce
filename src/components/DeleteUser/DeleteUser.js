import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './DeleteUser.css'
const DeleteUser = () => {


    const { id } = useParams();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        DOB: '',
        password: '',
        mobile: '',
        maritalStatus: '',
        bloodGroup: '',
        weight: '',
        height: '',
        email: '',
        higestQualification: '',
        isActive: '',
    });


    useEffect(() => {
        axios.get(`http://localhost:3000/user/${id}`)
            .then((res) => {
                setUserData(res.data.data);
            })
            .catch((err) => console.error("Error fetching user data:", err));
    }, [id]);

  

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3000/user/${id}`, userData)
            .then((res) => {
                alert("User Deleted successfully!");
                navigate('/user-list');
            })
           
    };
    const cancleChange = (e) =>{
        navigate('/user-list');
    }

    return (
        <>
            <div className='delete-user'>
                <div className="delete-user-below">
                    <h4 className='text-center'>Are you sure to delete data</h4>
                    <div className='delete-btn'>
                        <button onClick={handleSubmit}>Confirm</button>
                        <button onClick={cancleChange}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteUser
