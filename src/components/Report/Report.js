import React, { useState } from 'react'
import './Report.css'
import CardFilter from '../CardFilter/CardFilter'
import ReportChart from '../ReportChart/ReportChart';

const Report = () => {
const [filter, setFilter]= useState('Today');

const handleFilterChange = filter =>{
    setFilter(filter);
}

  return (
    <>
      <div className="card">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
            <h5 className="card-title">
                Reports <span>{filter}</span>
            </h5>
            <ReportChart />
        </div>
      </div>
    </>
  )
}

export default Report
