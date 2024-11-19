import './UpdateProduct.css'
import React, { useEffect, useState } from 'react'
import axios from "axios"; 
import { useNavigate, useParams } from 'react-router-dom';
const UpdateProduct = () => {
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
      const { id } = useParams();
      const handleNavigate = (path) => () => {
        navigate(path);
      };

      useEffect(()=>{
        axios
        .get(`http://localhost:3000/product/${id}`)
        .then((res)=>{
            setProductData(res.data.data)
        })

        axios
        .get("http://localhost:3000/product")
        .then((res) => {
          setUserParentData(res.data);
        })
        .catch((err) => console.error("Error fetching parent categories:", err));
      },[id])
    
    
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
        patch(`http://localhost:3000/product/${id}`, formattedData, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            }
          })
          .then((res) => {
            alert("product updated successfully")
            console.log(res)
            navigate('/product-list');
          })
          .catch((error) => {
            if (error.code === "ERR_BAD_REQUEST") {
            }
            alert("please submit data properly")
            console.log(productData)
          });
      }
      
       
  return (
   
    <>


 
 
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product">
              <div className='add-product'>
                <div className="add-product-heading">
                  <div>
                    <h2>Update product Details</h2>
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
                      {item.category_Id || `Category ${item.id}`}
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

export default UpdateProduct
