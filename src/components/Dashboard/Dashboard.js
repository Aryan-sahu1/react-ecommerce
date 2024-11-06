import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import info from '../api/info.json'; // info.json is imported as a module
import Card from '../Card/Card';
import Report from '../Report/Report';
import RecentSales from '../RecentSales/RecentSales';
import TopSelling from '../TopSelling/TopSelling';
import RecentActivity from '../RecentActivity/RecentActivity';
import BudgetReport from '../BudgetReport/BudgetReport';

const Dashboard = () => {
    const [cards, setCards] = useState([]);

    // Directly use the imported info.json data
    useEffect(() => {
        setCards(info.cards);  // assuming info.json has a "cards" field as you provided earlier
    }, []);

    return (
        <>
            <section className="dashboard section">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            {cards && cards.length > 0 &&
                                cards.map((card) => (
                                    <Card key={card._id} card={card} />
                                ))}
                            <div className="col-12">
                                <Report />
                            </div>
                            <div className="col-12">
                                <RecentSales />
                            </div>
                            <div className="col-12">
                                <TopSelling />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
<RecentActivity />
<BudgetReport/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
