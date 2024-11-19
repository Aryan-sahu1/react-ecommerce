import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CategoryList.css';

const CategoryList = () => {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/category")
            .then((res) => {
                // console.log(res);
                setUserData(res.data);
            });
    }, []);

    const handleNavigate = (path) => () => {
        navigate(path);
    };

    return (
        <div className='user-list'>
            <div className='user-list-below'>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Category Name</th>
                            <th>Category Description</th>
                            <th>Parent Category</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((item, index) => (

                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.slugname}</td>
                                <td>{item.description}</td>
                                <td>{item.parent_id ? item.parent_id.description : 'None'}</td>
                                <td>{item.isActive === true ? 'Active' : 'Inactive'}</td>
                                <td className='action-btn'>
                                    <a onClick={() => handleNavigate(`/update-category/${item.id}`)()}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </a>
                                    <a onClick={() => handleNavigate(`/delete-category/${item.id}`)()}>
                                        <i className="fa-solid fa-trash"></i>
                                    </a>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryList;
