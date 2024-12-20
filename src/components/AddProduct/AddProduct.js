import React, { useEffect, useState } from 'react'
import axios from "axios";
import './AddProduct.css'
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {

  const [productData, setProductData] = useState({
    productName: "",
    price: "",
    discountPrice: "",
    slugName: "",
    description: "",
    category_Id: "",
    isActive: ""
  });

  const [userParentData, setUserParentData] = useState([]);
  const navigate = useNavigate()
  const handleNavigate = (path) => () => {
    navigate(path);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    const formattedData = {
      ...productData,
      price: parseInt(productData.price),
      discountPrice: parseInt(productData.discountPrice),
      category_Id: parseInt(productData.category_Id),
      isActive: productData.isActive === "true",
    };

    e.preventDefault();

    axios.
      post("http://localhost:3000/product/create", formattedData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      })
      .then((res) => {
        alert("form submitted")
        console.log(res)
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") {
        }
        alert("please submit data properly")
        console.log(productData)
      });
  }
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((res) => {
        // Filter to remove duplicate slugnames
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
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product">
              <div className='add-product'>
                <div className="add-product-heading">
                  <div>
                    <h2>Add product Details</h2>
                  </div>
                  <div className='product-list-add'>
                    <a onClick={handleNavigate("/product-list")}><span><i className="fa-solid fa-bars"></i></span>Product-list</a>
                  </div>
                </div>
                <div className="product-form">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group pt-4">
                      <label htmlFor="productName">Product Name:</label>
                      <input
                        className="mt-2 mb-2 form-control input-width"
                        type="text"
                        id="productName"
                        name="productName"
                        value={productData.productName}
                        onChange={handleChange}
                        placeholder="Product Name"
                        required
                      />
                    </div>
                    <div className="form-group pt-2">
                      <label htmlFor="price">Product Price:</label>
                      <input
                        className="mt-2 mb-2 form-control input-width"
                        type="text"
                        id="price"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        placeholder="Product Price"
                        required
                      />
                    </div>
                    <div className="form-group pt-2">
                      <label htmlFor="discountPrice">Discount Price:</label>
                      <input
                        className="mt-2 mb-2 form-control input-width"
                        type="text"
                        id="discountPrice"
                        name="discountPrice"
                        value={productData.discountPrice}
                        onChange={handleChange}
                        placeholder="discount Price"
                        required
                      />
                    </div>
                    <div className="form-group pt-2">
                      <label htmlFor="slugName">Slug Name:</label>
                      <input
                        className="mt-2 mb-2 form-control input-width"
                        type="text"
                        id="slugName"
                        name="slugName"
                        value={productData.slugName}
                        onChange={handleChange}
                        placeholder="slugName Price"
                        required
                      />
                    </div>
                    <div className="form-group pt-2">
                      <label htmlFor="description">Description</label>
                      <textarea
                        className="mt-2 mb-2 form-control  "
                        name="description"
                        id="description"
                        value={productData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        required
                      >

                      </textarea>
                    </div>
                    <div className="form-group pt-2">
                      <label>Select Category</label>

                      <select
                        id='category_Id'
                        name="category_Id"
                        value={productData.category_Id}
                        onChange={handleChange}
                        className="mt-2 mb-2 form-control"
                        required
                      >
                         <option value="0">Null</option>
                    {userParentData.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.slugname}
                      </option>
                    ))}

                      </select>
                    </div> 
                    <div className="form-group pt-2">
                      <label>Status</label>

                      <select
                      id='isActive'
                        name="isActive"
                        value={productData.isActive}
                        onChange={handleChange}
                        className="mt-2 mb-2 form-control"
                        required
                      > 
                        <option value="true">True</option>
                        <option value="false">false</option>  
                      </select>
                    </div>
                    <div className='form-group pt-2'>
                    <button type="submit" className="submit-product" onClick={handleSubmit}>
                    Add Product
                  </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AddProduct
