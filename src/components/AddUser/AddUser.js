import React, { useState } from "react";
import "./AddUser.css";
import axios from "axios";

const AddUser = () => {
  const [userData, setUserData] = useState({
    firstName: "Jitendra ",
    lastName: "sahu",
    DOB: "08-11-2024",
    password: "1234",
    mobile: 8887603331,
    maritalStatus: "Single",
    bloodGroup: "A",
    weight: 65,
    height: 12,
    email: "jitendrasahu17996@gmail.com",
    higestQualification: null,
    active: false,
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
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/create", userData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log("Response:", res.data);
        // setUserData({
        //   firstName: "",
        //   lastName: "",
        //   DOB: "",
        //   password: "",
        //   mobile: "",
        //   maritalStatus: "",
        //   bloodGroup: "",
        //   weight: "",
        //   height: "",
        //   email: "",
        //   higestQualification: "",
        //   active: "",
        // });
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") {
          console.log("error.response:", error.response);
          const formValidationErrorObj = error.response.data.message;
          console.log("formValidationError:", formValidationErrorObj);
          setFormValidationError(formValidationErrorObj);
        }
        console.error("Submission error:", error);
        console.error("Submission error ERR_BAD_REQUEST:", error.code);
      });
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-lg-3"></div>
        <div className="col-lg-9">
          <div className="user py-3">
            <div className="add-user">
              <h2>Add User</h2>
              <form onSubmit={handleSubmit} className="add-user-form">
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <br />
                  <input
                    className="mt-2 mb-2"
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
                  <br />
                  <input
                    className="mt-2 mb-2"
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
                  <br />
                  <input
                    className="mt-2 mb-2"
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
                  <br />
                  <input
                    className="mt-2 mb-2"
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
                  <br />
                  <input
                    className="mt-2 mb-2"
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
                  <br />
                  <input
                    className="mt-2 mb-2"
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
                <br />
                <select
                  name="maritalStatus"
                  value={userData.maritalStatus}
                  onChange={handleChange}
                  className="mt-2 mb-2"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="married">Married</option>
                  <option value="single">Single</option>
                </select>

                <div className="form-group">
                  <label htmlFor="weight"> Weight:</label>
                  <br />
                  <input
                    className="mt-2 mb-2"
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
                <br />
                <select
                  name="bloodGroup"
                  value={userData.bloodGroup}
                  onChange={handleChange}
                  className="mt-2 mb-2"
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
                  <br />
                  <input
                    className="mt-2 mb-2"
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
                <br />
                <select
                  name="higestQualification"
                  value={userData.higestQualification}
                  onChange={handleChange}
                  className="mt-2 mb-2"
                  required
                >
                  <option value="">Select Qualification</option>
                  <option value="Bachelor_degree">Bachelor's degree</option>
                  <option value="Master_degree">Master's degree</option>
                  <option value="Professional_degree">
                    Professional degree
                  </option>
                  <option value="Diplomas">Diplomas</option>
                </select>

                <label>Select Active</label>
                <br />
                <select
                  name="active"
                  value={userData.active}
                  onChange={handleChange}
                  className="mt-2 mb-2"
                  required
                >
                  <option value="">Select Active</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
                <br />
                <button type="submit" onClick={handleSubmit}>
                  Add User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
