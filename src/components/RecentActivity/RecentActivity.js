import React,{useState, useEffect} from 'react'
import './RecentActivity.css'
import info from '../api/info.json'
import CardFilter from '../CardFilter/CardFilter'
import RecentActivityItem from '../RecentActivityItem/RecentActivityItem'
const RecentActivity = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');

    const handleFilterChange = filter => {
        setFilter(filter);
    };

    useEffect(() => {
        if (info && info.recentactivity) {
            setItems(info.recentactivity); // Set the items from info.json
        }
    }, []);
  return (
    <>
      <div className="card">
        <CardFilter filterChange={handleFilterChange} />

        <div className="card-body">
            <h5 className="card-title">
                Recent Activity <span>| {filter}</span>
            </h5>
            <div className="activity">
                {items && items.length >0 &&
                items.map(item =>(
                    <RecentActivityItem key={item._id} item={item}/>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default RecentActivity
