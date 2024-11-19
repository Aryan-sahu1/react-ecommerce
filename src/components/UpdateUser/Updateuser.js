import './Updateuser.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Updateuser = () => {
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

    const [formValidationError, setFormValidationError] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${id}`)
            .then((res) => {
                setUserData(res.data.data);
            })
            .catch((err) => console.error("Error fetching user data:", err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:3000/user/${id}`, userData)
            .then((res) => {
                alert("User updated successfully!");
                navigate('/user-list');
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    const formValidationErrorObj = error.response.data.message;
                    setFormValidationError(formValidationErrorObj);
                }
                alert("Please submit data properly.");
            });
    };

    return (
        <>
        <div className="container">
        <div className="row mt-5">
            <div className="col-lg-12">
                <div className="user py-3">
                    <div className="add-user">
                        <div className="add-user-top">
                           
                            <div>
                                <h2>Update User</h2>
                            </div>


                        </div>

                        <form onSubmit={handleSubmit} className="add-user-form">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    className="mt-2 mb-2 form-control"
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={userData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    required
                                />
                                {formValidationError.firstName && (
                                    <p className="text-danger">{formValidationError.firstName}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    className="mt-2 mb-2 form-control"
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={userData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    required
                                />
                                {formValidationError.lastName && (
                                    <p className="text-danger">{formValidationError.lastName}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    className="mt-2 mb-2 form-control"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                />
                                {formValidationError.email && (
                                    <p className="text-danger">{formValidationError.email}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="DOB">DOB:</label>
                                <input
                                    className="mt-2 mb-2 form-control"
                                    type="date"
                                    id="DOB"
                                    name="DOB"
                                    value={userData.DOB}
                                    onChange={handleChange}
                                    placeholder="Date of Birth"
                                    required
                                />
                                {formValidationError.DOB && (
                                    <p className="text-danger">{formValidationError.DOB}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    className="mt-2 mb-2 form-control"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={userData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    required
                                />
                                {formValidationError.password && (
                                    <p className="text-danger">{formValidationError.password}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="mobile">Phone:</label>
                                <input
                                    className="mt-2 mb-2 form-control"
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    value={userData.mobile}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                />
                                {formValidationError.mobile && (
                                    <p className="text-danger">{formValidationError.mobile}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Marital Status</label>
                                <select
                                    name="maritalStatus"
                                    value={userData.maritalStatus}
                                    onChange={handleChange}
                                    className="mt-2 mb-2 form-control"
                                    required
                                >
                                    <option value="">Select Status</option>
                                    <option value="married">Married</option>
                                    <option value="single">Single</option>
                                </select>
                                {formValidationError.maritalStatus && (
                                    <p className="text-danger">{formValidationError.maritalStatus}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="weight">Weight:</label>
                                <input
                                    className="mt-2 mb-2 form-control"
                                    type="number"
                                    id="weight"
                                    name="weight"
                                    value={userData.weight}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    max="300"
                                    placeholder="Weight"
                                />
                                {formValidationError.weight && (
                                    <p className="text-danger">{formValidationError.weight}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Blood Group</label>
                                <select
                                    name="bloodGroup"
                                    value={userData.bloodGroup}
                                    onChange={handleChange}
                                    className="mt-2 mb-2 form-control"
                                    required
                                >
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                                {formValidationError.bloodGroup && (
                                    <p className="text-danger">{formValidationError.bloodGroup}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="height">Height:</label>
                                <input
                                    className="mt-2 mb-2 form-control"
                                    type="number"
                                    id="height"
                                    name="height"
                                    value={userData.height}
                                    onChange={handleChange}
                                    required
                                    min="1"
                                    max="10"
                                    placeholder="Height"
                                />
                                {formValidationError.height && (
                                    <p className="text-danger">{formValidationError.height}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Highest Qualification</label>
                                <select
                                    name="higestQualification"
                                    value={userData.higestQualification}
                                    onChange={handleChange}
                                    className="mt-2 mb-2 form-control"
                                    required
                                >
                                    <option value="">Select Qualification</option>
                                    <option value="Bachelor degree">Bachelor's degree</option>
                                    <option value="Master degree">Master's degree</option>
                                    <option value="Professional degree">Professional degree</option>
                                    <option value="Diplomas">Diplomas</option>
                                </select>
                                {formValidationError.higestQualification && (
                                    <p className="text-danger">{formValidationError.higestQualification}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Select Active</label>
                                <select
                                    name="isActive"
                                    value={userData.isActive}
                                    onChange={handleChange}
                                    className="mt-2 mb-2 form-control"
                                    required
                                >
                                    <option value="">Select Active</option>
                                    <option value="1">True</option>
                                    <option value="0">False</option>
                                </select>
                                {formValidationError.isActive && (
                                    <p className="text-danger">{formValidationError.isActive}</p>
                                )}
                            </div>


                            <button type="submit" className="adduser">
                                Update User
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
       
    );
};

export default Updateuser;
