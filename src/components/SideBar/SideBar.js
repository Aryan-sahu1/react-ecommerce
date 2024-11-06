import React from 'react'
import './SideBar.css'
import navList from '../../data/navItem'
import NavItem from '../NavItem/NavItem'
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => () => {
        navigate(path);
    };
    return (
        <>
            <aside id='sidebar' className='sidebar'>
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className='bi bi-grid'></i>
                            <span>DashBoard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                            className="nav-link collapsed"
                            data-bs-target='#components-nav'
                            data-bs-toggle='collapse'
                        >
                            <i className='bi bi-menu-button-wide'></i>
                            <span>Documents</span>
                            <i className='bi bi-chevron-down ms-auto'></i>
                        </a>
                        <ul
                            className="nav-content collapse"
                            id='components-nav'
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <a href="#">
                                    <i className='bi bi-circle'></i>
                                    <span>Customers</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bi bi-circle'></i>
                                    <span>Supliers</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bi bi-circle'></i>
                                    <span>Logistics</span>
                                </a>
                            </li>



                        </ul>
                    </li>

                    <li className="nav-item">
                        <a
                            href="#"
                            className="nav-link collapsed"
                            data-bs-target='#forms-nav'
                            data-bs-toggle='collapse'
                        >
                            <i className='bi bi-journal-text'></i>
                            <span>Forms</span>
                            <i className='bi bi-chevron-down ms-auto'></i>
                        </a>
                        <ul
                            className="nav-content collapse"
                            id='forms-nav'
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                            <a href="/AddUser" onClick={handleNavigate("/AddUser")}>
                                    <i className='bi bi-circle'></i>
                                    <span>Add user</span>
                                </a>
                            </li>
                            <li>
                            <a href="/AddProduct" onClick={handleNavigate("/AddProduct")}>
                                    <i className='bi bi-circle'></i>
                                    <span>Add Product</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bi bi-circle'></i>
                                    <span>Cancellation Form</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                            className="nav-link collapsed"
                            data-bs-target='#tables-nav'
                            data-bs-toggle='collapse'
                        >
                            <i className='bi bi-layout-text-window-reverse'></i>
                            <span>Tables</span>
                            <i className='bi bi-chevron-down ms-auto'></i>
                        </a>
                        <ul
                            className="nav-content collapse"
                            id='tables-nav'
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <a href="#">
                                    <i className='bi bi-circle'></i>
                                    <span>General Tables</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bi bi-circle'></i>
                                    <span>Data Tables</span>
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                            className="nav-link collapsed"
                            data-bs-target='#charts-nav'
                            data-bs-toggle='collapse'
                        >
                            <i className='bi bi-bar-chart'></i>
                            <span>Charts</span>
                            <i className='bi bi-chevron-down ms-auto'></i>
                        </a>
                        <ul
                            className="nav-content collapse"
                            id='charts-nav'
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <a href="#">
                                    <i className='bi bi-circle'></i>
                                    <span>Chart</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bi bi-circle'></i>
                                    <span>ApexCharts</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bi bi-circle'></i>
                                    <span>ECharts</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                            className="nav-link collapsed"
                            data-bs-target='#icons-nav'
                            data-bs-toggle='collapse'
                        >
                            <i className='bi bi-gem'></i>
                            <span>Icons</span>
                            <i className='bi bi-chevron-down ms-auto'></i>
                        </a>
                        <ul
                            className="nav-content collapse"
                            id='icons-nav'
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <a href="#">
                                    <i className='bi bi-circle'></i>
                                    <span>Bootstrap Icons</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bi bi-circle'></i>
                                    <span>Remix Icons</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bi bi-circle'></i>
                                    <span>Boxicons</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className='nav-heading'>Pages</li>
                    {
                        navList.map(nav=>(
<NavItem key={nav._id} nav={nav}/>
                        )
                           
                        )
                    }
                </ul>
            </aside>
        </>
    )
}

export default Sidebar
