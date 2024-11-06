import React,{ useEffect} from 'react'
import './BudgetChart.css'
import * as echarts from 'echarts'
const BudgetChart = () => {
  useEffect(()=>{
    echarts.init(document.querySelector('#budgetChart')).setOption({
      legend:{
        data:['Allocated Budget', 'Actual Spnding'],
      },
      radar:{
        shape:'circle',
        indicator:[
          {
            name:'Sales',
            max:6500
          },
          {
            name:'Adminstration',
            max:16000
          },
          {
            name:'Information Technology',
            max:30000
          },
          {
            name:'Customer Support',
            max:38000
          },
          {
            name:'Development',
            max:52000
          },
          {
            name:'Marketing',
            max:25000
          },
        ],
      },
      series:[
        {
          name:'Budgets vs Spending',
          type:'radar',
          data:[
            {
              value:[4200, 3000, 20000, 35000, 50000, 18000],
              name:'Allocated Budget',
            },
            {
              value:[5000, 14000,28000,26000,42000,21000],
              name:'Actual Spending',
            },
          ],

        },
      ],
    });
  },[]);
  return (
    <>
    <div className="echart" id="budgetChart" style={{minHeight:'400px'}}></div>
    </>
  )
}

export default BudgetChart
