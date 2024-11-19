import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import AddUser from './components/AddUser/AddUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import UserList from './components/UserList/UserList';
import Updateuser from './components/UpdateUser/Updateuser';
import DeleteUser from './components/DeleteUser/DeleteUser';
import AddCategory from './components/AddCategory/AddCategory';
import CategoryList from './components/CategoryList/CategoryList';
import Updatecategory from './components/Updatecategory/Updatecategory';
import DeleteCategory from './components/DeleteCategory/DeleteCategory';
import ProductList from './components/ProductList/ProductList';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import DeleteProduct from './components/DeleteProduct/DeleteProduct';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/category-list" element={<CategoryList />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/update-user/:id" element={<Updateuser />} />
        <Route path="/update-category/:id" element={<Updatecategory />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
        <Route path="/delete-user/:id" element={<DeleteUser />} />
        <Route path="/delete-category/:id" element={<DeleteCategory />} />
        <Route path="/delete-product/:id" element={<DeleteProduct />} />
        <Route path="/product-list" element={<ProductList />} />

      </Routes>
    </Router>
  );
}

export default App;
