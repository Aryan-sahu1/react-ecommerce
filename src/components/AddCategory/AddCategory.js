import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './AddCategory.css';

const AddCategory = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => () => {
    navigate(path);
  };

  const [userData, setUserData] = useState({
    slugname: "",
    description: "",
    parent_id: "0",  // Default to "0" to represent 'No Parent'
    isActive: "",
  });
  const [formValidationError, setFormValidationError] = useState([]);
  const [userParentData, setUserParentData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/category")
      .then((res) => {
        const uniqueCategories = res.data.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.slugname === item.slugname)
        );
        setUserParentData(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error fetching parent categories:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert `isActive` to a boolean and `parent_id` to null if "0"
    const formattedData = {
      ...userData,
      isActive: userData.isActive === "true",
      parent_id: userData.parent_id === "0" ? null : parseInt(userData.parent_id),
    };

    axios
      .post("http://localhost:3000/category/create", formattedData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Response:", res.data);
        alert("Category added successfully!");
        navigate("/add-category");
      })
      .catch((error) => {
        if (error.response && error.response.data.errors) {
          setFormValidationError(error.response.data.errors);
        } else {
          console.error("Submission error:", error);
          alert("Please submit data properly");
        }
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
                <a onClick={handleNavigate("/category-list")}  className="bg-primary text-white px-2 fw-bold"><span className="pe-2"><i className="fa-solid fa-bars"></i></span>Category List</a>
              </div>
              <div>
                <h2>Add Category</h2>
              </div>
              </div>
             



              <form onSubmit={handleSubmit} className="add-user-form">
                <div className="form-group">
                  <label htmlFor="slugname">Category Name:</label>
                  <input
                    className="mt-2 mb-2 form-control"
                    type="text"
                    id="slugname"
                    name="slugname"
                    value={userData.slugname}
                    onChange={handleChange}
                    required
                    placeholder="Category Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Category Description:</label>
                  <textarea
                    className="mt-2 mb-2 form-control"
                    id="description"
                    name="description"
                    value={userData.description}
                    onChange={handleChange}
                    placeholder="Category Description"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Parent Category</label>
                  <select
                    name="parent_id"
                    value={userData.parent_id}
                    onChange={handleChange}
                    className="mt-2 mb-2 form-control"
                    required
                  >
                    <option value="0">No Parent</option>
                    {userParentData.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.slugname}
                      </option>
                    ))}
                  </select>
                </div>

                {formValidationError.length > 0 && (
                  <p className="h6 text-danger">{formValidationError.join(", ")}</p>
                )}

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
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>

                <button type="submit" className="adduser">
                  Add Category
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

export default AddCategory;
