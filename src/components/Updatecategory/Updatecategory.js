import './Updatecategory.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Updatecategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    slugname: "",
    description: "",
    parent_id: "0",
    isActive: "",
  });

  const [formValidationError, setFormValidationError] = useState([]);
  const [userParentData, setUserParentData] = useState([]);

  // Fetch category data by ID and parent categories on component mount
  useEffect(() => {
    axios
      .get(`http://localhost:3000/category/${id}`)
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => console.error("Error fetching category data:", err));

    axios
      .get("http://localhost:3000/category")
      .then((res) => {
        setUserParentData(res.data);
      })
      .catch((err) => console.error("Error fetching parent categories:", err));
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

    const formattedData = {
      ...userData,
      isActive: userData.isActive === "true",
    };

    axios
      .patch(`http://localhost:3000/category/${id}`, formattedData)
      .then(() => {
        alert("Category updated successfully!");
        navigate('/category-list');
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setFormValidationError(error.response.data.message);
        } else {
          console.error("Error updating category:", error);
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
                              
            <h2>Update Category</h2>
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
                ></textarea>
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
                      {item.slugname || `Category ${item.id}`}
                    </option>
                  ))}
                </select>
              </div>

              {formValidationError.length > 0 && (
                <p className="h6 text-danger">
                  {formValidationError.join(", ")}
                </p>
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
                  <option value="">Select Status</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>

              <button type="submit" className="adduser">
                Update Category
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

export default Updatecategory;
