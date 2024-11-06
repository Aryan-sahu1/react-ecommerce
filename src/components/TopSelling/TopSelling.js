import React, { useState, useEffect } from 'react'
import './TopSelling.css'
import info from '../api/info.json';
import CardFilter from '../CardFilter/CardFilter';
import TopSellingItem from '../TopSellingItem/TopSellingItem';
 

const TopSelling = () => {
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState('Today')
    const handleFilterChange = filter => {
        setFilter(filter);
    }
    useEffect(() => {
        if (info && info.topselling) {
            setItems(info.topselling); // Set the items from info.json
        }
    }, []);
    return (
        <>
            <div className="card top-selling overflow-auto">
                <CardFilter filterChange={handleFilterChange} />
                <div className="card-body pb-0">
                    <h5 className="card-title">
                        Top Selling <span>{filter}</span>
                    </h5>
                    <table className="table table-borderless">
                        <thead className="table-light">
                            <tr>
                                <th className="col">Preview</th>
                                <th className="col">Product</th>
                                <th className="col">price</th>
                                <th className="col">sold</th>
                                <th className="col">Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items && items.length > 0 &&
                                items.map(item => <TopSellingItem key={item._id} item={item} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TopSelling
