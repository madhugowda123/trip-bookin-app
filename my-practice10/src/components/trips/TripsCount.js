import React from 'react';

// Get percent completed
const getProgress = (total, goal) => {
    return Math.floor((total/goal)*100) + '%';
}

// Object of width of progress bar
const getProgressBarWidth = (width) => {
    return {width};
}
export const TripsCount = ({total, goal=15}) => (
    <div className="trips-count" >
        <div className="content">
            <div className="total" style={{marginTop:80}}><h1>{total}</h1><h1>Booked Trips</h1></div>
            <div className="goal" style={{marginTop:80,paddingBottom:180}}><div  style={getProgressBarWidth(getProgress(total,goal))}></div><h1>{getProgress(total, goal)}</h1><h1>Booking Percentage</h1></div>
        </div>
    </div>
)