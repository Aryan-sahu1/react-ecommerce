import React,{useState, useEffect} from 'react'
import './BudgetReport.css'
import info from '../api/info.json'
import CardFilter from '../CardFilter/CardFilter'
import BudgetChart from '../BudgetChart/BudgetChart'
const BudgetReport = () => {
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

        <div className="card-body pb-0">
            <h5 className="card-title">
                Budget Report<span>| {filter}</span>
            </h5>
            <BudgetChart />
        </div>
      </div>
    </>
  )
}

export default BudgetReport
