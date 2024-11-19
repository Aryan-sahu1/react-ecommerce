import React, { useState } from "react";
import "./AddUser.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

  const navigate = useNavigate();

  const handleNavigate = (path) => () => {
    navigate(path);
  };



  const [userData, setUserData] = useState({
    firstName: null,
    lastName: null,
    DOB: null,
    password: null,
    mobile: null,
    maritalStatus: null,
    bloodGroup: null,
    weight: null,
    height: null,
    email: null,
    higestQualification: null,
    isActive: '',
  });
  const [formValidationError, setFormValidationError] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  // Handle form submission
  const handleSubmit = (e) => {
    const formattedData = {
      ...userData,
      isActive: userData.isActive === "true",
    };
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/create", formattedData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        alert("form submitted")

      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") {

          const formValidationErrorObj = error.code;
          setFormValidationError(formValidationErrorObj);

        }
        alert("please submit data properly")
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
                  <div className="filter-section">
                    <a onClick={handleNavigate("/user-list")} className="bg-primary text-white px-2 fw-bold"><span><i className="fa-solid fa-bars"></i></span> User-list</a>

                  </div>
                  <div>
                    <h2>Add User</h2>
                  </div>


                </div>


                <form onSubmit={handleSubmit} className="add-user-form">
                  <div className="form-group ">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      className="mt-2 mb-2 form-control input-width"
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={userData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      className="mt-2 mb-2 form-control input-width"
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Last Name"
                    />
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
                      required
                      placeholder="Date of Birth"
                    />
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
                      required
                      placeholder="Password"
                    />
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
                      required
                      placeholder="Phone Number"
                    />
                  </div>

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

                  <div className="form-group">
                    <label htmlFor="weight"> Weight:</label>

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
                  </div>

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

                  <div className="form-group">
                    <label htmlFor="height"> Height:</label>

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
                  </div>

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
                    <option value="Professional degree">
                      Professional degree
                    </option>
                    <option value="Diplomas">Diplomas</option>
                  </select>
                  <p className="h6 text-danger">{formValidationError}</p>

                  <label>Select Active</label>

                  <select
                    name="isActive"
                    value={userData.isActive}
                    onChange={handleChange}
                    className="mt-2 mb-2 form-control"
                    required
                  >
                    <option value="">Select Active</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>

                  {/* {formValidationError.map((item, index) => (
                  <p key={index} className="text-danger">{item}</p>
                ))} */}

                  <button type="submit" className="adduser" onClick={handleSubmit}>
                    Add User
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

export default AddUser;
