import React, { useEffect, useState } from 'react';
import './RecentSales.css';
import CardFilter from '../CardFilter/CardFilter';
import info from '../api/info.json'; // Assuming info.json has a "recentsales" property
import RecentSalesTable from '../RecentSalesTable/RecentSalesTable';

const RecentSales = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    useEffect(() => {
        if (info && info.recentsales) {
            setItems(info.recentsales); // Set the items from info.json
        }
    }, []);

    return (
        <div className="card recent-sales overflow-auto">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">
                    Recent Sales <span>{filter}</span>
                </h5>
                <RecentSalesTable items={items} />
            </div>
        </div>
    );
};

export default RecentSales;
