import React, { useEffect, useState } from 'react';
import './ProductList.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [productdata, setProductdata] = useState([]); 
  const navigate = useNavigate();

  const handleNavigate = (path) => () => {
    navigate(path);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/product/")
      .then((res) => {
        // Assuming the API returns an array in res.data
        setProductdata(res.data); 
        console.log("Data fetched: ", res.data);
      })
      .catch((error) => {
        console.error("Error fetching product data: ", error);
      });
  }, []); // Include empty dependency array to ensure it runs only once

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">


            <div className="product-table">
            <div className='py-3 text-center '>
  <h2 className='fw-bold'>Product List</h2>
</div>
              <div>
                <table className='table table-hover table-bordered'>
                  <thead>
                    <tr>
                      <th>S.N</th>
                      <th>Product Name</th>
                      <th>Product Price</th>
                      <th>Discount Price</th>
                      <th>Slug Name</th>
                      <th>Description</th>
                      <th> Category</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productdata.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.discountPrice}</td>
                        <td>{item.slugName}</td>
                        <td>{item.description}</td>
                        <td>{item.category_Id}</td> 
                        <td>{item.isActive ? 'Active' : 'Inactive'}</td>
                        <td className='action-btn-product'>
                          <div>
                            <a onClick={handleNavigate(`/update-product/${item.id}`)} title='edit'>
                              <i className="fa-regular fa-pen-to-square"></i>
                            </a>
                            <a onClick={handleNavigate(`/delete-product/${item.id}`)} title='delete'>
                              <i className="fa-solid fa-trash"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
