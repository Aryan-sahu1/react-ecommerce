import React, { useEffect, useState } from 'react'
import './UserList.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const UserList = () => {

    const [userData, SetUserData] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3000/user/")
            .then((res) => {
                console.log(res)
                SetUserData(res.data)
            })

    }, [])


    const navigate = useNavigate();

    const handleNavigate = (item) => () => {
        navigate(item);
    };




    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className='user-list'>
                            <div className='user-list-below'>
                                <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th>S.N</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>DOB</th>
                                            <th>Password</th>
                                            <th>Phone</th>
                                            <th>Marital Status</th>
                                            <th>Blood Group</th>
                                            <th>Height</th>
                                            <th>Highest Qualification</th>
                                            <th>Status</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            userData.map((item, index) => {
                                                return (

                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{item.firstName} {item.lastName}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.DOB}</td>
                                                        <td>{item.password}</td>
                                                        <td>{item.mobile}</td>
                                                        <td>{item.maritalStatus}</td>
                                                        <td>{item.bloodGroup}</td>
                                                        <td>{item.height}</td>
                                                        <td>{item.higestQualification}</td>
                                                        <td>{item.isActive === true ? 'active' : 'inactive'}</td>
                                                        <td className='action-btn'>
                                                            <div>
                                                                <a onClick={handleNavigate(`/update-user/${item.id}`)}>
                                                                    <i className="fa-regular fa-pen-to-square"></i>
                                                                </a>
                                                                <a onClick={handleNavigate(`/delete-user/${item.id}`)}>
                                                                    <i className="fa-solid fa-trash"></i>
                                                                </a>
                                                            </div>

                                                        </td>

                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserList
