import React from 'react';
import { Trip } from './Trip';

export const TripsList = ({match, days}) => { 
    const filter = match.params.filter;
    const trips = filter ? days.filter( trip => trip.type === filter) : days;
    return (
        <div style={{background:"wheat",paddingBottom:200}}>
            <h3>{filter ? filter : 'All'} Trips</h3>            
            <table className="table table-striped">
                <thead className="table table-dark">
                    <tr>
                        <th>Date</th>
                        <th>Number of Persons</th>
                        <th>Place</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map((trip, i) => 
                            <Trip
                                key={i}
                                {...trip}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
