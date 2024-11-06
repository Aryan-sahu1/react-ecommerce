import React from 'react';
import './RecentSalesTable.css';

const RecentSalesTable = ({ items }) => {
  const handleStatus = (status) => {
    switch (status) {
      case 'Approved':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Rejected':
        return 'danger';
      default:
        return 'primary'; // Provide a consistent default status color
    }
  };

  return (
    <table className="table table-borderless datatable">
      <thead className="table-light">
        <tr>
          <th className="col">#</th>
          <th className="col">Customer</th>
          <th className="col">Product</th>
          <th className="col">Price</th>
          <th className="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {items && items.length > 0 ? (
          items.map((item) => (
            <tr key={item._id}>
              <th scope="row">
                <a href="#">{item.number}</a>
              </th>
              <td>{item.customer}</td>
              <td>
                <a href="#" className="text-primary">
                  {item.product}
                </a>
              </td>
              <td>
                ${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}
              </td>
              <td>
                <span className={`badge bg-${handleStatus(item.status)}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              No sales data available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default RecentSalesTable;
